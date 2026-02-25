import React, { useState, useEffect } from 'react';
import HappinessBar from './components/HappinessBar';
import ScenarioCard from './components/ScenarioCard';
import ResultScreen from './components/ResultScreen';
import { scenarios } from './constants';
import { Choice, GameStatus } from './types';

export default function App() {
  const [happiness, setHappiness] = useState(50);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [gameStatus, setGameStatus] = useState<GameStatus>('playing');
  const [feedback, setFeedback] = useState<{ message: string; key: number } | null>(null);

  const handleChoice = (choice: Choice) => {
    const newHappiness = Math.max(0, Math.min(100, happiness + choice.happinessChange));
    setHappiness(newHappiness);
    setFeedback({ message: choice.result, key: Date.now() });

    if (newHappiness <= 0) {
      setGameStatus('lost');
      return;
    }
    if (newHappiness >= 100) {
      setGameStatus('won');
      return;
    }

    setTimeout(() => {
      if (currentScenarioIndex < scenarios.length - 1) {
        setCurrentScenarioIndex(currentScenarioIndex + 1);
        setFeedback(null);
      } else {
        setGameStatus(newHappiness > 50 ? 'won' : 'lost');
      }
    }, 2500);
  };

  const handleRestart = () => {
    setHappiness(50);
    setCurrentScenarioIndex(0);
    setGameStatus('playing');
    setFeedback(null);
  };

  if (gameStatus !== 'playing') {
    return <ResultScreen status={gameStatus} onRestart={handleRestart} />;
  }

  return (
    <main className="min-h-screen p-4 font-sans flex flex-col items-center justify-center">
      <div className="relative z-10 w-full max-w-4xl text-center bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/30">
        <h2 className="text-2xl font-bold text-white drop-shadow-md">Lớp 7A7 - Trường THCS Cầu Giấy</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 font-serif drop-shadow-lg">Lớp Học Của Những Nụ Cười</h1>
        <p className="text-white/90 mb-6 drop-shadow-md">Mỗi lựa chọn của bạn đều góp phần xây dựng một môi trường học đường tốt đẹp hơn.</p>
        <HappinessBar happiness={happiness} />

        <ScenarioCard
          scenario={scenarios[currentScenarioIndex]}
          onChoice={handleChoice}
        />

        {feedback && (
          <div key={feedback.key} className="mt-6 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-md text-center text-gray-700 animate-fade-in">
            <p className="font-medium italic">{feedback.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}