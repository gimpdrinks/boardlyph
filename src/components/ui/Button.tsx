import React from 'react';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'coral' | 'violet' | 'lime';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  playful?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  iconPosition = 'left',
  playful = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden';

  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 focus:ring-primary-500 shadow-lg hover:shadow-xl',
    secondary: 'bg-gradient-to-r from-secondary-500 to-secondary-600 text-white hover:from-secondary-600 hover:to-secondary-700 focus:ring-secondary-500 shadow-lg hover:shadow-xl',
    coral: 'bg-gradient-to-r from-coral-500 to-coral-600 text-white hover:from-coral-600 hover:to-coral-700 focus:ring-coral-500 shadow-lg hover:shadow-xl',
    violet: 'bg-gradient-to-r from-violet-500 to-violet-600 text-white hover:from-violet-600 hover:to-violet-700 focus:ring-violet-500 shadow-lg hover:shadow-xl',
    lime: 'bg-gradient-to-r from-lime-500 to-lime-600 text-white hover:from-lime-600 hover:to-lime-700 focus:ring-lime-500 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-primary-400 text-primary-700 hover:border-primary-500 hover:bg-primary-50 focus:ring-primary-500 backdrop-blur-sm',
    ghost: 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 focus:ring-neutral-500 backdrop-blur-sm',
    danger: 'bg-gradient-to-r from-error-500 to-error-600 text-white hover:from-error-600 hover:to-error-700 focus:ring-error-500 shadow-lg hover:shadow-xl',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm gap-2 rounded-xl',
    md: 'px-6 py-3 text-sm gap-2 rounded-2xl',
    lg: 'px-8 py-4 text-base gap-3 rounded-2xl',
    xl: 'px-10 py-5 text-lg gap-3 rounded-3xl',
  };

  const playfulClasses = playful ? 'transform-gpu' : '';

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: playful ? 1.05 : 1.02,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { 
      scale: playful ? 0.95 : 0.98,
      transition: { 
        type: "spring", 
        stiffness: 600, 
        damping: 20 
      }
    }
  };

  return (
    <motion.button
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        playfulClasses,
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {/* Shimmer effect for playful buttons */}
      {playful && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />
      )}
      
      {loading && (
        <motion.div 
          className="animate-spin h-4 w-4 border-2 border-transparent border-t-current rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      )}
      {!loading && icon && iconPosition === 'left' && (
        <motion.span
          animate={playful ? { rotate: [0, -5, 5, 0] } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {icon}
        </motion.span>
      )}
      <span className="relative z-10">{children}</span>
      {!loading && icon && iconPosition === 'right' && (
        <motion.span
          animate={playful ? { x: [0, 2, 0] } : {}}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {icon}
        </motion.span>
      )}
    </motion.button>
  );
}