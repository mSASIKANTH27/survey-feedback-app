# Survey Feedback System (MERN Stack)

Survey Feedback System is a full-stack web application built using the MERN stack.  
The application allows an admin to create surveys and view survey details.  
Authentication is implemented using JWT to secure protected routes.

---

## 🌐 Live Demo

Frontend (Vercel):  
https://survey-feedback-app.vercel.app/

---

## 🚀 Features

- Admin login using JWT authentication
- Secure authentication and protected APIs
- Create surveys with questions and options
- View all created surveys
- Token-based authorization
- Clean and professional card-based UI
- Separate frontend and backend architecture

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- Axios
- CSS (Flexbox)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- CORS

---

## 📂 Project Structure

survey-feedback-app/
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ └── CardLayout.jsx
│ │ ├── pages/
│ │ │ ├── Login.jsx
│ │ │ ├── Dashboard.jsx
│ │ │ ├── CreateSurvey.jsx
│ │ │ └── ViewSurveys.jsx
│ │ └── index.css
│ └── package.json
├── backend/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── server.js
│ └── package.json
└── README.md

---

## ⚙️ How to Run the Project Locally

### Backend Setup

```bash
cd backend
npm install
npm run dev

---

## ⚙️ How to Run the Project Locally

### Backend Setup

```bash
cd backend
npm install
npm run dev

### Frontend Setup

cd frontend
npm install
npm run dev

Frontend runs on:
http://localhost:5173

📜 License

This project is for educational purposes.


---

## ✅ FINAL STEP (VERY IMPORTANT)

Save the file, then run **from root folder**:

```bash
git add README.md
git commit -m "Fix README formatting and content"
git push