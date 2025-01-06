import { Iconify } from '@/lib/utils';

type SuccessProps = {
  message: string;
};

export function Success({ message }: SuccessProps) {
  return (
    <div className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-natural dark:text-green-400" role="alert">
      <Iconify className="flex-shrink-0 inline w-4 h-4 me-3" icon="ep:success-filled" />
      <span className="font-medium">{message}</span>
    </div>
  );
}
