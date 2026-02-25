import React from 'react';

interface HappinessBarProps {
  happiness: number;
}

const HappinessBar: React.FC<HappinessBarProps> = ({ happiness }) => {
  const barColor = happiness > 60 ? 'bg-green-400' : happiness > 30 ? 'bg-yellow-400' : 'bg-red-500';

  return (
    <div className="w-full max-w-lg mx-auto my-8">
      <p className="text-center text-white font-black text-xl mb-2 drop-shadow-sm">THANH HẠNH PHÚC</p>
      <div className="w-full bg-white/50 rounded-full h-5 shadow-inner border-2 border-white/70">
        <div
          className={`h-full rounded-full transition-all duration-500 ease-out ${barColor}`}
          style={{ width: `${happiness}%` }}
        ></div>
      </div>
    </div>
  );
};

export default HappinessBar;
