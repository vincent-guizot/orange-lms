# Orange LMS

🧩 Orange LMS – Frontend Setup (FINAL)
🎯 Scope Aplikasi

Orange LMS adalah Learning Management System internal untuk:

Mengelola kelas & training

Monitoring progress mentee

Kolaborasi mentor–mentee

User Roles

Admin

Mentor

Mentee

🧭 Main Menus (8 Menu)

Dashboard
Ringkasan aktivitas, progress belajar, jadwal, notifikasi.

Classes
Manajemen kelas, peserta, kurikulum, materi.

Meetings
Jadwal & histori pertemuan online/offline.

Tasks
Penugasan, submission, dan status.

Notes
Catatan pembelajaran mentor & mentee.

Materials
Repository dokumen, video, link.

Progress
Monitoring perkembangan mentee.

Profile & Settings
Akun, role, preferensi.

⚙️ Tech Stack (Frontend)

React 18

React Router DOM

Redux Toolkit

Axios

Tailwind CSS

shadcn/ui

React Hook Form

Zod

lucide-react

SweetAlert2

```
src/
├── app/
│   ├── store/
│   │   ├── index.js
│   │   └── rootReducer.js
│   │
│   └── hooks.js
│
├── features/
│   └── auth/
│       ├── authSlice.js
│       └── authAPI.js
│   └── classesSlice.js
│   └── meetingsSlice.js
│   └── notesSlice.js
│   └── tasksSlice.js
│   └── materialsSlice.js
│   └── mentorsSlice.js
│   └── menteesSlice.js
|
├── services/
│   ├── api.js
│   ├── auth.service.js
│   ├── classes.service.js
│   ├── meetings.service.js
│   ├── notes.service.js
│   ├── tasks.service.js
│   ├── materials.service.js
│   ├── mentors.service.js
│   └── mentees.service.js
│
├── layouts/
│   ├── MainLayout.jsx
│   └── AuthLayout.jsx
│
├── pages/
│   ├── dashboard/
│   │   └── Dashboard.jsx
│
│   ├── classes/
│   │   ├── List.jsx
│   │   ├── Create.jsx
│   │   ├── Update.jsx
│   │   └── Detail.jsx
│
│   ├── meetings/
│   │    ├── List.jsx
│   │   ├── Create.jsx
│   │   ├── Update.jsx
│   │   └── Detail.jsx
│
│   ├── notes/
│   │    ├── List.jsx
│   │   ├── Create.jsx
│   │   ├── Update.jsx
│   │   └── Detail.jsx
│
│   ├── tasks/
│   │    ├── List.jsx
│   │   ├── Create.jsx
│   │   ├── Update.jsx
│   │   └── Detail.jsx
│   ├── materials/
│   │   ├── List.jsx
│   │   ├── Create.jsx
│   │   ├── Update.jsx
│   │   └── Detail.jsx
│
│   ├── mentors/        # ADMIN ONLY
│   │    ├── List.jsx
│   │   ├── Create.jsx
│   │   ├── Update.jsx
│   │   └── Detail.jsx
│
│   ├── mentees/        # ADMIN ONLY
│   │   ├── List.jsx
│   │   ├── Create.jsx
│   │   ├── Update.jsx
│   │   └── Detail.jsx
│
│   └── profile/
│       └── Profile.jsx
   └── setting/
│       └── Setting.jsx

│   └── auth/
│       └── Login.jsx
|       |-- Register.jsx

├── routes/
│   ├── index.jsx
│   └── ProtectedRoute.jsx
│
├── components/
│   ├── ui/
│   └── common/
│
├── styles/
│   ├── tailwind.css
│   ├── globals.css
│   └── theme.css
│
├── lib/
│   └── utils.js
│
├── App.jsx
└── main.jsx


```
