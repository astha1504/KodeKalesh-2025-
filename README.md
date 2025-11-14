# VeriCreate — AI Content Generation & Verification Platform

**VeriCreate** is a full-stack AI-enabled platform that helps individuals, creators, and organizations **generate, verify, and manage digital content** with authenticity and trust.  
It blends **AI content creation**, **metadata-based verification**, and a **modern dashboard** to ensure content originality and integrity.

---

## Idea

Content creation today is fast, automated, and often unregulated.  
Organizations struggle with:

- High content production demand  
- Verifying authenticity of AI-generated content  
- Tracking originality  
- Ensuring responsible use of generative AI  

**VeriCreate solves this by offering:**

1. **AI-based content generation** (Text + Images)  
2. **Metadata tagging & intelligent storage**  
3. **Cryptographic verification** (SHA-256 hash signature)  
4. **Authenticity scoring & history tracking**  

---

## Features

### 🔹 AI Content Generation
- Text generation using OpenAI / Gemini  
- Image generation using Stable Diffusion  
- Multi-language support  
- Custom prompt-based outputs  

### 🔹 Content Verification Engine
- Creates a unique SHA-256 hash for each content  
- Detects edited or manipulated versions  
- Returns authenticity score  
- Saves verification metadata  

### 🔹 Modern Dashboard
- Activity history  
- Real-time generated output  
- Clean UX with animations  
- Multi-module layout (Generate, Verify, History, Profile)  

---

## Tech Stack

### Frontend  
- React.js  
- Tailwind CSS  
- Framer Motion  
- Axios  

### Backend  
- Node.js  
- Express.js  
- Crypto (SHA-256 hashing)  

### AI Engines  
- OpenAI GPT  
- Google Gemini  
- Stable Diffusion  

---

## Project Structure

VeriCreate/
│
├── frontend/
│ ├── src/
│ ├── public/
│ └── package.json
│
└── backend/
├── routes/
├── services/
├── controllers/
└── package.json

yaml
Copy code

---

## ⚙️ Setup Instructions

###  Clone the Repository
```bash
git clone https://github.com/astha1504/KodeKalesh-2025
cd KodeKalesh-2025
Frontend Setup
bash
Copy code
cd frontend
npm install
npm start
Runs on:
http://localhost:3000

Backend Setup
Install Dependencies
bash
Copy code
cd ../backend
npm install
Add Environment Variables
Create backend/.env:

ini
Copy code
PORT=5000
OPENAI_API_KEY=your_key
GEMINI_API_KEY=your_key
REPLICATE_API_TOKEN=your_key
Start Backend
bash
Copy code
npm start
Runs on:
http://localhost:5000

API Endpoints
POST /api/generate/text
Generate AI-based text.

POST /api/generate/image
Generate AI image.

POST /api/verify
Verify content integrity and return authenticity score.

 Production Build
Frontend

bash
Copy code
npm run build
Backend

bash
Copy code
npm start
Roadmap
Blockchain-backed verification

JWT authentication

User profiles & roles

Export generated content as PDF/DOCX

Advanced analytics dashboard
