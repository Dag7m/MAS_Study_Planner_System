# Multi-Agent Study Planner System

## Overview

The Multi-Agent Study Planner System is a full-stack intelligent application that applies Multi-Agent Systems (MAS) principles to generate personalized study plans for students.

The system is built using:

- CrewAI for multi-agent coordination  
- Google Gemini API for AI reasoning  
- FastAPI for backend services  
- Next.js with TypeScript for frontend  
- Tailwind CSS for user interface design  

The project demonstrates how multiple autonomous agents can collaborate to solve real-world academic problems.

---

## Project Objectives

This project was developed to:

- Design a real-world Multi-Agent System  
- Implement specialized autonomous agents  
- Demonstrate agent collaboration using CrewAI  
- Integrate LLM-based reasoning using Gemini  
- Build a scalable full-stack system  
- Apply software engineering best practices  

---

## System Architecture

### High-Level Architecture

User (Browser)
↓
Next.js Frontend
↓ HTTP API
FastAPI Backend
↓
CrewAI Orchestration
↓
Gemini LLM


### Agent Workflow

Planner Agent → Coach Agent → Evaluator Agent → Final Output


Agents execute sequentially and share memory.

---

## Multi-Agent Design

The system consists of three specialized agents:

### 1. Study Planner Agent
- Role: Academic Planner  
- Goal: Create realistic study schedules  
- Expertise: Time management  

### 2. Motivation Coach Agent
- Role: Student Coach  
- Goal: Encourage consistency and discipline  
- Expertise: Psychology and motivation  

### 3. Performance Evaluator Agent
- Role: Learning Analyst  
- Goal: Optimize study strategies  
- Expertise: Learning analytics  

Each agent has a clearly defined role, goal, and backstory in accordance with CrewAI principles.

---

## Project Structure

study-planner-mas/
│
├── backend/
│ ├── app/
│ │ ├── agents/
│ │ ├── tasks/
│ │ ├── crew/
│ │ ├── api/
│ │ ├── core/
│ │ └── main.py
│ ├── .env
│ └── requirements.txt
│
├── frontend/
│ ├── app/
│ ├── components/
│ ├── services/
│ └── package.json
│
├── docs/
│ ├── report.pdf
│ └── slides.pptx
│
├── .gitignore
└── README.md


---

## Technologies Used

### Backend
- Python 3.9+
- CrewAI
- FastAPI
- Uvicorn
- LangChain
- Google Gemini API
- Python-dotenv

### Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- React

---

## Installation and Setup

### Prerequisites

- Python 3.9 or higher  
- Node.js 18 or higher  
- npm  
- Google Gemini API Key  

---

## Backend Setup

### 1. Navigate to backend folder

```bash
cd backend
2. Create virtual environment
python -m venv venv
source venv/bin/activate    # Linux/Mac
venv\Scripts\activate       # Windows
3. Install dependencies
pip install -r requirements.txt
4. Configure environment variables
Create a .env file inside backend/:

GEMINI_API_KEY=your_api_key_here
5. Run backend server
uvicorn app.main:app --reload
Backend URL:

http://127.0.0.1:8000
Swagger UI:

http://127.0.0.1:8000/docs
Frontend Setup
1. Navigate to frontend folder
cd frontend
2. Install dependencies
npm install
3. Run frontend server
npm run dev
Frontend URL:

http://localhost:3000
API Testing
The backend can be tested using Swagger UI.

Endpoint
POST /plan
Sample Request
{
  "subjects": "Database Systems, Computer Networks",
  "duration": "3 weeks",
  "hours_per_day": "3 hours",
  "level": "Undergraduate"
}
Sample Response
{
  "result": "Generated study plan..."
}