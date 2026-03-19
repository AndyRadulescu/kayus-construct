import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <div className={`flex items-center gap-4 mb-4 ${centered ? 'justify-center' : ''}`}>
        <div className="h-[2px] w-12 bg-gold" />
        <span className="text-gold tracking-[0.2em] text-xs font-bold uppercase">{subtitle}</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
        {title.split(' ').map((word, i) => (
          <span key={i} className={i === title.split(' ').length - 1 ? "font-bold" : ""}>
            {word}{' '}
          </span>
        ))}
      </h2>
    </div>
  );
};
