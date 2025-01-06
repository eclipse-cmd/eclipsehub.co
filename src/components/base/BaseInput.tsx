import { cn } from '@/lib/utils';
import React, { type InputHTMLAttributes } from 'react';

interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: any; //TODO: Fix type React.Ref<HTMLInputElement>
  label?: string;
  hasError?: boolean;
  error?: string;
}

export const BaseInput: React.FC<BaseInputProps> = ({ label, hasError, error, className, ref, placeholder, ...props }) => {
  return (
    <div className="relative w-full input-group">
      <input
        {...props}
        ref={ref}
        placeholder={label ? '' : placeholder}
        className={cn('peer w-full border-b py-5 px-4 rounded placeholder:text-muted-foreground placeholder:text-sm', { 'border border-red-400': hasError }, className)}
      />
      {label ? (
        <label className="absolute pointer-events-none left-4 top-4 origin-[0] -translate-y-5 scale-75 duration-150 peer-placeholder-shown:text-sm peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-75 peer-focus:text-black peer-focus:dark:text-white">
          {label}
        </label>
      ) : null}
      {hasError ? <small className="text-red-400">{error}</small> : null}
    </div>
  );
};
