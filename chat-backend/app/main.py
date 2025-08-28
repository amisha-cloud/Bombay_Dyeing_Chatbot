from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import aiofiles
import os
import subprocess

app = FastAPI()

# Allow frontend to communicate
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Directory for uploaded images
UPLOAD_FOLDER = "uploaded_images"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# ----------- Models -----------

class ChatRequest(BaseModel):
    message: str
    history: List[dict] = []

class ChatResponse(BaseModel):
    reply: str

# ----------- Routes -----------

@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    user_msg = request.message
    # Add user message to history
    conversation = request.history + [{"role": "user", "content": user_msg}]

    # Use Ollama for generating the reply
    response = subprocess.run(
        ["ollama", "run", "llama3", user_msg],
        capture_output=True,
        text=True
    )

    reply = response.stdout.strip() or "Sorry, something went wrong."
    return ChatResponse(reply=reply)

@app.post("/upload-image/")
async def upload_image(file: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)
    
    async with aiofiles.open(file_path, 'wb') as out_file:
        content = await file.read()
        await out_file.write(content)
    
    return {"filename": file.filename, "url": f"/{file_path}"}

# ----------- Optional: Serve Uploaded Images -----------

from fastapi.staticfiles import StaticFiles
app.mount("/uploaded_images", StaticFiles(directory="uploaded_images"), name="uploaded_images")
