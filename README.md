# Expense Tracker

A simple full-stack expense tracker: add expenses, filter them by category, and see your total spending.

## Tech stack

| Layer     | Technology                                  |
|-----------|---------------------------------------------|
| Backend   | Java 21, Spring Boot 3.5, Spring Data JPA   |
| Database  | H2 (in-memory)                              |
| API       | REST (JSON over HTTP)                        |
| Frontend  | React 18 (Vite), plain CSS                   |

## Project structure

```
backend/    Spring Boot REST API  (port 8080)
frontend/   React + Vite web app  (port 5173)
```

The backend follows the classic layered design:
**Controller → Service → Repository → Entity**.

## Running the app

You need **two terminals** — one for the backend, one for the frontend.

### 1. Backend (Spring Boot)

```bash
cd backend
./mvnw spring-boot:run
```

Starts on http://localhost:8080. It uses an in-memory H2 database and seeds a few
sample expenses on startup (data resets each time you restart).

### 2. Frontend (React)

```bash
cd frontend
npm install      # first time only
npm run dev
```

Open http://localhost:5173 in your browser.

## REST API

| Method | Endpoint                        | Description                          |
|--------|---------------------------------|--------------------------------------|
| GET    | `/api/expenses`                 | List all expenses                    |
| GET    | `/api/expenses?category=Food`   | List expenses in a category          |
| GET    | `/api/expenses/total`           | Total spending (all)                 |
| GET    | `/api/expenses/total?category=Food` | Total spending in a category     |
| POST   | `/api/expenses`                 | Add an expense (JSON body)           |
| DELETE | `/api/expenses/{id}`            | Delete an expense                    |

Example add:

```bash
curl -X POST http://localhost:8080/api/expenses \
  -H "Content-Type: application/json" \
  -d '{"description":"Coffee","amount":4.50,"category":"Food","date":"2026-07-03"}'
```

## Database console (optional)

While the backend is running, browse the data at http://localhost:8080/h2-console
using JDBC URL `jdbc:h2:mem:expenses`, user `sa`, no password.
