Bombay Dyeing Chatbot

The **Bombay Dyeing Chatbot** is a basic AI-powered chatbot system built using **React**, **FastAPI**, and **Ollama**. This system helps employees quickly ask work-related questions (e.g., IT issues, HR policies) and get instant responses or ticket creation for further follow-up.

## Objective

The chatbot aims to:
- Provide instant answers to common employee queries.
- Generate tickets for unresolved issues.
- Route queries to the correct departments (IT, HR, Admin).

## Core Features

- **Employee Login**: Simple login using Employee ID.
- **Query Routing**: Directs queries to IT, HR, or Admin departments.
- **Chat Interface**: A chat bubble layout for seamless interaction with the bot.
- **LLM-Powered Replies**: AI-generated responses using **Ollama**.
- **Auto Ticket Generation**: Generates sample ticket IDs like `IT123`, `HR456`.
- **Responsive UI**: Fully responsive for both desktop and mobile users.

## Tech Stack

- **Frontend**: React
- **Backend**: FastAPI (Python)
- **Chatbot Engine**: Ollama

## Running the System

### Frontend Setup:
1. Clone the repository:
   
   git clone https://github.com/yourusername/Bombay_Dyeing_Chatbot.git
   cd Bombay_Dyeing_Chatbot/frontend
Install dependencies:


npm install
Start the frontend:


npm start
Backend Setup:
Navigate to the backend directory:


cd Bombay_Dyeing_Chatbot/backend
Install dependencies:


pip install -r requirements.txt
Run the FastAPI server:


uvicorn main:app --reload
Conclusion
The Bombay Dyeing Chatbot streamlines employee query handling by automating responses and ticket creation, helping improve internal communication and efficiency.
