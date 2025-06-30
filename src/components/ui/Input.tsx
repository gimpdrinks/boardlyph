import React from 'react';
import { clsx } from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helper?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export function Input({
  label,
  error,
  helper,
  icon,
  iconPosition = 'left',
  className,
  id,
  ...props
}: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-neutral-700">
          {label}
        </label>
      )}
      
      <div className="relative">
        {icon && iconPosition === 'left' && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
            {icon}
          </div>
        )}
        
        <input
          id={inputId}
          className={clsx(
            'block w-full rounded-2xl border-2 transition-all duration-300',
            'focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-transparent focus:shadow-lg focus:shadow-coral-500/25',
            error
              ? 'border-error-300 text-error-900 placeholder-error-400 focus:ring-error-500 focus:shadow-error-500/25'
              : 'border-neutral-300 focus:border-coral-500 hover:border-coral-300',
            icon && iconPosition === 'left' ? 'pl-10' : 'pl-3',
            icon && iconPosition === 'right' ? 'pr-10' : 'pr-3',
            'py-3',
            className
          )}
          {...props}
        />
        
        {icon && iconPosition === 'right' && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-neutral-400">
            {icon}
          </div>
        )}
      </div>
      
      {(error || helper) && (
        <p className={clsx('text-sm', error ? 'text-error-600' : 'text-neutral-500')}>
          {error || helper}
        </p>
      )}
    </div>
  );
}