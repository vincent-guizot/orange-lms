import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from "@/components/ui/forms/Form";
import Popup from "@/components/ui/PopUp";

import useForm from "@/hooks/useForm";

import { meetingSchema } from "@/schemas";

import ClassService from "@/services/modules/class.service";
import MeetingService from "@/services/modules/meeting.service";

const Create = () => {
  const navigate = useNavigate();

  const [schema, setSchema] = useState(meetingSchema);

  const { values, handleChange } = useForm(meetingSchema);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const [openError, setOpenError] = useState(false);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const res = await ClassService.getAll();

        const classOptions = (res.data || []).map((cls) => ({
          label: `${cls.code} - ${cls.name}`,
          value: cls.id,
        }));

        setSchema((prev) =>
          prev.map((field) =>
            field.name === "ClassId"
              ? {
                  ...field,
                  options: classOptions,
                }
              : field,
          ),
        );
      } catch (err) {
        console.error(err);
        console.log(err.response?.data);

        setError(
          err?.response?.data?.message ||
            err?.message ||
            "Failed to create meeting",
        );

        setOpenError(true);
      }
    };

    fetchClasses();
  }, []);

  const handleSubmit = async (data) => {
    try {
      setLoading(true);
      setError("");

      const classId = Number(data.ClassId);

      const payload = {
        ...data,
      };

      delete payload.ClassId;

      await MeetingService.create(classId, payload);

      navigate("/meetings");
    } catch (err) {
      console.error(err);

      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to create meeting",
      );

      setOpenError(true);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="rounded-sm border border-gray-200 bg-white p-4">
        Creating meeting...
      </div>
    );
  }

  return (
    <>
      <Form
        title="Create Meeting"
        description="Create a new meeting."
        schema={schema}
        values={values}
        onChange={handleChange}
        onSubmit={handleSubmit}
        submitLabel="Create Meeting"
      />

      <Popup
        open={openError}
        onClose={() => setOpenError(false)}
        title="Create Meeting Failed"
        width="max-w-md"
      >
        <div className="space-y-4">
          <div className="rounded-sm border border-red-200 bg-red-50 p-4">
            <p className="text-sm text-red-600">{error}</p>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => setOpenError(false)}
              className="rounded-sm bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
            >
              Close
            </button>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default Create;
