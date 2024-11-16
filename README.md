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
│   ├── user/
│   │   ├── user.model.ts        # Mongoose schema and user model
│   │   ├── user.service.ts      # User-related services (e.g., fetching users)
│   │   ├── user.controller.ts   # Controller for user routes
│   │   ├── user.routes.ts       # User routes definition
├── middlewares/
│   ├── logger.middleware.ts     # Middleware for logging route methods
├── guards/
│   ├── auth.guard.ts            # Middleware for authentication (protect routes)
│   ├── role.guard.ts            # Middleware for role-based route protection
├── config/
│   ├── database.ts              # MongoDB connection setup
├── app.ts                       # Express app setup
├── server.ts                    # Application entry point
```

## Setup and Installation

1.Clone the Repository

``` bash
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

````

4. Build and Run To start the development server on localhost
   
```
npm run start:dev
```


