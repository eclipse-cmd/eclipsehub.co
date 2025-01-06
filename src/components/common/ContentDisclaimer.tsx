'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

export function ContentDisclaimer() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useLocalStorage('disclaimer-hidden', false);

  useEffect(() => {
    setTimeout(() => {
      if (!value) setOpen(true);
    }, 500);
    return () => {};
  }, []);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Disclaimer!</AlertDialogTitle>
          <AlertDialogDescription>
            Most of the content on this page belongs to another author. Please consider this page as test data for evaluating my designs. Do not attribute any of this content to me
            as it is not mine.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setValue(true)}>Don't Show Again</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
