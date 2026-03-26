import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'metallic';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-8 py-3 rounded-full font-medium transition-all duration-300 uppercase tracking-widest text-sm cursor-pointer";
  
  const variants = {
    primary: "primary-gradient text-black hover:opacity-90 premium-glow-hover",
    outline: "border border-[#A88C65] text-[#FFDA9A] hover:primary-gradient hover:text-black",
    metallic: "bg-zinc-900 text-white border border-zinc-700 hover:border-[#FFDA9A] transition-all duration-500",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
