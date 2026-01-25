# Business Flow – Orange LMS

## Roles & Responsibilities

### Owner

- Full access to everything
- Can CRUD users, classes, meetings, tasks, notes, materials
- Can assign Admins

### Admin

- Can CRUD users (except Owner)
- Can CRUD classes, meetings
- Can assign mentors to classes
- Can monitor progress of mentees
- Cannot delete or update Owner

### Mentor

- Can create meetings
- Can upload notes & materials
- Can create tasks and grade task submissions
- Can view enrolled mentees
- Cannot CRUD classes

### Mentee

- Can read class info, notes, materials, tasks
- Can submit task
- Cannot create/update/delete classes, meetings, notes, materials, tasks

---

## User Registration & Class Enrollment

1. Mentee registers → role assigned automatically
2. Admin/Owner creates class → assigns mentor
3. Mentee joins class → record created in `class_users`

## Learning Flow

1. Mentor creates meetings
2. Mentor uploads materials & notes
3. Mentor assigns tasks
4. Mentee reads notes, downloads materials
5. Mentee submits tasks
6. Mentor grades tasks → score & feedback stored
7. Admin/Owner monitors progress
