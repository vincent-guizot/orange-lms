# API Contract (High Level)

## Auth

POST /auth/login
POST /auth/register

## Classes

GET /classes
POST /classes (Admin, Owner)

## Tasks

POST /tasks (Mentor)
POST /tasks/:id/submit (Mentee)

## Submissions

PUT /submissions/:id/grade (Mentor)
