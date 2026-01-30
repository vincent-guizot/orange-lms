# 🧩 Orange LMS – Frontend Setup (FINAL)

## 🎯 Scope Aplikasi

**Orange LMS** adalah Learning Management System internal yang digunakan untuk:

- Mengelola kelas & training
- Monitoring progress mentee
- Kolaborasi mentor–mentee

---

## 👥 User Roles

- **Admin**
- **Mentor**
- **Mentee**
- **Other**
- **Owner**

---

## 🧭 Main Menus (8 Menu)

1. **Dashboard**  
   Ringkasan aktivitas, progress belajar, jadwal, dan notifikasi.

2. **Classes**  
   Manajemen kelas, peserta, kurikulum, dan materi.

3. **Meetings**  
   Jadwal dan histori pertemuan online/offline.

4. **Tasks**  
   Penugasan, submission, dan status pengerjaan.

5. **Notes**  
   Catatan pembelajaran mentor & mentee.

6. **Materials**  
   Repository dokumen, video, dan link pembelajaran.

7. **Progress**  
   Monitoring perkembangan mentee.

8. **Profile & Settings**  
   Pengaturan akun, role, dan preferensi pengguna.

---

## ⚙️ Tech Stack (Frontend)

- React 18
- React Router DOM
- Redux Toolkit
- Axios
- Tailwind CSS
- shadcn/ui
- React Hook Form
- Zod
- lucide-react
- SweetAlert2

---

## 📁 Project Folder Structure

```txt
src/
├── app/
│   ├── store/
│   │   ├── index.js
│   │   └── rootReducer.js
│   └── hooks.js
│
├── features/
│   ├── auth/
│   │   ├── authSlice.js
│   │   └── authAPI.js
│   ├── classesSlice.js
│   ├── meetingsSlice.js
│   ├── notesSlice.js
│   ├── tasksSlice.js
│   ├── materialsSlice.js
│   ├── mentorsSlice.js
│   └── menteesSlice.js
│
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
│   │   ├── List.jsx
│   │   ├── Create.jsx
│   │   ├── Update.jsx
│   │   └── Detail.jsx
│
│   ├── notes/
│   │   ├── List.jsx
│   │   ├── Create.jsx
│   │   ├── Update.jsx
│   │   └── Detail.jsx
│
│   ├── tasks/
│   │   ├── List.jsx
│   │   ├── Create.jsx
│   │   ├── Update.jsx
│   │   └── Detail.jsx
│
│   ├── materials/
│   │   ├── List.jsx
│   │   ├── Create.jsx
│   │   ├── Update.jsx
│   │   └── Detail.jsx
│
│   ├── mentors/        # ADMIN ONLY
│   │   ├── List.jsx
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
│   ├── profile/
│   │   └── Profile.jsx
│
│   ├── setting/
│   │   └── Setting.jsx
│
│   └── auth/
│       ├── Login.jsx
│       └── Register.jsx
│
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
