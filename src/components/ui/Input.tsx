import { cn } from '@/lib/utils';
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'w-full px-4 py-2 border border-gray-300 rounded-lg',
          'bg-white text-gray-900 placeholder-gray-500',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
          'dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:placeholder-gray-400',
          'dark:focus:ring-blue-400 transition-colors',
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
