import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useBreadcrumbs from "@/hooks/useBreadcrumbs";
import MeetingService from "@/services/meetings.service";
import { CheckCircle, XCircle } from "lucide-react";

const tabs = ["Attendance", "Notes", "Tasks", "Materials"];

const Details = () => {
  const { id } = useParams();
  const breadcrumbs = useBreadcrumbs([{ label: "Meetings", to: "/meetings" }]);

  const [meeting, setMeeting] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Attendance");

  useEffect(() => {
    const fetchMeeting = async () => {
      try {
        const res = await MeetingService.getById(+id);
        setMeeting(res);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMeeting();
  }, [id]);

  if (loading)
    return <div className="p-4 text-gray-500">Loading meeting...</div>;
  if (!meeting)
    return <div className="p-4 text-red-500">Meeting not found</div>;

  // const presentCount = meeting.mentees?.filter((m) => m.present).length || 0;
  const presentCount = 0;

  return (
    <div className="p-4 space-y-4">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500">
        {breadcrumbs.map((b) => (
          <span key={b.to}>{b.label} / </span>
        ))}
        <span className="font-medium">{meeting.topic}</span>
      </div>

      {/* Meeting Overview */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold">{meeting.topic}</h2>
        <p className="text-gray-600">{meeting.classId}</p>
        <p className="text-gray-500 text-sm">
          {meeting.date} | {meeting.startHour} - {meeting.finishHour}
        </p>
        <p className="text-gray-500 text-sm">Mentor: -</p>

        <span
          className={`inline-block mt-2 px-2 py-1 text-xs rounded ${
            meeting.status === "Done"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {meeting.status}
        </span>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 font-medium ${
              activeTab === tab
                ? "border-b-2 border-orange-500 text-orange-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      {activeTab === "Attendance" && (
        <div className="mt-4 space-y-3">
          <div className="text-sm text-gray-600">
            Attendance:{" "}
            {/* <span className="font-medium">
              {presentCount} / {meeting.mentees.length}
            </span> */}
          </div>

          <div className="bg-white rounded shadow divide-y">
            {/* {meeting.mentees.map((m) => (
              <div key={m.id} className="flex items-center justify-between p-3">
                <span>{m.name}</span>

                {m.present ? (
                  <span className="flex items-center gap-1 text-green-600">
                    <CheckCircle size={16} /> Present
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-red-600">
                    <XCircle size={16} /> Absent
                  </span>
                )}
              </div>
            ))} */}
          </div>
        </div>
      )}

      {activeTab === "Notes" && (
        <div className="p-6 text-center text-gray-500">
          No notes for this meeting.
        </div>
      )}

      {activeTab === "Tasks" && (
        <div className="p-6 text-center text-gray-500">
          No tasks assigned yet.
        </div>
      )}

      {activeTab === "Materials" && (
        <div className="p-6 text-center text-gray-500">
          No materials uploaded.
        </div>
      )}
    </div>
  );
};

export default Details;
