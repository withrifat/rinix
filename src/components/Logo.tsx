import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-8 h-8 rounded-lg bg-[#5E6AD2] flex items-center justify-center">
        <span className="text-white font-bold text-sm">R</span>
      </div>
      <span className="text-xl font-semibold text-foreground">rinix</span>
    </div>
  );
};
