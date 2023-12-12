import { all } from '@/actions/result.actions';
import ResultForm from '@/components/forms/ResultForm';
import Results from '@/components/tables/Results';
import DialogButton from '@/components/ui/DialogButton';
import { TResult } from '@/types/result.types';

export default async function Home() {
  const results: TResult[] = await all();
  const modalId = 'modal-add-result';

  return (
    <>
      {results.length > 0 && <Results results={results} />}
      <div className="py-4">
        <DialogButton
          id={modalId}
          title="Add new Result"
          buttonLabel="Add new result"
          content={<ResultForm modalId={modalId} />}
        />
      </div>
    </>
  );
}
