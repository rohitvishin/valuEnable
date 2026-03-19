# 🏦 Benefit Illustration Module

## 📌 Overview
This project is a full-stack insurance benefit illustration module that allows users to calculate and visualize policy benefits based on input parameters such as premium, term, and sum assured.

---

## 🚀 Tech Stack

### Frontend
- React
- React Router
- Axios

### Backend
- Node.js
- Express.js

### Database
- MySQL (Sequelize ORM)

---

## 🔐 Features

- User Authentication (Login/Register using JWT)
- Secure password storage using bcrypt
- Policy input form for calculation
- Dynamic illustration table (year-wise projection)
- Protected routes for authenticated users

---

## 🧮 Calculation Logic

The system calculates:

- Total premium paid over time
- Projected fund value using compound growth
- Life cover (sum assured)

The logic is implemented in a modular service layer for scalability and reuse.

---

## 📊 Screens

1. Login / Register Page
2. Policy Calculation Page
3. Illustration Page (dynamic table)

---

## 🔒 Security

- Passwords are hashed using bcrypt
- JWT-based authentication
- Sensitive data (mobile number) is masked in API responses
- Environment variables used for secrets

---

## 📈 Scalability Approach

- Stateless calculation service
- Can be scaled horizontally
- Future enhancements:
  - Worker queues (Kafka / RabbitMQ)
  - Batch processing for bulk inputs
  - Caching using Redis

---

## ⚙️ Setup Instructions

### Backend

```bash
REACT:
cd insurance-illustration
npm install
npm start

NODE:
cd insurance-backend
npm install
npm run dev
