# Fastify + Prisma + PostgreSQL Backend API

A **production-ready backend-only project** built using **Fastify**, **Prisma ORM**, and **PostgreSQL**.  
This project follows a **clean layered architecture** (routes → controller → service → repository) and demonstrates real-world backend engineering practices.

---

## Tech Stack

- **Fastify** – High-performance Node.js backend framework  
- **Prisma ORM** – Type-safe database access  
- **PostgreSQL** – Relational database  
- **Swagger (OpenAPI)** – API documentation  

---

## Features

- Modular & scalable project structure
- Full **CRUD APIs** for User management
- Pagination & search support
- Soft delete (`isDeleted`)
- Request validation using JSON Schema
- Centralized error handling
- Swagger UI for API documentation
- Clean Git commit history

---

## Project Structure

```
src/
├── app.js
├── server.js
├── config/
│   └── env.js
├── plugins/
│   ├── prisma.js
│   └── swagger.js
├── middlewares/
│   └── error-handler.js
├── utils/
│   └── api-error.js
└── modules/
    └── user/
        ├── user.routes.js
        ├── user.controller.js
        ├── user.service.js
        ├── user.repository.js
        └── user.schema.js

prisma/
├── schema.prisma
└── migrations/
```

---

## Setup & Installation

### Clone the repository
```bash
git clone <your-repo-url>
cd fastify-prisma-project
```

### Install dependencies
```bash
npm install
```

### Create `.env` file
```env
PORT=3000
DATABASE_URL=postgresql://username:password@host:port/database?sslmode=require
```

### Run Prisma migration
```bash
npx prisma migrate dev
```

### Start the server
```bash
node src/server.js or npm run dev
```

---

## API Documentation (Swagger)

After starting the server, open:

```
http://localhost:3000/docs
```

You can:
- View all endpoints
- See request/response schemas
- Test APIs directly from the browser

---

## API Endpoints

### User APIs

| Method | Endpoint        | Description |
|------|----------------|------------|
| POST | `/users`        | Create user |
| GET  | `/users`        | Get users (pagination + search) |
| GET  | `/users/:id`    | Get user by ID |
| PUT  | `/users/:id`    | Update user |
| DELETE | `/users/:id`  | Soft delete user |

---

## Architecture Explanation (Interview Ready)

- **Routes** → define HTTP endpoints & validation  
- **Controller** → handles request/response  
- **Service** → contains business logic  
- **Repository** → database interaction using Prisma  
- **Middleware** → centralized error handling  

This separation makes the code **maintainable, testable, and scalable**.

---

## Status

✔ Production-ready  
✔ Portfolio-ready  
✔ Interview-ready  

---

## Author

**Hritik Chauhan**  
Backend Developer | Fastify | Prisma | PostgreSQL  

---

## 🏁 Conclusion

This project demonstrates how a **real backend system** is built in industry —  
with clean architecture, proper validation, error handling, and documentation.
