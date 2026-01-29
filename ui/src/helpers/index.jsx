const formatDate = (date) => (date ? new Date(date).toLocaleDateString() : "-");

export { formatDate };
