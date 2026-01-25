# Orange LMS – Database Schema (Updated)

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

---

## profiles

- Relasi 1:1 dengan `users` (userId FK unique)

| Column      | Type     | Description       |
| ----------- | -------- | ----------------- |
| id          | int PK   | Primary Key       |
| userId      | int FK   | Linked user       |
| age         | int      | Age of user       |
| gender      | varchar  | Gender            |
| address     | varchar  | Full address      |
| city        | varchar  | City              |
| country     | varchar  | Country           |
| background  | text     | Background / bio  |
| phoneNumber | varchar  | Contact number    |
| createdAt   | datetime | Created timestamp |
| updatedAt   | datetime | Updated timestamp |

---

## classes

| Column      | Type     | Description                    |
| ----------- | -------- | ------------------------------ |
| id          | int PK   | Primary Key                    |
| code        | varchar  | Unique class code              |
| title       | varchar  | Class title                    |
| description | text     | Description                    |
| category    | varchar  | Category                       |
| mentorId    | int FK   | Mentor assigned to class       |
| level       | varchar  | Beginner/Intermediate/Advanced |
| startDate   | date     | Start date                     |
| endDate     | date     | End date                       |
| status      | varchar  | Active/Inactive/Completed      |
| imageUrl    | varchar  | Cover image URL                |
| createdAt   | datetime | Created timestamp              |
| updatedAt   | datetime | Updated timestamp              |

---

## class_users

| Column             | Type     | Description                   |
| ------------------ | -------- | ----------------------------- |
| id                 | int PK   | Primary Key                   |
| classId            | FK       | Class linked                  |
| userId             | FK       | User linked                   |
| roleInClass        | varchar  | Role in class (mentor/mentee) |
| progressPercentage | int      | Progress in class (0-100)     |
| status             | varchar  | Active/Inactive/Completed     |
| joinedAt           | datetime | Joined timestamp              |

---

## meetings

| Column        | Type     | Description         |
| ------------- | -------- | ------------------- |
| id            | int PK   | Primary Key         |
| classId       | FK       | Linked class        |
| meetingNumber | int      | Number of meeting   |
| title         | varchar  | Meeting title       |
| description   | text     | Description         |
| meetingDate   | date     | Meeting date        |
| startHour     | time     | Start hour          |
| finishHour    | time     | Finish hour         |
| imageUrl      | varchar  | Meeting cover image |
| createdAt     | datetime | Created timestamp   |
| updatedAt     | datetime | Updated timestamp   |

---

## tasks

| Column      | Type     | Description       |
| ----------- | -------- | ----------------- |
| id          | int PK   | Primary Key       |
| classId     | FK       | Linked class      |
| meetingId   | FK       | Linked meeting    |
| title       | varchar  | Task title        |
| description | text     | Task description  |
| dueDate     | date     | Due date          |
| maxScore    | int      | Maximum score     |
| imageUrl    | varchar  | Task image        |
| createdAt   | datetime | Created timestamp |
| updatedAt   | datetime | Updated timestamp |

---

## task_submissions

| Column        | Type     | Description                |
| ------------- | -------- | -------------------------- |
| id            | int PK   | Primary Key                |
| taskId        | FK       | Linked task                |
| userId        | FK       | User submitting            |
| submissionUrl | varchar  | Submission file/url        |
| score         | int      | Score given                |
| feedback      | text     | Feedback from mentor       |
| status        | varchar  | Pending/Reviewed/Completed |
| submittedAt   | datetime | Submission timestamp       |

---

## notes

| Column    | Type     | Description           |
| --------- | -------- | --------------------- |
| id        | int PK   | Primary Key           |
| classId   | FK       | Linked class          |
| meetingId | FK       | Linked meeting        |
| createdBy | FK       | User who created note |
| content   | text     | Note content          |
| imageUrl  | varchar  | Optional note image   |
| createdAt | datetime | Created timestamp     |
| updatedAt | datetime | Updated timestamp     |

---

## materials

| Column     | Type     | Description             |
| ---------- | -------- | ----------------------- |
| id         | int PK   | Primary Key             |
| classId    | FK       | Linked class            |
| meetingId  | FK       | Linked meeting          |
| title      | varchar  | Material title          |
| type       | varchar  | Type (pdf/video/link)   |
| url        | varchar  | Material URL            |
| uploadedBy | FK       | User who uploaded       |
| imageUrl   | varchar  | Optional material image |
| createdAt  | datetime | Created timestamp       |
| updatedAt  | datetime | Updated timestamp       |
