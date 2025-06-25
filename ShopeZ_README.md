# 🛒 ShopEZ

ShopEZ is a full-stack e-commerce web application built with the **MERN** stack (MongoDB, Express, React, Node.js). It offers a seamless online shopping experience similar to Amazon or Flipkart.

---

## 📌 Features

- ✅ User Registration & Login (with JWT Authentication)
- ✅ Admin & Customer User Types
- ✅ Product Listing with Images, Prices & Categories
- ✅ Add to Cart & Remove from Cart
- ✅ Product Search
- ✅ Responsive Design with Modern UI (Flipkart-style)
- ✅ Backend API with Express & MongoDB
- ✅ Frontend in React (Hooks + Context API)

---

## 🚀 Technologies Used

| Frontend | Backend | Database |
|----------|---------|----------|
| React.js (Vite/CRA) | Node.js | MongoDB (Atlas) |
| Axios | Express.js | Mongoose |
| React Router | bcrypt.js | JWT |
| Tailwind CSS / Custom CSS | dotenv | CORS |

---

## 📂 Project Structure

ShopEZ_Full_Ready/
│
├── client/ # React frontend
│ ├── src/
│ │ ├── components/ # Navbar, Footer, ProductCard, etc.
│ │ ├── pages/ # Home, ProductList, Login, Register, CartPage
│ │ └── App.js
│ └── package.json
│
├── server/ # Express backend
│ ├── models/ # User.js, Product.js
│ ├── routes/ # auth.js, product.js, cart.js
│ └── index.js
│
├── .env # Environment variables
├── .gitignore
└── README.md

## ⚙️ Setup Instructions

### 📦 Backend (Express + MongoDB)

```bash
cd server
npm install
npm start
Make sure you set the correct MONGODB_URI and JWT_SECRET in your .env

🌐 Frontend (React)
bash
Copy code
cd client
npm install
npm start
Frontend will run on: http://localhost:3000
Backend runs on: http://localhost:5000

🌟 Author
Manjunadh Kokkinti
GitHub: Manjunadh232005

📜 License
This project is licensed for educational and portfolio use







