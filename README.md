# Bombay Dyeing Chatbot

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
- **LLM-Powered Replies**: Chatbot powered by **Ollama** for intelligent responses.
- **Auto Ticket Generation**: Generates sample ticket IDs like `IT123`, `HR456`.
- **Responsive UI**: Fully responsive for both desktop and mobile users.

## Tech Stack

- **Frontend**: React
- **Backend**: FastAPI (Python)
- **Chatbot Engine**: Ollama

## Running the System

### Frontend Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/Bombay_Dyeing_Chatbot.git
Navigate to the frontend directory:

bash
Copy code
cd Bombay_Dyeing_Chatbot/frontend
Install dependencies:

bash
Copy code
npm install
Start the frontend:

bash
Copy code
npm start
Backend Setup
Navigate to the backend directory:

bash
Copy code
cd Bombay_Dyeing_Chatbot/backend
Install dependencies:

bash
Copy code
pip install -r requirements.txt
Run the FastAPI server:

bash
Copy code
uvicorn main:app --reload
Conclusion
The Bombay Dyeing Chatbot streamlines employee query handling by automating responses and ticket creation, improving internal communication and efficiency.
