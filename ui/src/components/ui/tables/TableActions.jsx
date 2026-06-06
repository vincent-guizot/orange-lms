import { Link } from "react-router-dom";
import { Eye, Pencil, Trash2 } from "lucide-react";

import { can } from "@/helpers";

const TableActions = ({
  id,
  role,
  resource,

  detailUrl,
  editUrl,

  onDelete,
}) => {
  return (
    <div className="flex items-center gap-2">
      <Link
        to={detailUrl}
        className="flex items-center gap-1 rounded-sm bg-sky-100 px-2 py-1 text-xs font-medium text-sky-700 hover:bg-sky-200"
      >
        <Eye size={14} />
        Details
      </Link>

      {can(role, resource, "update") && (
        <Link
          to={editUrl}
          className="flex items-center gap-1 rounded-sm bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700 hover:bg-emerald-200"
        >
          <Pencil size={14} />
          Edit
        </Link>
      )}

      {can(role, resource, "delete") && (
        <button
          onClick={() => onDelete(id)}
          className="flex items-center gap-1 rounded-sm px-2 py-1 text-xs font-medium text-[var(--color-text-muted)] hover:bg-rose-50 hover:text-rose-600"
        >
          <Trash2 size={14} />
          Remove
        </button>
      )}
    </div>
  );
};

export default TableActions;
