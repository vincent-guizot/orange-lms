const PageHeader = ({ breadcrumbs, title, description }) => {
  return (
    <div className="space-y-1">
      {breadcrumbs?.length > 0 && (
        <p className="text-xs text-[var(--color-text-muted)]">
          {breadcrumbs.map((item, index) => (
            <span key={item.to}>
              {item.label}
              {index < breadcrumbs.length - 1 && " / "}
            </span>
          ))}
        </p>
      )}

      <h1 className="text-2xl font-bold text-[var(--color-text)]">{title}</h1>

      {description && (
        <p className="max-w-3xl text-sm leading-6 text-[var(--color-text-muted)]">
          {description}
        </p>
      )}
    </div>
  );
};

export default PageHeader;
