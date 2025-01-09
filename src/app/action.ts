'use server';

import { ContactMeSchema } from '@/validations';
import { sendMail } from './sendMail';

export async function contactMe(_: any, formData: FormData) {
  const jsonObject = Object.fromEntries(formData);
  const validatedFields = ContactMeSchema.safeParse(jsonObject);

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      inputs: jsonObject as Record<string, string | number>,
    };
  }

  const email = jsonObject.email as string;

  sendMail({
    recipients: [{ email }],
    templateUUID: 'd7fdc7c1-e66b-43c7-affb-a61a745163b2',
    templateVariables: {},
  });

  // Process message
  return { message: 'Got your message! I’ll take a look and get back to you shortly. Thanks for reaching out 🙂' };
}
