import { all } from '@/actions/result.actions';
import Result from '@/components/forms/Result';
import Results from '@/components/tables/Results';
import { TResult } from '@/types/result.types';

export default async function Home() {
  const results: TResult[] = await all();

  return (
    <>
      <Result />
      {results.length > 0 && <Results results={results} />}
    </>
  );
}
