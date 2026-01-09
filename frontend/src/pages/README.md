# Survey Feedback System (MERN Stack)

Survey Feedback System is a full-stack web application built using the MERN stack.  
The application allows an admin to create surveys and view survey details.  
Authentication is implemented using JWT to secure protected routes.

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

### 1️⃣ Backend Setup

```bash
cd backend
npm install
npm run dev
