import { useMemo, useState } from "react";

const useFilter = (data, key) => {
  const [value, setValue] = useState("");

  const filteredData = useMemo(() => {
    if (!value) return data;
    return data.filter((item) => item[key] === value);
  }, [data, value, key]);

  return {
    filterValue: value,
    setFilterValue: setValue,
    filteredData,
  };
};

export default useFilter;
