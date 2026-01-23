import React from "react";
import Table from "@/components/ui/Table";
import TableControls from "@/components/ui/TableControls";
import useSearch from "@/hooks/useSearch";
import useFilter from "@/hooks/useFilter";
import useSort from "@/hooks/useSort";
import useBreadcrumbs from "@/hooks/useBreadcrumbs";
import usePagination from "@/hooks/usePagination";
import { classes } from "@/constants/data";

const columns = [
  { key: "name", label: "Class" },
  { key: "subject", label: "Subject" },
  { key: "totalMeetings", label: "Meetings" },
];

const List = () => {
  const breadcrumbs = useBreadcrumbs();

  // SEARCH
  const { query, setQuery, searchedData } = useSearch(classes, [
    "name",
    "subject",
  ]);

  // FILTER
  const { filterValue, setFilterValue, filteredData } = useFilter(
    searchedData,
    "subject",
  );

  // SORT
  const { sortedData, sortKey, toggleSort } = useSort(filteredData);

  // PAGINATION
  const {
    paginatedData,
    currentPage,
    totalPages,
    goToPage,
    nextPage,
    prevPage,
  } = usePagination(sortedData, 5);

  return (
    <div className="p-4 space-y-4">
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
      <TableControls
        searchQuery={query}
        setSearchQuery={setQuery}
        filterOptions={["Full Stack", "Front End", "Back End"]}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        sortOptions={[
          { key: "name", label: "Name" },
          { key: "totalMeetings", label: "Meetings" },
        ]}
        sortKey={sortKey}
        toggleSort={toggleSort}
      />

      {/* Count */}
      <div className="text-sm text-gray-600">
        Total: {sortedData.length} classes
      </div>

      {/* Table */}
      <Table columns={columns} data={paginatedData} />

      {/* Pagination Controls */}
      <div className="flex gap-2 items-center mt-2">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="border px-3 py-1 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span>
          Page {currentPage} / {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="border px-3 py-1 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default List;
