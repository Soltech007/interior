'use server';

import * as z from 'zod';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

type FormState = {
  success: boolean;
  message: string;
}

export async function sendMessage(values: z.infer<typeof formSchema>): Promise<FormState> {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Invalid form data.',
    };
  }

  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just simulate a successful submission.
  console.log('Received message:', validatedFields.data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    success: true,
    message: 'Message sent successfully!',
  };
}
