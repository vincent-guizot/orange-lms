# Database Schema – Orange LMS

## users

| Column    | Type     | Description                     |
| --------- | -------- | ------------------------------- |
| id        | int PK   | Primary Key                     |
| name      | varchar  | Full Name                       |
| email     | varchar  | Unique Email                    |
| password  | varchar  | Hashed Password                 |
| role      | varchar  | owner/admin/mentor/mentee/other |
| avatarUrl | varchar  | Profile picture URL             |
| isActive  | boolean  | Active status                   |
| createdAt | datetime | Created timestamp               |
| updatedAt | datetime | Updated timestamp               |

## classes

| Column      | Type     | Description                    |
| ----------- | -------- | ------------------------------ |
| id          | int PK   | Primary Key                    |
| code        | varchar  | Unique class code              |
| title       | varchar  | Class title                    |
| description | text     | Description                    |
| category    | varchar  | Description                    |
| mentorId    | int FK   | Mentor assigned to class       |
| level       | varchar  | Beginner/Intermediate/Advanced |
| startDate   | date     | Start date                     |
| endDate     | date     | End date                       |
| status      | varchar  | Active/Inactive/Completed      |
| createdAt   | datetime | Created timestamp              |
| updatedAt   | datetime | Updated timestamp              |

## class_users

| Column             | Type     | Description                   |
| ------------------ | -------- | ----------------------------- |
| id                 | PK       | Primary Key                   |
| classId            | FK       | Class linked                  |
| userId             | FK       | User linked                   |
| roleInClass        | varchar  | Role in class (mentor/mentee) |
| progressPercentage | int      | Progress in class (0-100)     |
| status             | varchar  | Active/Inactive/Completed     |
| joinedAt           | datetime | Joined timestamp              |

## meetings

- Each class can have many meetings (1:N)
- Columns: id, classId(FK), meetingNumber, title, description, meetingDate, startHour, finishHour, createdAt, updatedAt

## tasks

- Each meeting can have many tasks (1:N)
- Columns: id, classId(FK), meetingId(FK), title, description, dueDate, maxScore, createdAt, updatedAt

## task_submissions

- Each task can have many submissions (1:N)
- Each user can submit many tasks (1:N)
- Columns: id, taskId(FK), userId(FK), submissionUrl, score, feedback, status, submittedAt

## notes

- Each meeting can have many notes (1:N)
- Columns: id, classId(FK), meetingId(FK), createdBy(FK), content, createdAt, updatedAt

## materials

- Each meeting can have many materials (1:N)
- Columns: id, classId(FK), meetingId(FK), title, type, url, uploadedBy(FK), createdAt, updatedAt
