import { cn } from '@/lib/utils';
import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="checkbox"
        className={cn(
          'w-5 h-5 rounded border-gray-300 text-blue-600',
          'focus:ring-2 focus:ring-blue-500 focus:ring-offset-0',
          'dark:bg-gray-700 dark:border-gray-600 dark:text-blue-400',
          'cursor-pointer transition-colors',
          className
        )}
        {...props}
      />
    );
  }
);

Checkbox.displayName = 'Checkbox';
