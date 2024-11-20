<div style="center"> <h1>TypeScript-Based Backend with Express Framework</h1> </div>

<p>This project is a `TypeScript`-based backend API built using the `Express.js` framework. It features role-based access control , 
secure authentication with `JWT`, and user management functionality.
The code structure and middleware are designed for scalability and maintainability.</p>

## Features ( So far )

- JWT Authentication for secure login and role validation.
- Role-Based Access Control:
- Roles include admin, testUser, and guestUser. ( testing purpose )
- Access restrictions implemented with custom middleware.
- User data is stored in MongoDB using Mongoose.
- Passwords are hashed using bcryptjs.
- Scalable Project Structure for modularity and readability.

## Technologies Used

- Node.js: Runtime environment.
- Express.js: Framework for RESTful API development.
- TypeScript: Type-safe development.
- Mongoose: ODM for MongoDB.
- JWT (jsonwebtoken): Secure token-based authentication.
- bcryptjs: Password hashing and validation.
- Dotenv: Environment variable management.

## Project Structure ( Basic )

```
src/
├── modules/
│   ├── auth/
│   │   ├── auth.controller.ts    # Controller for authentication routes
│   │   ├── auth.service.ts       # Business logic for authentication
│   │   ├── auth.routes.ts        # Authentication routes definition
│   ├── user/
│   │   ├── user.model.ts         # Mongoose schema and user model
│   │   ├── user.interface.ts     # User interface definition
│   │   ├── user.service.ts       # User-related services
│   │   ├── user.controller.ts    # Controller for user routes
│   │   ├── user.routes.ts        # User routes definition
│   ├── student/
│   │   ├── student.model.ts      # Mongoose schema for students
│   │   ├── student.interface.ts  # Student interface definition
│   │   ├── student.service.ts    # Business logic for students
│   │   ├── student.controller.ts # Controller for student-specific routes
│   ├── tutor/
│   │   ├── tutor.model.ts        # Mongoose schema for tutors
│   │   ├── tutor.interface.ts    # Tutor interface definition
│   │   ├── tutor.service.ts      # Business logic for tutors
│   │   ├── tutor.controller.ts   # Controller for tutor-specific routes
│   ├── (Other modules will be here ...)/
├── middlewares/
│   ├── logger.middleware.ts      # Middleware for logging route methods
├── guards/
│   ├── auth.guard.ts             # Middleware for authentication
│   ├── role.guard.ts             # Middleware for role-based route protection
├── config/
│   ├── database.ts               # MongoDB connection setup
│   ├── index.ts                  # environment variable setup
├── app.ts                        # Express app setup
├── server.ts                     # Application entry point
```

The following diagram represents the flow of data and interactions in the backend:

```plaintext
    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
    │   Interface  │ →  │    Schema    │ →  │     Model    │ →  │   DB Query   │
    └──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘
```

<p>The following diagram represents Data flow of the Client to Service and Service to Client</p>

![Data Flow Diagram Whiteboard in Dark Yellow Light Yellow Black Monochromatic Style](https://github.com/user-attachments/assets/c932a382-0dfe-412d-ab5b-fdcb647da657)

## API Endpoints

**Register New User**

- POST /auth/register
- Requesr Body

```json
{
  "username": "testuser",
  "email": "testuser@example.com",
  "password": "password123",
  "role": "student",
  "name": {
    "firstName": "John",
    "lastName": "Doe"
  }
}
```

- Response ( student role)

```json
{
  "message": "User registered successfully",
  "user": {
    "id": "63c8b9d4e20e8b12a0123456",
    "username": "testuser",
    "email": "testuser@example.com",
    "role": "student",
    "guardianInfo": {
      "fatherName": null,
      "motherName": null,
      "contactNo": null
    }
  }
}
```

**Login**

- POST /auth/login
- Requesr Body

```json
{
  "email": "admin@example.com",
  "password": "password123"
}
```

- Response

```json
{
  "message": "Login successful",
  "token": "jwt_token_here"
}
```

**Fetch All Users**

- Method: GET
- Endpoint: /users
- Access: Restricted to admin users.
- How to Access:
  - Use the /auth/login endpoint with a registered user.
  - Copy the returned jwt_token.
  - Add the token as a Bearer Token in Postman or your API client under the Authorization header.
  - Ensure the logged-in user's role is admin. If the role is not admin, you will receive an "Access restricted" message.
    -Sample Response (For an admin user):

```json
{
  "users": [
    { "username": "user1", "email": "user1@example.com" },
    { "username": "user2", "email": "user2@example.com" }
  ]
}
```

- Error Response ( Without Token ):

```json
{ "message": "Unauthorized to access!" }
```

- Error Response ( if Role is not `admin` ):

```json
{ "message": "Access restricted." }
```

## Setup and Installation

1.Clone the Repository

```bash
git clone < this project repository >
cd <folder name>
```

2.Install Dependencies

```bash
npm install
```

3. Setup Environment Variables Create a .env file in the root directory with the following content

```
PORT= <any port number here e.g: 5000>
MONGO_URI= <here mongodb atlas uri>
JWT_SECRET= <your_secret_key>

```

4. Build and Run To start the development server on localhost

```
npm run start:dev
```
