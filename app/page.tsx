import { findAllWithPagination } from '@/actions/result.actions';
import ResultForm from '@/components/forms/ResultForm';
import Results from '@/components/tables/Results';
import DialogButton from '@/components/ui/DialogButton';

export default async function Home() {
  const { data } = await findAllWithPagination();

  return (
    <>
      {data && <Results data={data} />}
      <div className="py-4">
        <DialogButton
          id="modal-add-result"
          title="Add new Result"
          buttonLabel="Add new result"
          content={<ResultForm modalId="modal-add-result" />}
        />
      </div>
    </>
  );
}
