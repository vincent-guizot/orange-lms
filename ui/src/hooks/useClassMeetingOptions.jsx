import { useEffect, useState } from "react";
import ClassService from "@/services/modules/class.service";

const useClassMeetingOptions = (values, setValues, baseSchema) => {
  const [schema, setSchema] = useState(baseSchema);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const res = await ClassService.getAll();

        const classes = res.data || [];

        setSchema((prev) =>
          prev.map((field) =>
            field.name === "ClassId"
              ? {
                  ...field,
                  options: classes.map((c) => ({
                    label: `${c.code} - ${c.name}`,
                    value: c.id,
                  })),
                }
              : field,
          ),
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchClasses();
  }, []);

  useEffect(() => {
    if (!values.ClassId) return;

    const fetchMeetings = async () => {
      try {
        const res = await ClassService.getById(values.ClassId);

        const meetings = res.data?.meetings || [];

        setSchema((prev) =>
          prev.map((field) =>
            field.name === "MeetingId"
              ? {
                  ...field,
                  options: meetings.map((m) => ({
                    label: `Meeting ${m.meetingNumber} - ${m.name}`,
                    value: m.id,
                  })),
                }
              : field,
          ),
        );

        setValues((prev) => ({
          ...prev,
          MeetingId: "",
        }));
      } catch (error) {
        console.error(error);
      }
    };

    fetchMeetings();
  }, [values.ClassId]);

  return schema;
};

export default useClassMeetingOptions;
