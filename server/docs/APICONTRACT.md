# API Contract – Orange LMS

## USERS

- GET /users
- GET /users/:id
- POST /users
- PUT /users/:id
- DELETE /users/:id

## CLASSES

- GET /classes
- GET /classes/:id
- POST /classes
- PUT /classes/:id
- DELETE /classes/:id

## CLASS_USERS

- GET /classes/:classId/users
- POST /classes/:classId/users (Enroll)
- DELETE /classes/:classId/users/:userId

## MEETINGS

- GET /classes/:classId/meetings
- GET /meetings/:id
- POST /classes/:classId/meetings
- PUT /meetings/:id
- DELETE /meetings/:id

## TASKS

- GET /meetings/:meetingId/tasks
- GET /tasks/:id
- POST /meetings/:meetingId/tasks
- PUT /tasks/:id
- DELETE /tasks/:id

## TASK_SUBMISSIONS

- GET /tasks/:taskId/submissions
- GET /submissions/:id
- POST /tasks/:taskId/submissions
- PUT /submissions/:id/grade (Mentor only)
- DELETE /submissions/:id

## NOTES

- GET /meetings/:meetingId/notes
- GET /notes/:id
- POST /meetings/:meetingId/notes
- PUT /notes/:id
- DELETE /notes/:id

## MATERIALS

- GET /meetings/:meetingId/materials
- GET /materials/:id
- POST /meetings/:meetingId/materials
- PUT /materials/:id
- DELETE /materials/:id
