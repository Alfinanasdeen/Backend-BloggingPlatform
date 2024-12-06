# Advanced RESTful API for a Blogging Platform

## About

This project provides an advanced RESTful API for a blogging platform designed with **Node.js**, **Express.js**, and a database ( **MongoDB**). The API is capable of managing blog posts, comments, and likes, while also supporting features like **authentication**, **authorization**, **tagging**, **filtering**, and integrating **middleware** for enhanced functionality.

The API follows modern RESTful principles and includes features such as role-based access control (RBAC), input validation, and rate limiting, making it both secure and scalable. Postman documentation for the API is also included for easy testing and usage.

---

## Objective

The goal of this project is to develop a fully functional and robust backend for a blogging platform. The API supports the following features:

- **Authentication**: Users can register, log in, and log out using **JSON Web Tokens (JWT)**.
- **Authorization**: Role-based access control (RBAC) ensures that users can perform actions based on their roles (e.g., admin or regular user).
- **CRUD Operations**: Users can create, read, update, and delete blog posts, comments, and likes.
- **Tagging and Filtering**: Blog posts can be tagged, and users can filter posts by tags.
- **Middleware Integration**: Middleware functions handle error logging, rate limiting, body parsing, and more.
- **Input Validation**: All inputs are validated to ensure the security and integrity of the platform.

---

## Features

- **Express.js Server**: Handles HTTP requests and responses.
- **Database Integration**: MongoDB/PostgreSQL for storing blog posts, users, comments, and likes.
- **CRUD Operations**: Create, read, update, and delete functionality for posts, comments, and likes.
- **Tagging & Filtering**: Add/remove tags and filter posts by tags.
- **JWT Authentication**: Secure user authentication with JWT.
- **Role-based Authorization**: Different access levels for users (admin, regular user).
- **Middleware**: Implements logging, error handling, and rate limiting.
- **Validation**: Ensures inputs are correct and secure.

---

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Alfinanasdeen/blog-platform-rest-api-backend.git
    cd blog-platform-rest-api-backend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the root directory and add the necessary configurations, such as the database connection string and JWT secret key.

4. **Run the application**:
    ```bash
    npm start
    ```

---

## Postman Documentation

For testing and usage, you can explore and test the API using the **Postman Documentation**: [Blogging Platform API Documentation](https://documenter.getpostman.com/view/40205242/2sAYBbdU6B).

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
