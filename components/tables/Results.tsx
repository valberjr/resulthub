'use client';

import {
  findAllWithPagination,
  findById,
  remove,
} from '@/actions/result.actions';
import { TResult } from '@/types/result.types';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import ResultEdit from '../forms/ResultEdit';
import Button from '../ui/Button';
import Dialog from '../ui/Dialog';
import Pagination from './Pagination';

type ResultsProps = {
  data: TResult[];
};

const Results = ({ data }: ResultsProps) => {
  const [resultToEdit, setResultToEdit] = useState<TResult>();
  const [results, setResults] = useState<TResult[]>();
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);

  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    setResults(data);
  }, [data]);

  useEffect(() => {
    if (resultToEdit && modalRef.current) {
      modalRef.current.showModal();
    }
  }, [resultToEdit]);

  const fetchPaginatedResults = async (page: number) => {
    const pageSize = 5;
    const { data, total } = await findAllWithPagination(page, pageSize);
    setResults(data);
    setPage(page);
    setIsLastPage((page - 1) * pageSize + data.length >= total);
  };

  return (
    <>
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
            {results?.map((result: TResult, index) => (
              <tr key={result.id}>
                <th>{index + 1}</th>
                <td>{result.date}</td>
                <td>{result.name}</td>
                <td>{result.value}</td>
                <td className="py-2">
                  <div className="tooltip" data-tip="edit result">
                    <Button
                      onClick={async () => {
                        try {
                          const resultFound = await findById(result.id);
                          setResultToEdit(resultFound);
                        } catch (error) {
                          toast.error('Error trying to find result');
                        }
                      }}
                      label={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="swap-on fill-current"
                        >
                          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                        </svg>
                      }
                    />
                  </div>
                  <div className="tooltip" data-tip="remove result">
                    <Button
                      onClick={async () => {
                        try {
                          await remove(result.id);
                          toast.success('Result deleted successfully');
                        } catch (error) {
                          toast.error('Error trying to delete result');
                        }
                      }}
                      label={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="swap-on fill-current"
                        >
                          <path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19ZM8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88ZM15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
                        </svg>
                      }
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {resultToEdit && (
          <Dialog
            id="modal-edit-result"
            title="Edit Result"
            ref={modalRef}
            content={<ResultEdit data={resultToEdit} modalRef={modalRef} />}
          />
        )}
      </div>
      {results && (
        <Pagination
          page={page}
          onPagination={fetchPaginatedResults}
          isLastPage={isLastPage}
        />
      )}
    </>
  );
};

export default Results;
