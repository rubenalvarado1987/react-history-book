import './Pagination.css';

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export default function Pagination({ currentPage = 1, totalPages = 1, onPageChange }: PaginationProps) {
  const handlePrev = () => {
    if (currentPage > 1) onPageChange?.(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange?.(currentPage + 1);
  };

  return (
    <div className="pagination-wrapper">
      <button
        className="page-btn"
        disabled={currentPage === 1}
        onClick={handlePrev}
      >
        ‹
      </button>

      <div className="page-info">
        Página <strong>{currentPage}</strong> de <strong>{totalPages}</strong>
      </div>

      <button
        className="page-btn"
        disabled={currentPage === totalPages}
        onClick={handleNext}
      >
        ›
      </button>
    </div>
  );
}
