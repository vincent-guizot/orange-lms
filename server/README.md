# Orange LMS – Backend

Backend system for Orange LMS built with Node.js, Express, PostgreSQL, and Sequelize.

## Features

- Role-based access control (Owner, Admin, Mentor, Mentee)
- Class & learning management
- Task submission & grading
- Secure authentication using JWT

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM

## Project Structure

See `/src` for application logic and `/docs` for system documentation.

## Getting Started

1.  Copy `.env.example` to `.env`
2.  Install dependencies
3.  Run migrations
4.  Start server

```

orange-lms-backend/
    │
    ├── package.json
    ├── .sequelizerc # config path untuk sequelize
    ├── .env # env vars (DB, PORT, JWT_SECRET)
    ├── .gitignore
    │
    ├── src/
    │ ├── config/ # konfigurasi DB & Sequelize
    │ │ └── config.js # db config (development, production, test)
    │ │
    │ ├── models/ # Sequelize models
    │ │ ├── index.js # otomatis oleh sequelize init
    │ │ ├── user.js
    │ │ ├── class.js
    │ │ ├── classUser.js
    │ │ ├── meeting.js
    │ │ ├── task.js
    │ │ ├── taskSubmission.js
    │ │ ├── note.js
    │ │ └── material.js
    │ │
    │ ├── migrations/ # Sequelize migration files
    │ │ └── ...
    │ │
    │ ├── seeders/ # Sequelize seed files
    │ │ └── ...
    │ │
    │ ├── controllers/ # logic request/response
    │ │ └── ...
    │ │
    │ ├── routes/ # express routes
    │ │ └── ...
    │ │
    │ ├── middlewares/ # auth, RBAC, error handling
    │ │ └── ...
    │ │
    │ ├── services/ # business logic
    │ │ └── ...
    │ │
    │ ├── utils/ # helper
    │ │ └── ...
    │ │
    │ └── app.js # express app
    │
    └── server.js # start server

```
