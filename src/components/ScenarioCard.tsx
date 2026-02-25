import React from 'react';
import { Scenario, Choice } from '../types';

interface ScenarioCardProps {
  scenario: Scenario;
  onChoice: (choice: Choice) => void;
}

const cardStyles = {
    'Xanh': {
        bg: 'bg-blue-500',
        border: 'border-blue-700',
        shadow: 'shadow-blue-800/50',
        hover: 'hover:bg-blue-400',
    },
    'Vàng': {
        bg: 'bg-yellow-500',
        border: 'border-yellow-700',
        shadow: 'shadow-yellow-800/50',
        hover: 'hover:bg-yellow-400',
    },
    'Đỏ': {
        bg: 'bg-red-600',
        border: 'border-red-800',
        shadow: 'shadow-red-900/50',
        hover: 'hover:bg-red-500',
    },
};

const ScenarioCard: React.FC<ScenarioCardProps> = ({ scenario, onChoice }) => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg p-8 my-8 border border-white/30">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-serif drop-shadow-md">Tình huống {scenario.id}:</h2>
      <p className="text-lg text-white/90 mb-8 drop-shadow-md">{scenario.description}</p>
      <div className="space-y-4">
        {scenario.choices.map((choice) => {
          const styles = cardStyles[choice.type];
          return (
            <button
              key={choice.id}
              onClick={() => onChoice(choice)}
              className={`w-full text-left p-5 text-white font-bold rounded-lg border-b-4 ${styles.bg} ${styles.border} ${styles.shadow} ${styles.hover} transition-all duration-200 transform hover:-translate-y-1 shadow-lg`}>
              <span className="font-bold text-lg drop-shadow-sm">Thẻ {choice.type}:</span> {choice.text}
            </button>
          )
        })}
      </div>
    </div>
  );
};

export default ScenarioCard;
