import { all } from '@/actions/result.actions';
import ResultForm from '@/components/forms/ResultForm';
import Results from '@/components/tables/Results';
import Dialog from '@/components/ui/Dialog';
import { TResult } from '@/types/result.types';

export default async function Home() {
  const results: TResult[] = await all();

  return (
    <>
      {results.length > 0 && <Results results={results} />}
      <div className="py-4">
        <Dialog
          id="modal-add-new"
          title="Add new Result"
          buttonLabel="Add new result"
          content={<ResultForm modalId="modal-add-new" />}
        />
      </div>
    </>
  );
}
