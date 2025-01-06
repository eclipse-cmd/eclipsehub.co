import { z } from 'zod';

export const ContactMeSchema = z.object({
  subject: z.string().min(1, { message: 'Subject is required' }),
  email: z.string().min(1, { message: 'Email address is required' }).email({
    message: 'Invalid email address provided',
  }),
  message: z.string().min(1, { message: 'Message is required' }),
});
