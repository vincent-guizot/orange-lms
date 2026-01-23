// constant/data.js

// Mentors
export const mentors = [
  { id: 1, name: "Alice Johnson" },
  { id: 2, name: "Bob Smith" },
  { id: 3, name: "Charlie Lee" },
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
    mentorId: 1,
    meetings: [],
    mentees: [],
  },
  {
    id: 2,
    name: "FE02",
    subject: "Front End",
    startDate: "2025-10-01",
    endDate: "2026-01-01",
    totalMeetings: 12,
    mentorId: 2,
    meetings: [],
    mentees: [],
  },
  {
    id: 3,
    name: "BE03",
    subject: "Back End",
    startDate: "2025-10-01",
    endDate: "2026-01-01",
    totalMeetings: 12,
    mentorId: 3,
    meetings: [],
    mentees: [],
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
      tasks: [],
      notes: [],
      materials: [],
      totalAbsent: 0, // jumlah mentee hadir nanti diupdate
    };
    meetings.push(meeting);
    cls.meetings.push(meetingIdCounter);
    meetingIdCounter++;
  }
});

// Tasks, Notes, Materials per meeting
export const tasks = meetings.map((m) => ({
  id: m.id * 10 + 1,
  name: `Task for ${m.topic}`,
  link: `https://example.com/task/${m.id}`,
  classId: m.classId,
  meetingId: m.id,
}));

export const notes = meetings.map((m) => ({
  id: m.id * 10 + 2,
  name: `Note for ${m.topic}`,
  link: `https://example.com/note/${m.id}`,
  classId: m.classId,
  meetingId: m.id,
}));

export const materials = meetings.map((m) => ({
  id: m.id * 10 + 3,
  name: `Material for ${m.topic}`,
  link: `https://example.com/material/${m.id}`,
  classId: m.classId,
  meetingId: m.id,
}));

// Mentees - 5 per class
let menteeIdCounter = 1;
export const mentees = [];

classes.forEach((cls) => {
  for (let i = 0; i < 5; i++) {
    const mentee = {
      id: menteeIdCounter,
      name: `Mentee ${menteeIdCounter}`,
      classId: cls.id,
      meetingIds: cls.meetings, // hadir di semua meetings class
    };
    mentees.push(mentee);
    cls.mentees.push(menteeIdCounter);
    menteeIdCounter++;
  }
});

// Settings/Menu
export const settings = [
  { id: 1, menu: "Dashboard" },
  { id: 2, menu: "Classes" },
  { id: 3, menu: "Meetings" },
  { id: 4, menu: "Notes" },
  { id: 5, menu: "Tasks" },
  { id: 6, menu: "Materials" },
  { id: 7, menu: "Mentors" },
  { id: 8, menu: "Mentees" },
];
