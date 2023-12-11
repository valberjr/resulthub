'use client';

import { add } from '@/actions/result.actions';
import { useRef } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';

type ResultFormProps = {
  modalId?: string;
};

const ResultForm = ({ modalId }: ResultFormProps) => {
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
          if (modalId) {
            (document.getElementById(`${modalId}`) as HTMLFormElement).close();
          }
        } catch (error) {
          // TODO: replace with toast
          alert('Error trying to add result');
        }
      }}
      className="flex flex-col gap-3"
    >
      <Input
        type="text"
        className="input input-bordered input-accent w-full"
        name="name"
        placeholder="Name"
        required
      />
      <Input
        type="date"
        className="input input-bordered input-accent w-full"
        name="date"
        required
      />
      <Input
        type="text"
        className="input input-bordered input-accent w-full"
        name="value"
        placeholder="Result Value"
        required
      />
      <Button type="submit" className="btn btn-active btn-accent" label="Add" />
    </form>
  );
};

export default ResultForm;
