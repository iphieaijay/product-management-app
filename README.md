# 🛍️ Product Manager App

A full-stack CRUD application for managing products with authentication, built using:

🔧 Node.js + Express for the backend API

🔐 JWT Authentication (Login/Register/Protected Routes)

🗃️ MySQL for the database

📑 Swagger for API documentation and testing

⚛️ React.js for the frontend UI

## 🚀 Features
🔐 User Authentication (Register, Login, Logout)

🧾 JWT-Protected Product Endpoints

📦 Product CRUD: Create, Read, Update, Delete

🛠️ Swagger UI for easy API testing

🔄 Token expiration and refresh logic

⚛️ React Frontend with login-protected routes

📁 Clean Project Structure (ready for microservices)

##  🏗️ Tech Stack
Layer	Tech
Backend	Node.js, Express.js
Auth	JWT
Database	MySQL, Sequelize (ORM)
API Testing	Swagger UI
Frontend	React.js, Axios
Dev Tools	Nodemon, dotenv

## 🔧 Getting Started
### 🖥 Backend Setup
cd backend
npm install
cp .env.example .env
### Update your DB credentials in .env
npm run dev
📌 Swagger docs will be available at: http://localhost:5000/api-docs

### 💻 Frontend Setup
cd frontend
npm install
npm start
React app will run on: http://localhost:3000

### 🧪 API Endpoints (Protected by JWT)
Method	Endpoint	Description
POST	/api/auth/register	Register a user
POST	/api/auth/login	Login + Get Token
GET	/api/products	List products
POST	/api/products	Create product
PUT	/api/products/:id	Update product
DELETE	/api/products/:id	Delete product

### 🛡️ All /products routes require a valid Authorization: Bearer <token> header.

### 📸 Screenshots
<details> <summary>📷 Click to expand</summary>
✅ Login screen

🗃️ Product list

📝 Create/Edit product

🔐 Protected route example

</details>

### 🧰 Environment Variables (.env)
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=product_manager
JWT_SECRET=supersecurekey
TOKEN_EXPIRY=3600

### 🧪Swagger Documentation
Available at:
📎 http://localhost:5000/api-docs

Auto-generated using Swagger JSDoc.

### 🔓 Auth Flow
User registers via /auth/register

Logs in via /auth/login and receives a JWT

All product routes require JWT in Authorization header

Tokens expire after 1 hour (configurable)

Optionally refresh expired tokens via a refresh-token endpoint (WIP)

### 📦 Folder Structure (Backend)

backend/
├── controllers/
├── routes/
├── models/
├── middlewares/
├── config/
├── docs/             # Swagger definitions
└── server.js

### 🤝 Contributing
Pull requests are welcome! Here's how to contribute:

Fork the repo

Create your feature branch (git checkout -b feature/new-stuff)

Commit your changes (git commit -m 'Add new stuff')

Push to the branch (git push origin feature/new-stuff)

Create a Pull Request

### 🧯 Known Issues
No token refresh UI in frontend (yet)

Pagination for products is a future enhancement

### 📜 License
MIT © 2025 — Built with 💻, ☕, and just a bit of Stack Overflow panic googling

