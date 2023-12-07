'use client';

import { add } from '@/actions/result.actions';
import { useRef } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';

const Result = () => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={ref}
      action={async (formData) => {
        try {
          await add(formData);
          ref.current?.reset();
          // TODO: replace with toast
          alert('Result added successfully');
        } catch (error) {
          // TODO: replace with toast
          alert('Error trying to add result');
        }
      }}
      className="w-full sm:w-4/5"
    >
      <div className="flex flex-col sm:flex-row items-center py-2">
        <Input
          type="text"
          className="appearance-none bg-transparent border-b border-teal-500 w-full text-gray-700 mb-2 sm:mb-0 sm:mr-3 py-2 px-2 leading-tight focus:outline-none"
          name="name"
          placeholder="Name"
          required
        />
        <Input
          type="date"
          className="appearance-none bg-transparent border-b border-teal-500 w-full text-gray-700 mb-2 sm:mb-0 sm:mr-3 py-2 px-2 leading-tight focus:outline-none"
          name="date"
          required
        />
        <Input
          type="text"
          className="appearance-none bg-transparent border-b border-teal-500 w-full text-gray-700 mb-2 sm:mb-0 sm:mr-3 py-2 px-2 leading-tight focus:outline-none"
          name="value"
          placeholder="Result Value"
          required
        />
        <Button
          type="submit"
          className="flex-shrink-0 w-full sm:w-auto bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          label="Add"
        />
      </div>
    </form>
  );
};

export default Result;
