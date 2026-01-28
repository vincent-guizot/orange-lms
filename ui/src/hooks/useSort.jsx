import { useMemo, useState } from "react";

const useSort = (data) => {
  const [sortKey, setSortKey] = useState(null);
  const [direction, setDirection] = useState("asc");

  const sortedData = useMemo(() => {
    if (!sortKey) return data;

    return [...data].sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return direction === "asc" ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortKey, direction]);

  const toggleSort = (key) => {
    if (key === sortKey) {
      setDirection(direction === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setDirection("asc");
    }
  };

  return {
    sortedData,
    sortKey,
    direction,
    toggleSort,
  };
};

export default useSort;
