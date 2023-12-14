import Button from '../ui/Button';

type PaginationProps = {
  page: number;
  isLastPage: boolean;
  totalRecords: number;
  onPagination: (page: number) => Promise<void>;
};

const Pagination = ({
  page,
  isLastPage,
  totalRecords,
  onPagination,
}: PaginationProps) => {
  const recordPerPages = 5;
  const numPages = Math.ceil(totalRecords / recordPerPages);
  const siblingCount = 1;
  const firstPageIndex = 1;
  const lastPageIndex = numPages;

  let items = [];

  for (let i = firstPageIndex; i <= lastPageIndex; i++) {
    // Always show the first page, the current page, the last page
    if (
      i === firstPageIndex ||
      i === lastPageIndex ||
      (i >= page - siblingCount && i <= page + siblingCount)
    ) {
      items.push(
        <Button
          key={i}
          className={`join-item btn ${i === page ? 'btn-active' : ''}`}
          label={i.toString()}
          onClick={() => onPagination(i)}
        />
      );
      // Show ellipsis when skipping pages
    } else if (i === page - siblingCount - 1 || i === page + siblingCount + 1) {
      items.push(
        <Button key={i} className="join-item btn btn-disabled" label={'...'} />
      );
    }
  }

  const handleNext = async () => {
    await onPagination(page + 1);
  };

  const handlePrevious = async () => {
    await onPagination(page - 1);
  };

  return (
    <div className="join py-2">
      <Button
        className="join-item btn"
        disabled={page <= 1}
        label="«"
        onClick={handlePrevious}
      />
      {items}
      <Button
        className="join-item btn"
        disabled={isLastPage}
        label="»"
        onClick={handleNext}
      />
    </div>
  );
};

export default Pagination;
