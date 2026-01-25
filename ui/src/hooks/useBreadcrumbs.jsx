import { useLocation } from "react-router-dom";

const useBreadcrumbs = () => {
  const location = useLocation();

  const paths = location.pathname.split("/").filter(Boolean);

  const breadcrumbs = paths.map((path, index) => {
    const to = "/" + paths.slice(0, index + 1).join("/");
    return {
      label: path.charAt(0).toUpperCase() + path.slice(1),
      to,
    };
  });

  return breadcrumbs;
};

export default useBreadcrumbs;
