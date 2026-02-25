import React from 'react';

interface HappinessBarProps {
  happiness: number;
}

const HappinessBar: React.FC<HappinessBarProps> = ({ happiness }) => {
  const barColor = happiness > 60 ? 'bg-teal-400' : happiness > 30 ? 'bg-amber-400' : 'bg-pink-600';

  return (
    <div className="w-full max-w-md mx-auto my-6 relative">
        <div className="w-full bg-black/40 rounded-full h-6 border-2 border-white/50 shadow-inner">
            <div
                className={`h-full rounded-full transition-all duration-500 ease-out ${barColor} border-b-4 border-white/50`}
                style={{ width: `${happiness}%` }}
            ></div>
        </div>
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -mt-1 text-white font-bold text-lg drop-shadow-md">{happiness}%</span>
        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-white font-bold text-xl drop-shadow-lg font-serif">Thanh Hạnh Phúc</span>
    </div>
  );
};

export default HappinessBar;
