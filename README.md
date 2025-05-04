# 🛍️ Product Manager App

A full-stack Product Management System built with **Node.js**, **Express.js**, **MySQL**, and **React.js**, featuring:

- 🔐 JWT-based authentication
- 📦 CRUD operations for products
- 🧪 Swagger for API documentation and testing
- 🛡️ Role-based route protection
- ⚛️ React frontend for user interaction

---

## 🖼️ Screenshot Preview

![Product Manager Screenshot](https://via.placeholder.com/800x400?text=App+Screenshot+Here)

---

## 📁 Project Structure

├── backend/ # Node.js + Express API
│ ├── routes/
│ ├── controllers/
│ ├── models/
│ ├── middleware/
│ ├── swagger.js
│ ├── app.js
│ └── .env
├── frontend/ # React.js SPA
│ ├── src/components/
│ ├── src/App.js
│ ├── src/api.js
│ └── .env
└── README.md


---

## 🚀 Features

### ✅ Backend (Node.js + Express)
- User Registration & Login (`/api/register`, `/api/login`)
- JWT Authentication & Middleware
- CRUD operations: Products
- Swagger UI for API docs
- Role-protected routes
- MySQL database connection

### 🖥️ Frontend (React)
- Register/Login forms
- Persistent auth with localStorage
- Product list, create, edit, delete
- Axios for API calls
- Protected routes using React Router

---

## 🔧 Tech Stack

| Layer        | Tech                              |
|--------------|-----------------------------------|
| **Frontend** | React.js, Axios, React Router     |
| **Backend**  | Node.js, Express.js, Swagger UI   |
| **Database** | MySQL                             |
| **Auth**     | JSON Web Token (JWT)              |
| **Docs**     | Swagger                           |

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/product-manager-app.git
cd product-manager-app
cd backend
cp .env.example .env      # Add DB config + JWT secret
npm install
npm run dev               # Runs on http://localhost:5000

🧪 API Documentation
Swagger UI is available at:
http://localhost:5000/api-docs

🛡️ Authentication Flow
User registers → /api/register

Logs in → receives JWT token

Token is saved in localStorage

Authenticated routes use: Authorization: Bearer <token>

### Environment Variables
###.env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=product_manager
JWT_SECRET=yourSuperSecretKey



