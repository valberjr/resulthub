'use server';

import prisma from '@/libs/db';

import { TResult } from '@/types/result.types';
import { revalidatePath } from 'next/cache';

export const add = async (formData: FormData) => {
  await prisma.result.create({
    data: {
      name: String(formData.get('name')).trim(),
      date: String(formData.get('date')).trim(),
      value: String(formData.get('value')).trim(),
    },
  });
  revalidatePath('/');
};

export const update = async (formData: FormData) => {
  await prisma.result.update({
    where: { id: String(formData.get('id')).trim() },
    data: {
      name: String(formData.get('name')).trim(),
      date: String(formData.get('date')).trim(),
      value: String(formData.get('value')).trim(),
    },
  });
  revalidatePath('/');
};

export const all = async (): Promise<TResult[]> => {
  const results: TResult[] = await prisma.result.findMany();
  return results;
};

export const remove = async (id: string) => {
  await prisma.result.delete({ where: { id } });
  revalidatePath('/');
};

export const findById = async (selectedId: string): Promise<TResult> => {
  const result: TResult = await prisma.result.findUniqueOrThrow({
    where: { id: selectedId },
  });
  return result;
};
