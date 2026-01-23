import React from "react";
import Table from "@/components/Table";
import useSearch from "@/hooks/useSearch";
import useSort from "@/hooks/useSort";
import useFilter from "@/hooks/useFilter";
import useBreadcrumbs from "@/hooks/useBreadcrumbs";
import { classes } from "@/constants/data";

const columns = [
  { key: "name", label: "Class" },
  { key: "subject", label: "Subject" },
  { key: "totalMeetings", label: "Meetings" },
];

const List = () => {
  const breadcrumbs = useBreadcrumbs();

  const { query, setQuery, searchedData } = useSearch(classes, [
    "name",
    "subject",
  ]);

  const { filterValue, setFilterValue, filteredData } = useFilter(
    searchedData,
    "subject",
  );

  const { sortedData, toggleSort } = useSort(filteredData);

  return (
    <div className="space-y-4">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500">
        {breadcrumbs.map((b, i) => (
          <span key={b.to}>
            {b.label}
            {i < breadcrumbs.length - 1 && " / "}
          </span>
        ))}
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search class..."
          className="border px-3 py-2 rounded"
        />

        <select
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="">All Subject</option>
          <option value="Full Stack">Full Stack</option>
          <option value="Front End">Front End</option>
          <option value="Back End">Back End</option>
        </select>

        <button
          onClick={() => toggleSort("name")}
          className="border px-3 py-2 rounded"
        >
          Sort by Name
        </button>
      </div>

      {/* Count */}
      <div className="text-sm text-gray-600">
        Total: {sortedData.length} classes
      </div>

      {/* Table */}
      <Table columns={columns} data={sortedData} />
    </div>
  );
};

export default List;
