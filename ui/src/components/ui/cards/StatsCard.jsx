const StatsCard = ({ title, value, description }) => {
  return (
    <div className="rounded-sm border border-gray-200 bg-white p-4">
      <p className="text-xs text-gray-500">{title}</p>

      <h3 className="mt-1 text-2xl font-bold text-[var(--color-text)]">
        {value}
      </h3>

      {description && (
        <p className="mt-1 text-xs text-gray-500">{description}</p>
      )}
    </div>
  );
};

export default StatsCard;
