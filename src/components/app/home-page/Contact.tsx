'use client';

import { contactMe } from '@/app/action';
import { BaseInput, BaseTextarea, SubmitButton, Success } from '@/components';
import { useActionState } from 'react';

export function Contact() {
  const [state, formAction] = useActionState(contactMe, { message: '' });

  return (
    <div>
      <h3 className="text-header mb-2">Let’s Connect</h3>
      <p className="lg:max-w-[70%]">
        You have a question, a collaboration idea, or need help bringing your vision to life, I’d love to hear from you. Reach out via the form below, and I’ll respond promptly.
      </p>

      <form action={formAction} className="mt-8">
        {state.message ? <Success message={state.message} /> : null}

        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="md:w-1/2">
            <BaseInput name="subject" label="Subject" defaultValue={state.inputs?.subject} hasError={!!state.errors?.subject} error={state.errors?.subject?.at(0)} />
          </div>
          <div className="md:w-1/2">
            <BaseInput
              name="email"
              type="email"
              label="Your Email Address"
              defaultValue={state.inputs?.email}
              hasError={!!state.errors?.email}
              error={state.errors?.email?.at(0)}
            />
          </div>
        </div>
        <div className="w-full mb-4">
          <BaseTextarea name="message" label="Your Message" defaultValue={state.inputs?.message} hasError={!!state.errors?.message} error={state.errors?.message?.at(0)} />
        </div>
        <SubmitButton type="submit" className="py-6 md:py-8 float-right" size="lg" text="Send Message" />
        <br className="clear-both" />
      </form>
    </div>
  );
}
