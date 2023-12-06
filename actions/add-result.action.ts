'use server';

export const add = async (formData: FormData) => {
  const name = formData.get('name');
  const date = formData.get('date');
  const result = formData.get('result');
  console.log(`name: ${name}, date: ${date}, result: ${result}`);

  // using prisma for database access
  // https://www.prisma.io/docs/getting-started
  // await PreviousMap.todo.create({
  //     data: {
  //         content: content as string
  //     }
  // })

  return {
    success: true,
  };
};
