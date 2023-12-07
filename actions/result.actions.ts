'use server';

import { revalidatePath } from 'next/cache';

import prisma from '@/libs/db';

import { Result } from '@/types/result.types';

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

export const all = async (): Promise<Result[]> => {
  const results: Result[] = await prisma.result.findMany();
  return results;
};
