import { all } from '@/actions/result.actions';
import { Result } from '@/types/result.types';

const Results = async () => {
  const results: Result[] = await all();

  return (
    <>
      {results.length > 0 && (
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="py-2 text-left">#</th>
              <th className="py-2 text-left">Result Date</th>
              <th className="py-2 text-left">Result Name</th>
              <th className="py-2 text-left">Result Value</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {results.map((result: Result, index) => (
              <tr key={result.id}>
                <td className="py-2">{index + 1}</td>
                <td className="py-2">{result.date}</td>
                <td className="py-2">{result.name}</td>
                <td className="py-2">{result.value}</td>
                {/* TODO: add edit action */}
                <td className="py-2">edit</td>
                {/* TODO: add delete action */}
                <td className="py-2">delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Results;
