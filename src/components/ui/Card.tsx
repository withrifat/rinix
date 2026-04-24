import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { cn } from '@/src/lib/utils';

export interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
  spotlight?: boolean;
}

export function Card({ className, children, spotlight = true, ...props }: any) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn(
        'group relative glass-card p-6 overflow-hidden transition-all duration-300 hover:border-white/10 hover:shadow-[0_8px_40px_rgba(0,0,0,0.5),0_0_80px_rgba(94,106,210,0.1)]',
        className
      )}
      {...props}
    >
      {spotlight && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useTransform(
              [mouseX, mouseY],
              ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(94,106,210,0.15), transparent 80%)`
            ),
          }}
        />
      )}
      
      {/* Light sweep border on hover */}
      <div className="absolute inset-0 rounded-2xl border border-accent/0 group-hover:border-accent/20 transition-colors duration-500" />
      
      <div className="relative z-10">{children}</div>
    </div>
  );
}
