// src/pages/classes/Detail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Table from "@/components/ui/Table";
import TableControls from "@/components/ui/TableControls";
import useSearch from "@/hooks/useSearch";
import useFilter from "@/hooks/useFilter";
import useSort from "@/hooks/useSort";
import usePagination from "@/hooks/usePagination";
import useBreadcrumbs from "@/hooks/useBreadcrumbs";
import ClassService from "@/services/class.service";
import { Trash2, Edit2, Eye } from "lucide-react";

const tabs = ["Meetings", "Notes", "Tasks", "Materials", "Mentees"];

const Detail = () => {
  const { id } = useParams();
  const breadcrumbs = useBreadcrumbs([{ label: "Classes", to: "/classes" }]);

  const [classData, setClassData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Meetings");

  // Fetch class by ID
  useEffect(() => {
    const fetchClass = async () => {
      try {
        const res = await ClassService.getById(+id);
        setClassData(res);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchClass();
  }, [id]);

  if (loading) return <div className="p-4 text-gray-500">Loading class...</div>;
  if (!classData)
    return <div className="p-4 text-red-500">Class not found</div>;

  return (
    <div className="p-4 space-y-4">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500">
        {breadcrumbs.map((b, i) => (
          <span key={b.to}>{b.label} - </span>
        ))}
        <span className="font-medium">{classData.name}</span>
      </div>

      {/* Class Overview */}
      <div className="bg-white p-4 rounded shadow flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">{classData.name}</h2>
          <p className="text-gray-600">{classData.subject}</p>
          <p className="text-gray-500 text-sm">
            {classData.startDate} | {classData.startHour} -{" "}
            {classData.finishHour}
          </p>
          <p className="text-gray-500 text-sm">
            Mentor: {classData.mentorName} | Mentees: {classData.totalMentees}
          </p>
        </div>
        <div className="flex gap-2">
          <button className="text-green-600 hover:text-green-800">
            <Edit2 size={20} />
          </button>
          <button className="text-red-600 hover:text-red-800">
            <Trash2 size={20} />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`pb-2 font-medium ${
              activeTab === tab
                ? "border-b-2 border-orange-500 text-orange-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "Meetings" && (
          <TabTable data={classData.meetings || []} />
        )}
        {activeTab === "Notes" && <TabTable data={classData.notes || []} />}
        {activeTab === "Tasks" && <TabTable data={classData.tasks || []} />}
        {activeTab === "Materials" && (
          <TabTable data={classData.materials || []} />
        )}
        {activeTab === "Mentees" && <TabTable data={classData.mentees || []} />}
      </div>
    </div>
  );
};

export default Detail;

/**
 * Reusable Table for tabs
 */
const TabTable = ({ data }) => {
  const columns = data[0]
    ? Object.keys(data[0]).map((key) => ({ key, label: key }))
    : [];

  // Search / Filter / Sort / Pagination hooks
  const { query, setQuery, searchedData } = useSearch(
    data,
    columns.map((c) => c.key),
  );
  const { filterValue, setFilterValue, filteredData } = useFilter(
    searchedData,
    columns[0]?.key || "",
  );
  const { sortedData, sortKey, toggleSort } = useSort(filteredData);
  const { paginatedData, currentPage, totalPages, nextPage, prevPage } =
    usePagination(sortedData, 5);

  return (
    <div className="mt-4">
      <TableControls
        searchQuery={query}
        setSearchQuery={setQuery}
        filterOptions={[]} // optional, bisa tambahkan sesuai tab
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        sortOptions={columns.map((c) => ({ key: c.key, label: c.label }))}
        sortKey={sortKey}
        toggleSort={toggleSort}
      />
      <Table columns={columns} data={paginatedData} />
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
