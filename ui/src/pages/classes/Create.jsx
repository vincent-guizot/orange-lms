import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from "@/components/ui/forms/Form";
import Popup from "@/components/ui/PopUp";

import useForm from "@/hooks/useForm";

import { classSchema } from "@/schemas";

import ClassService from "@/services/modules/class.service";
import MentorService from "@/services/modules/mentor.service";

const Create = () => {
  const navigate = useNavigate();

  const [schema, setSchema] = useState(classSchema);

  const { values, handleChange } = useForm(classSchema);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const [openError, setOpenError] = useState(false);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const res = await MentorService.getAll();
        const mentorOptions = (res.data || []).map((mentor) => ({
          label: mentor.name,
          value: mentor.id,
        }));
        setSchema((prev) =>
          prev.map((field) =>
            field.name === "MentorId"
              ? {
                  ...field,
                  options: mentorOptions,
                }
              : field,
          ),
        );
      } catch (err) {
        console.error(err);

        setError(
          err?.response?.data?.message ||
            err?.message ||
            "Failed to load mentors",
        );

        setOpenError(true);
      }
    };

    fetchMentors();
  }, []);

  const handleSubmit = async (data) => {
    try {
      setLoading(true);
      setError("");

      const payload = {
        ...data,
        MentorId: Number(data.MentorId),
      };

      await ClassService.create(payload);

      navigate("/classes");
    } catch (err) {
      console.error(err);

      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to create class",
      );

      setOpenError(true);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="rounded-sm border border-gray-200 bg-white p-4">
        Creating class...
      </div>
    );
  }

  return (
    <>
      <Form
        title="Create Class"
        description="Create a new learning class."
        schema={schema}
        values={values}
        onChange={handleChange}
        onSubmit={handleSubmit}
        submitLabel="Create Class"
      />

      <Popup
        open={openError}
        onClose={() => setOpenError(false)}
        title="Create Class Failed"
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
