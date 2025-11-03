import React from 'react';

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-teal-400/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
    </div>
  );
};
