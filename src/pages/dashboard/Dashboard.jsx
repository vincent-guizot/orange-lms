import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  classes,
  meetings,
  tasks,
  notes,
  materials,
} from "../../constants/data";

const Dashboard = () => {
  // Summary counts

  const summaryData = [
    {
      title: "Classes",
      count: classes.length,
      color: "border-r-8 border-blue-700",
    },
    {
      title: "Meetings",
      count: meetings.length,
      color: "border-r-8 border-green-700",
    },
    {
      title: "Notes",
      count: notes.length,
      color: "border-r-8 border-yellow-700",
    },
    {
      title: "Tasks ",
      count: tasks.length,
      color: "border-r-8 border-stone-700",
    },
    {
      title: "Materials",
      count: materials.length,
      color: "border-r-8 border-pink-700",
    },
  ];

  // Determine active vs upcoming classes (based on today's date)
  const today = new Date("2025-10-05"); // contoh tanggal, bisa pakai new Date() real
  const activeClasses = classes.filter(
    (cls) => new Date(cls.startDate) <= today && new Date(cls.endDate) >= today,
  );
  const upcomingClasses = classes.filter(
    (cls) => new Date(cls.startDate) > today,
  );

  // Chart data: progress per class (dummy: meetings held / total meetings * 100)
  const chartData = classes.map((cls) => {
    const heldMeetings = cls.meetings.length; // semua meetings sudah ada
    const progress = (heldMeetings / cls.totalMeetings) * 100;
    return { name: cls.name, progress: Math.round(progress) };
  });

  return (
    <div className="p-6 space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-5 gap-4">
        {summaryData.map((item) => (
          <Card className={item.color} key={item.title}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{item.count}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Class Progress Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="progress" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Classes Section */}
      <div className="grid grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Active Classes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {activeClasses.map((cls) => (
                <li key={cls.id} className="flex justify-between">
                  <span>{cls.name}</span>
                  <span className="text-sm text-gray-500">
                    Meetings: {cls.meetings.length}/{cls.totalMeetings}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Classes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {upcomingClasses.map((cls) => (
                <li key={cls.id} className="flex justify-between">
                  <span>{cls.name}</span>
                  <span className="text-sm text-gray-500">
                    Starts: {cls.startDate}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
