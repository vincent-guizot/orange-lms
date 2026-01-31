import { User, Mail, Phone, MapPin, FileText } from "lucide-react";

const icons = {
  text: User,
  email: Mail,
  number: FileText,
  textarea: FileText,
};

const FormField = ({ field, value, onChange }) => {
  const { name, label, type, placeholder, options } = field;
  const Icon = field.icon || icons[type];

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>

      <div className="relative">
        {Icon && (
          <Icon size={16} className="absolute left-3 top-3 text-gray-400" />
        )}

        {type === "select" && (
          <select
            value={value}
            onChange={(e) => onChange(name, e.target.value)}
            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
          >
            <option value="">Select</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        )}

        {type === "textarea" && (
          <textarea
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(name, e.target.value)}
            className="w-full pl-10 pr-3 py-2 border rounded-lg min-h-[100px] focus:ring-2 focus:ring-orange-500 outline-none"
          />
        )}

        {type !== "select" && type !== "textarea" && (
          <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(name, e.target.value)}
            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
          />
        )}
      </div>
    </div>
  );
};

export default FormField;
