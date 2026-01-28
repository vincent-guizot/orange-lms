import { useMemo, useState } from "react";

const useSearch = (data, keys = []) => {
  const [query, setQuery] = useState("");

  const result = useMemo(() => {
    if (!query) return data;

    return data.filter((item) =>
      keys.some((key) =>
        String(item[key]).toLowerCase().includes(query.toLowerCase()),
      ),
    );
  }, [data, query, keys]);

  return {
    query,
    setQuery,
    searchedData: result,
  };
};

export default useSearch;
