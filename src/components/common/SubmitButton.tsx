'use client';

import { Button, ButtonProps } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';

interface SubmitButtonProps extends ButtonProps {
  text: string;
}

export function SubmitButton({ text, ...props }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button {...props} isLoading={pending}>
      {text || 'Submit'}
    </Button>
  );
}
