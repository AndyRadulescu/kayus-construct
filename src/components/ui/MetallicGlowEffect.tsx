import React from 'react';

const MetallicGlowEffect: React.FC = () => {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-px w-[300px] max-w-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -top-1 h-[200px] w-full max-w-[200px] -translate-x-1/2 -translate-y-1/2 md:max-w-[400px]"
        style={{
          background: `conic-gradient(from 90deg at 50% 50%, #00000000 50%, #000 50%), 
               radial-gradient(rgba(200, 200, 200, 0.1) 0%, transparent 80%)`,
        }}
      />
    </>
  );
};

export default MetallicGlowEffect;
