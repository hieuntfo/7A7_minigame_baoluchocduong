import React from 'react';
import { Scenario, Choice } from '../types';

interface ScenarioCardProps {
  scenario: Scenario;
  onChoice: (choice: Choice) => void;
}

const cardStyles = {
    'Xanh': {
        bg: 'bg-cyan-500',
        border: 'border-cyan-700',
        shadow: 'shadow-cyan-800/50',
        hover: 'hover:bg-cyan-400',
    },
    'Vàng': {
        bg: 'bg-amber-400',
        border: 'border-amber-600',
        shadow: 'shadow-amber-700/50',
        hover: 'hover:bg-amber-300',
    },
    'Đỏ': {
        bg: 'bg-pink-600',
        border: 'border-pink-800',
        shadow: 'shadow-pink-900/50',
        hover: 'hover:bg-pink-500',
    },
};

const ScenarioCard: React.FC<ScenarioCardProps> = ({ scenario, onChoice }) => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-black/20 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-10 my-8 border border-white/20">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-serif drop-shadow-md">Tình huống {scenario.id}:</h2>
      <p className="text-lg text-white/90 mb-10 drop-shadow-md leading-relaxed">{scenario.description}</p>
      <div className="space-y-5">
        {scenario.choices.map((choice) => {
          const styles = cardStyles[choice.type];
          return (
            <button
              key={choice.id}
              onClick={() => onChoice(choice)}
              className={`w-full text-left p-6 text-white font-bold rounded-lg border-b-4 ${styles.bg} ${styles.border} ${styles.shadow} ${styles.hover} transition-all duration-200 transform hover:-translate-y-1 shadow-lg`}>
              <span className="font-bold text-lg drop-shadow-sm">Thẻ {choice.type}:</span> {choice.text}
            </button>
          )
        })}
      </div>
    </div>
  );
};

export default ScenarioCard;
