const Pagination = ({ currentPage, totalPages, prevPage, nextPage }) => {
  return (
    <div className="flex items-center justify-end gap-1">
      <button
        onClick={prevPage}
        disabled={currentPage === 1}
        className="rounded-sm border border-gray-200 px-4 py-2 hover:bg-gray-50 disabled:opacity-50"
      >
        Prev
      </button>

      <span className="px-3 text-sm text-[var(--color-text-muted)]">
        {currentPage} / {totalPages || 1}
      </span>

      <button
        onClick={nextPage}
        disabled={currentPage === totalPages}
        className="rounded-sm bg-[var(--color-primary)] px-4 py-2 text-white hover:opacity-90 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
