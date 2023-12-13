import Button from '../ui/Button';

type PaginationProps = {
  page: number;
  isLastPage: boolean;
  onPagination: (page: number) => Promise<void>;
};

const Pagination = ({ page, isLastPage, onPagination }: PaginationProps) => {
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
      <Button className="join-item btn" label={page} />
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
