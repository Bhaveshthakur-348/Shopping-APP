const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-4 mb-2">
      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`mx-2 px-3 py-2 rounded ${
            currentPage === page ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
