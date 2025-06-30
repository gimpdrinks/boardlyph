import React from 'react';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'gradient' | 'glass' | 'playful';
  glow?: boolean;
}

export function Card({ 
  children, 
  className, 
  hover = false, 
  padding = 'md',
  variant = 'default',
  glow = false
}: CardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  const variantClasses = {
    default: 'bg-white border border-neutral-200 shadow-sm',
    gradient: 'bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/30 border border-primary-200/50 shadow-lg',
    glass: 'bg-white/80 backdrop-blur-md border border-white/20 shadow-xl',
    playful: 'bg-gradient-to-br from-white via-coral-50/20 to-violet-50/20 border-2 border-transparent bg-clip-padding shadow-lg',
  };

  const baseClasses = 'rounded-3xl transition-all duration-300';
  const hoverClasses = hover ? 'cursor-pointer' : '';
  const glowClasses = glow ? 'shadow-2xl shadow-primary-500/20' : '';

  const cardVariants = {
    initial: { 
      scale: 1,
      rotateX: 0,
      rotateY: 0,
    },
    hover: { 
      scale: hover ? 1.02 : 1,
      rotateX: hover ? 2 : 0,
      rotateY: hover ? 2 : 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }
    }
  };

  const contentVariants = {
    initial: { opacity: 1 },
    hover: { 
      opacity: 1,
      transition: { duration: 0.2 }
    }
  };

  if (hover) {
    return (
      <motion.div
        variants={cardVariants}
        initial="initial"
        whileHover="hover"
        className={clsx(
          baseClasses, 
          variantClasses[variant], 
          hoverClasses, 
          paddingClasses[padding], 
          glowClasses,
          'transform-gpu perspective-1000',
          className
        )}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <motion.div variants={contentVariants}>
          {children}
        </motion.div>
        
        {/* Subtle shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 rounded-3xl"
          whileHover={{ 
            opacity: [0, 1, 0],
            x: ['-100%', '100%'],
          }}
          transition={{ duration: 0.8 }}
          style={{ pointerEvents: 'none' }}
        />
      </motion.div>
    );
  }

  return (
    <div className={clsx(
      baseClasses, 
      variantClasses[variant], 
      paddingClasses[padding], 
      glowClasses,
      className
    )}>
      {children}
    </div>
  );
}