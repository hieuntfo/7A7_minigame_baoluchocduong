import React from 'react';
import { Scenario, Choice } from '../types';

interface ScenarioCardProps {
  scenario: Scenario;
  onChoice: (choice: Choice) => void;
}

const cardColors = {
  'Xanh': 'bg-blue-500 hover:bg-blue-600',
  'Vàng': 'bg-yellow-400 hover:bg-yellow-500 text-black',
  'Đỏ': 'bg-red-500 hover:bg-red-600',
};

const ScenarioCard: React.FC<ScenarioCardProps> = ({ scenario, onChoice }) => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-10">
      <p className="text-center text-gray-500 font-bold mb-4">TÌNH HUỐNG {scenario.id}</p>
      <p className="text-2xl md:text-3xl text-gray-800 mb-8 font-bold text-center leading-snug">{scenario.description}</p>
      <div className="space-y-4">
        {scenario.choices.map((choice) => (
          <button
            key={choice.id}
            onClick={() => onChoice(choice)}
            className={`w-full text-center p-5 text-white font-bold text-lg rounded-xl shadow-md transition-transform duration-200 transform hover:scale-105 ${cardColors[choice.type]}`}>
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScenarioCard;
