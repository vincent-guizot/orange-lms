# Core System – Orange LMS

## Overview

- Backend handles users, classes, meetings, tasks, notes, materials
- Role-based access control ensures proper permissions
- Sequelize ORM manages PostgreSQL database

## Core Entities

- USERS → Admin, Mentor, Mentee, Owner
- CLASSES → Learning classes
- CLASS_USERS → Pivot table: mentee enrollments
- MEETINGS → Scheduled learning sessions
- TASKS → Assignments linked to meetings
- TASK_SUBMISSIONS → User submissions + grades
- NOTES → Mentor-created notes
- MATERIALS → Uploaded learning resources

## Business Rules

1. Admin/Owner can CRUD everything except Owner by Admin
2. Mentor manages content & grading, cannot create class
3. Mentee reads & submits tasks, cannot modify system data
4. Progress tracked via `class_users.progressPercentage`
5. Submission scoring is per task per user
