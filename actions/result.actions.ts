'use server';

import { revalidatePath } from 'next/cache';

import prisma from '@/libs/db';
import { TResult } from '@/types/result.types';

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

export const all = async (): Promise<TResult[]> => {
  const results: TResult[] = await prisma.result.findMany();
  return results;
};

export const remove = async (id: string) => {
  await prisma.result.delete({ where: { id } });
  revalidatePath('/');
};
