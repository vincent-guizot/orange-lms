# Role Based Access Control

## Owner

- Full access to all resources
- Can CRUD: users, classes, meetings, tasks, notes, materials

## Admin

- CRUD users (except Owner)
- CRUD classes & meetings
- Monitor mentee progress
- Cannot delete/update Owner

## Mentor

- Create/Read meetings
- Upload notes & materials
- Create tasks & grade submissions
- Read mentees
- Cannot CRUD classes

## Mentee

- Read-only: classes, meetings, notes, materials, tasks
- Submit tasks
- Cannot CRUD anything
