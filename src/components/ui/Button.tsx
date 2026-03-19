import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'metallic';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-8 py-3 rounded-sm font-medium transition-all duration-300 uppercase tracking-widest text-sm";
  
  const variants = {
    primary: "bg-gold text-black hover:bg-gold-hover gold-glow gold-glow-hover",
    outline: "border border-gold text-gold hover:bg-gold hover:text-black",
    metallic: "metallic-bg text-white border border-[#4a4a4c] hover:border-gold transition-all duration-500",
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
