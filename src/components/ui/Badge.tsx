import React from 'react';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral' | 'coral' | 'violet' | 'lime';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animated?: boolean;
  glow?: boolean;
}

export function Badge({ 
  children, 
  variant = 'neutral', 
  size = 'md', 
  className,
  animated = false,
  glow = false
}: BadgeProps) {
  const baseClasses = 'inline-flex items-center font-medium transition-all duration-300';

  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary-100 to-primary-200 text-primary-800 border border-primary-300',
    secondary: 'bg-gradient-to-r from-secondary-100 to-secondary-200 text-secondary-800 border border-secondary-300',
    success: 'bg-gradient-to-r from-success-100 to-success-200 text-success-800 border border-success-300',
    warning: 'bg-gradient-to-r from-warning-100 to-warning-200 text-warning-800 border border-warning-300',
    error: 'bg-gradient-to-r from-error-100 to-error-200 text-error-800 border border-error-300',
    neutral: 'bg-gradient-to-r from-neutral-100 to-neutral-200 text-neutral-800 border border-neutral-300',
    coral: 'bg-gradient-to-r from-coral-100 to-coral-200 text-coral-800 border border-coral-300',
    violet: 'bg-gradient-to-r from-violet-100 to-violet-200 text-violet-800 border border-violet-300',
    lime: 'bg-gradient-to-r from-lime-100 to-lime-200 text-lime-800 border border-lime-300',
  };

  const sizeClasses = {
    sm: 'px-2.5 py-1 text-xs rounded-xl',
    md: 'px-3 py-1.5 text-sm rounded-2xl',
    lg: 'px-4 py-2 text-sm rounded-2xl',
  };

  const glowClasses = glow ? {
    primary: 'shadow-lg shadow-primary-500/25',
    secondary: 'shadow-lg shadow-secondary-500/25',
    success: 'shadow-lg shadow-success-500/25',
    warning: 'shadow-lg shadow-warning-500/25',
    error: 'shadow-lg shadow-error-500/25',
    neutral: 'shadow-lg shadow-neutral-500/25',
    coral: 'shadow-lg shadow-coral-500/25',
    violet: 'shadow-lg shadow-violet-500/25',
    lime: 'shadow-lg shadow-lime-500/25',
  }[variant] : '';

  const badgeVariants = {
    initial: { scale: 1, y: 0 },
    animate: animated ? {
      y: [0, -2, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    } : {},
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.span 
      variants={badgeVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className={clsx(
        baseClasses, 
        variantClasses[variant], 
        sizeClasses[size],
        glowClasses,
        'transform-gpu',
        className
      )}
    >
      {children}
    </motion.span>
  );
}