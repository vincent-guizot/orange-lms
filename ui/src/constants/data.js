// constant/data.js

// Users
export const users = [
  {
    id: 1,
    username: "vincent",
    fullName: "Vincent Guizot",
    email: "vincent@example.com",
    password: "123456",
    role: "Owner",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    username: "alice",
    fullName: "Alice Johnson",
    email: "alice@example.com",
    password: "123456",
    role: "Mentor",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    username: "bob",
    fullName: "Bob Smith",
    email: "bob@example.com",
    password: "123456",
    role: "Mentor",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    username: "charlie",
    fullName: "Charlie Lee",
    email: "charlie@example.com",
    password: "123456",
    role: "Mentor",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    username: "admin1",
    fullName: "David Brown",
    email: "david@example.com",
    password: "123456",
    role: "Admin",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    username: "admin2",
    fullName: "Eva Green",
    email: "eva@example.com",
    password: "123456",
    role: "Admin",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    username: "mentee1",
    fullName: "Mentee 1",
    email: "mentee1@example.com",
    password: "123456",
    role: "Mentee",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    username: "mentee2",
    fullName: "Mentee 2",
    email: "mentee2@example.com",
    password: "123456",
    role: "Mentee",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    username: "mentee3",
    fullName: "Mentee 3",
    email: "mentee3@example.com",
    password: "123456",
    role: "Mentee",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    username: "mentee4",
    fullName: "Mentee 4",
    email: "mentee4@example.com",
    password: "123456",
    role: "Mentee",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 11,
    username: "mentee5",
    fullName: "Mentee 5",
    email: "mentee5@example.com",
    password: "123456",
    role: "Mentee",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 12,
    username: "mentee6",
    fullName: "Mentee 6",
    email: "mentee6@example.com",
    password: "123456",
    role: "Mentee",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 13,
    username: "mentee7",
    fullName: "Mentee 7",
    email: "mentee7@example.com",
    password: "123456",
    role: "Mentee",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 14,
    username: "mentee8",
    fullName: "Mentee 8",
    email: "mentee8@example.com",
    password: "123456",
    role: "Mentee",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 15,
    username: "other",
    fullName: "Other User",
    email: "other@example.com",
    password: "123456",
    role: "Other",
    image: "https://via.placeholder.com/150",
  },
];

// Classes
export const classes = [
  {
    id: 1,
    name: "FS01",
    subject: "Full Stack",
    startDate: "2025-10-01",
    endDate: "2025-12-01",
    totalMeetings: 8,
    mentorId: 2,
    meetings: [],
    mentees: [7, 8, 9, 10, 11],
  },
  {
    id: 2,
    name: "FE02",
    subject: "Front End",
    startDate: "2025-10-01",
    endDate: "2026-01-01",
    totalMeetings: 12,
    mentorId: 3,
    meetings: [],
    mentees: [12, 13, 14, 15, 7],
  },
  {
    id: 3,
    name: "BE03",
    subject: "Back End",
    startDate: "2025-10-01",
    endDate: "2026-01-01",
    totalMeetings: 12,
    mentorId: 4,
    meetings: [],
    mentees: [8, 9, 10, 11, 12],
  },
];

// Generate meetings
let meetingIdCounter = 1;
export const meetings = [];
classes.forEach((cls) => {
  for (let i = 0; i < cls.totalMeetings; i++) {
    const meeting = {
      id: meetingIdCounter,
      classId: cls.id,
      date: `2025-10-${String(i + 1).padStart(2, "0")}`,
      hour: "10:00",
      topic: `Topic ${i + 1}`,
      meetingNumber: i + 1,
      mentorId: cls.mentorId,
      tasks: [],
      notes: [],
      materials: [],
      totalAbsent: cls.mentees.length, // semua hadir default
    };
    meetings.push(meeting);
    cls.meetings.push(meetingIdCounter);
    meetingIdCounter++;
  }
});

// Tasks, Notes, Materials
export const tasks = meetings.map((m) => ({
  id: m.id * 10 + 1,
  name: `Task ${m.topic}`,
  link: `https://example.com/task/${m.id}`,
  classId: m.classId,
  meetingId: m.id,
}));
export const notes = meetings.map((m) => ({
  id: m.id * 10 + 2,
  name: `Note ${m.topic}`,
  link: `https://example.com/note/${m.id}`,
  classId: m.classId,
  meetingId: m.id,
}));
export const materials = meetings.map((m) => ({
  id: m.id * 10 + 3,
  name: `Material ${m.topic}`,
  link: `https://example.com/material/${m.id}`,
  classId: m.classId,
  meetingId: m.id,
}));
