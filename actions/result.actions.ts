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

export const remove = async (id: string) => {
  await prisma.result.delete({ where: { id } });
  revalidatePath('/');
};

export const findAll = async (): Promise<TResult[]> => {
  const results: TResult[] = await prisma.result.findMany();
  return results;
};

export const findAllWithPagination = async (
  page: number = 1,
  pageSize: number = 5
): Promise<{ data: TResult[]; total: number }> => {
  const [data, total] = await prisma.$transaction([
    prisma.result.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
    prisma.result.count(),
  ]);
  return { data, total };
};

export const findById = async (selectedId: string): Promise<TResult> => {
  const result: TResult = await prisma.result.findUniqueOrThrow({
    where: { id: selectedId },
  });
  return result;
};
