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
│ ├── store.ts
│ └── hooks.ts
│
├── layouts/
│ ├── MainLayout.tsx
│ ├── AuthLayout.tsx
│
├── pages/
│ ├── dashboard/
│ ├── classes/
│ ├── meetings/
│ ├── tasks/
│ ├── notes/
│ ├── materials/
│ ├── progress/
│ ├── profile/
│
├── components/
│ ├── ui/ # shadcn components
│ ├── common/ # reusable components
│
├── features/
│ ├── auth/
│ ├── classes/
│ ├── tasks/
│ ├── meetings/
│
├── services/
│ ├── api.ts
│ ├── auth.service.ts
│ ├── class.service.ts
│
├── routes/
│ └── index.tsx
│
├── schemas/
│ ├── auth.schema.ts
│ ├── class.schema.ts
│
├── utils/
│ ├── constants.ts
│ └── helpers.ts
│
└── main.tsx
```
