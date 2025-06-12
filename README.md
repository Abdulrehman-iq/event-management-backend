# Express MongoDB Backend

This project is a backend application built with Node.js and Express.js that connects to a MongoDB database for storing user details. It provides authentication and user management functionalities.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd express-mongodb-backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and set the required environment variables (see below).

## Usage

1. Start the server:
   ```
   npm start
   ```

2. The server will run on `http://localhost:5000` (or the port specified in your environment variables).

## Environment Variables

Create a `.env` file in the root directory with the following content:

```
MONGODB_URI=<your_mongodb_connection_string>
PORT=5000
```

Replace `<your_mongodb_connection_string>` with your actual MongoDB connection string.

## API Endpoints

- **Authentication**
  - `POST /api/auth/register` - Register a new user
  - `POST /api/auth/login` - Log in an existing user

- **User Management**
  - `GET /api/users` - Get all users
  - `GET /api/users/:id` - Get user by ID
  - `PUT /api/users/:id` - Update user by ID
  - `DELETE /api/users/:id` - Delete user by ID

## License

This project is licensed under the MIT License.