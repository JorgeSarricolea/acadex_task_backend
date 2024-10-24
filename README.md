# API Documentation

## Introduction

This API is built using Clean Architecture principles and provides a set of endpoints for managing categories, homeworks, and users. It is designed to be efficient and scalable, making it easy for developers to integrate with their applications.

## Requirements

- Node.js (version ^16.0.0)
- PostgreSQL
- Prisma

### Environment Variables

Make sure to create a `.env` file in the root of your project with the following variables:

- `JWT_SECRET`: Secret key for JWT authentication.
- `SALT_ROUNDS`: Number of salt rounds for password hashing.
- `DATABASE_URL`: Connection string for your PostgreSQL database.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/JorgeSarricolea/acadex_task_backend.git
   cd acadex_task_backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

> [!IMPORTANT] > **Node.js:** Ensure that you have Node.js installed on your system.

3. **Start the server:**
   ```bash
   npm run dev
   ```

> [!TIP]
> I recommend installing Node Version Manager and using the stable version.

4. **Access the API documentation:**
   Open your browser and go to [http://localhost:8000/api/v1/docs](http://localhost:8000/api/v1/docs) to view the Swagger documentation.

## Features

- **CRUD Operations:** Create, read, update, and delete categories and homeworks.
- **Authentication:** User authentication via JWT.
- **Error Handling:** Centralized error handling with informative responses.
- **CORS Support:** Cross-Origin Resource Sharing enabled for seamless requests from your front end.

> [!WARNING]
> Ensure your database is running and properly configured in the `.env` file before starting the server.
