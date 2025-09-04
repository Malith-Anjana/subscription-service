<div align="center">
  <br />
  <div>
    <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white" alt="node.js" />
    <img src="https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="express.js" />
    <img src="https://img.shields.io/badge/-MongoDB-13aa52?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb" />
  </div>

  <h3 align="center">A Subscription Management System API</h3>
</div>

# 📌 Subscription Management System API

A **production-ready RESTful API** for managing subscriptions, users, and payments.
This project is designed to handle **real users, real money, and real business logic**, ensuring scalability, security, and smooth integration with frontend applications.

---

## 🚀 Features

* 🔑 **JWT Authentication**: User CRUD operations and subscription management.
* ⌛ **Advanced Rate Limiting and Bot Protection** with Arcjet that helps you secure the whole app.
* 🗄️ **Database Integration** with ORM for seamless data handling.
* 📦 **Database Modeling**: Models and relationships using MongoDB & Mongoose.
* 📩 **Email Reminders**: Automating smart email reminders with workflows using Upstash.
* 🛠️ **Role-based Authorization** (Admin & User).
* 💳 **Subscription Management** (create, update, cancel, expire).
* 📡 **API-first Architecture** for easy frontend integration.
* ⚡ **Scalable Architecture** (controllers, routes, middleware).
* 🛡️ **Global Error Handling**: Input validation and middleware integration.
---

## 🏗️ Tech Stack

* **Node.js + Express** – REST API framework
* **MongoDB** – Database
* **Mongoose** – ORM for schema and query management
* **JWT** – Authentication & secure token handling
* **Bcrypt** – Password hashing

---

## 🧩 Environment Variables (`.env`)

```env
# PORT
PORT=5500
SERVER_URL="http://localhost:5500"

# ENVIRONMENT
NODE_ENV=development

# DATABASE
DB_URI=

# JWT AUTH
JWT_SECRET=
JWT_EXPIRES_IN="1d"

# ARCJET
ARCJET_KEY=
ARCJET_ENV="development"

# UPSTASH
QSTASH_URL=http://127.0.0.1:8080
QSTASH_TOKEN=

# NODEMAILER
EMAIL=
EMAIL_PASSWORD=
```

---

## 📊 Dummy JSON Data

```json
{
  "name": "Javascript Mastery Elite Membership",
  "price": 139.00,
  "currency": "USD",
  "frequency": "monthly",
  "category": "Entertainment",
  "startDate": "2025-01-20T00:00:00.000Z",
  "paymentMethod": "Credit Card"
}
```

---



