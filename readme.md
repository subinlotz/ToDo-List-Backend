# To-Do List API with Node.js, Express.js, and MongoDB

## Overview
This project is the backend implementation of a To-Do List app using Node.js, Express.js, and MongoDB. The API allows users to create, retrieve, update, and delete tasks.

## Features
- Create a new task
- Retrieve all tasks
- Update a task
- Delete a task
- Error handling and validation

## Technologies Used
- Node.js
- Express.js
- MongoDB (Mongoose)
- Postman (for testing)

## Setup Instructions

### 1. Clone the Repository


### 2. Install Dependencies
```sh
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory and add the following:
```env
PORT=5000
MONGO_URI=<your-mongodb-connection-string>
```
Replace `<your-mongodb-connection-string>` with your actual MongoDB URI.

### 4. Run the Server
```sh
npm run dev
```
The server will run on `http://localhost:3000`

## API Endpoints

| Method | Endpoint    | Description        |
|--------|-------------|--------------------|
| GET    | `/`         | Get all tasks      |
| POST   | `/save`     | Create a new task  |
| PUT    | `/update`   | Update a task      |
| DELETE | `/delete`   | Delete a task      |

## Testing with Postman
1. Open Postman.
2. Use the API endpoints to test different operations.
3. Ensure proper request body structure for POST and PUT requests.


## Challenges Faced & Solutions
- **MongoDB Connection Issues**: Used `mongoose.connect()` with proper error handling.
- **API Testing**: Used Postman to test and debug endpoints.

