import { User, Mail, Phone, MapPin, FileText } from "lucide-react";

export const mentorSchema = [
  { name: "name", label: "Full Name", type: "text", icon: User },
  { name: "email", label: "Email", type: "email", icon: Mail },
  { name: "avatarUrl", label: "Avatar URL", type: "text" },
  { name: "age", label: "Age", type: "number" },
  { name: "phoneNumber", label: "Phone Number", type: "text", icon: Phone },
  { name: "city", label: "City", type: "text", icon: MapPin },
  {
    name: "background",
    label: "Background",
    type: "textarea",
    icon: FileText,
  },
];

export const menteeSchema = [
  { name: "name", label: "Full Name", type: "text", icon: User },
  { name: "email", label: "Email", type: "email", icon: Mail },
  { name: "avatarUrl", label: "Avatar URL", type: "text" },
  { name: "age", label: "Age", type: "number" },
  { name: "phoneNumber", label: "Phone Number", type: "text", icon: Phone },
  { name: "city", label: "City", type: "text", icon: MapPin },
  {
    name: "background",
    label: "Background",
    type: "textarea",
    icon: FileText,
  },
];
