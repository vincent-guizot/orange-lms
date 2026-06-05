# 🍊 Orange LMS Backend

Backend API for Orange LMS built with Node.js, Express.js, PostgreSQL, and Sequelize ORM.

---

## Overview

Orange LMS Backend provides authentication, authorization, class management, learning resources, assessments, submissions, and user management for the Orange Learning Management System.

The system supports multiple user roles:

- Owner
- Admin
- Mentor
- Mentee

---

## Core Features

### Authentication & Authorization

- JWT Authentication
- Role-Based Access Control (RBAC)
- Protected Routes
- Permission-Based Access

### User Management

- Manage Users
- Manage Mentors
- Manage Mentees
- User Profiles

### Learning Management

- Classes
- Meetings
- Tasks
- Notes
- Materials

### Assessment Engine

- Attendance
- Task Criteria
- Assessment Results
- Submission Scores
- History Classes

### Learning Workflow

- Class Enrollment
- Mentor Assignment
- Task Submission
- Assessment Tracking
- Learning Progress

---

## Tech Stack

### Backend

- Node.js
- Express.js

### Database

- PostgreSQL
- Sequelize ORM

### Security

- JWT
- Bcrypt

### Documentation

- Swagger/OpenAPI

---

## Project Structure

```txt
orange-lms-backend/
│
├── package.json
├── server.js
├── .env
├── .env.example
├── .gitignore
├── .sequelizerc
│
├── src/
│
├── config/
│   └── config.js
│
├── controllers/
│   ├── auth.controller.js
│   ├── user.controller.js
│   ├── mentor.controller.js
│   ├── mentee.controller.js
│   ├── class.controller.js
│   ├── meeting.controller.js
│   ├── task.controller.js
│   ├── note.controller.js
│   ├── material.controller.js
│   └── ...
│
├── routes/
│   ├── auth.js
│   ├── user.js
│   ├── mentor.js
│   ├── mentee.js
│   ├── class.js
│   ├── meeting.js
│   ├── task.js
│   ├── note.js
│   ├── material.js
│   └── ...
│
├── services/
│   ├── auth.service.js
│   ├── user.service.js
│   ├── mentor.service.js
│   ├── mentee.service.js
│   ├── class.service.js
│   ├── meeting.service.js
│   ├── task.service.js
│   ├── note.service.js
│   ├── material.service.js
│   └── ...
│
├── middlewares/
│   ├── authentication.js
│   ├── authorization.js
│   ├── errorHandler.js
│   └── ...
│
├── helpers/
│   ├── bcrypt.js
│   ├── jwt.js
│   └── ...
│
├── models/
├── migrations/
└── seeders/
```

---

## Installation

### 1. Clone Repository

```bash
git clone <repository-url>
cd orange-lms-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment

Create:

```bash
.env
```

Example:

```env
PORT=3000

DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=orange_lms_dev
DB_HOST=127.0.0.1

JWT_SECRET=orange_lms_secret
```

### 4. Run Migration

```bash
npx sequelize db:migrate
```

### 5. Run Seeder

```bash
npx sequelize db:seed:all
```

### 6. Start Development Server

```bash
npm run dev
```

Server:

```txt
http://localhost:3000
```

---

## API Routes

### Authentication

```txt
POST   /auth/register
POST   /auth/login
```

### Users

```txt
GET    /users
GET    /users/:id
POST   /users
PUT    /users/:id
DELETE /users/:id
```

### Classes

```txt
GET    /classes
POST   /classes
GET    /classes/:id
PUT    /classes/:id
DELETE /classes/:id
```

### Meetings

```txt
GET    /meetings
POST   /classes/:classId/meetings
GET    /meetings/:id
PUT    /meetings/:id
DELETE /meetings/:id
```

### Learning Resources

```txt
POST /meetings/:meetingId/tasks
POST /meetings/:meetingId/notes
POST /meetings/:meetingId/materials
```

---

## Development Status

### Core CRUD

- Users
- Mentors
- Mentees
- Classes
- Meetings
- Tasks
- Notes
- Materials

Status:

```txt
✅ Completed
```

### Assessment Engine

- Attendance
- Assessment Results
- Submission Scores
- History Classes

Status:

```txt
🚧 In Progress
```

---

## License

Private Project — Orange LMS
