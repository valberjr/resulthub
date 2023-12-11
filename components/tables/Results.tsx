'use client';

import { remove } from '@/actions/result.actions';
import { TResult } from '@/types/result.types';

type ResultsProps = {
  results: TResult[];
};

const Results = ({ results }: ResultsProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result: TResult, index) => (
            <tr key={result.id}>
              <th>{index + 1}</th>
              <td>{result.date}</td>
              <td>{result.name}</td>
              <td>{result.value}</td>
              <td className="py-2">
                {/* TODO: add edit action */}
                <div className="tooltip" data-tip="edit result">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="swap-on fill-current"
                  >
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                  </svg>
                </div>
                <div className="tooltip" data-tip="remove result">
                  <button
                    onClick={async () => {
                      try {
                        await remove(result.id);
                        // TODO: replace with toast
                        alert('Result deleted successfully');
                      } catch (error) {
                        // TODO: replace with toast
                        console.log('Error trying to delete result', error);
                      }
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="swap-on fill-current"
                    >
                      <path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19ZM8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88ZM15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
