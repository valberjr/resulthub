'use client';

import { update } from '@/actions/result.actions';
import { TResult } from '@/types/result.types';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../ui/Button';
import Input from '../ui/Input';

type ResultEditProps = {
  data: TResult;
  modalRef?: any;
};

const ResultEdit = ({ data, modalRef }: ResultEditProps) => {
  const [formData, setFormData] = useState({
    id: data.id,
    name: data.name,
    date: data.date,
    value: data.value,
  });

  useEffect(() => {
    setFormData({
      id: data.id,
      name: data.name,
      date: data.date,
      value: data.value,
    });
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAction = async (formData: FormData) => {
    try {
      await update(formData);
      modalRef?.current.close();
      toast.success('Result edited successfully');
    } catch (error) {
      toast.error('Error trying to edit result');
    }
  };

  return (
    <form action={handleAction} className="flex flex-col gap-3">
      <Input type="hidden" name="id" value={formData.id} />
      <Input
        type="text"
        className="input input-bordered input-accent w-full"
        name="name"
        placeholder="Name"
        required
        value={formData.name}
        onChange={handleChange}
      />
      <Input
        type="date"
        className="input input-bordered input-accent w-full"
        name="date"
        required
        value={formData.date}
        onChange={handleChange}
      />
      <Input
        type="text"
        className="input input-bordered input-accent w-full"
        name="value"
        placeholder="Result Value"
        required
        value={formData.value}
        onChange={handleChange}
      />
      <Button
        type="submit"
        className="btn btn-active btn-accent"
        label="Edit"
      />
    </form>
  );
};

export default ResultEdit;
