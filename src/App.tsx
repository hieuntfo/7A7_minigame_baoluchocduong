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
      <div className="relative z-10 w-full max-w-4xl text-center">
        <h2 className="text-2xl font-bold text-white/80 drop-shadow-sm font-sans mb-2">Lớp 7A7 - Trường THCS Cầu Giấy</h2>
        <h1 className="font-display text-7xl md:text-8xl text-white mb-4 uppercase" style={{ textShadow: '0 4px 0 #00000040' }}>Lớp Học Của Những Nụ Cười</h1>
        <p className="text-white/90 mb-8 text-lg leading-relaxed max-w-3xl mx-auto">Mỗi lựa chọn của bạn đều góp phần xây dựng một môi trường học đường tốt đẹp hơn.</p>
        <HappinessBar happiness={happiness} />

        <ScenarioCard
          scenario={scenarios[currentScenarioIndex]}
          onChoice={handleChoice}
        />

        {feedback && (
          <div key={feedback.key} className="mt-6 p-4 bg-white/50 rounded-xl shadow-md text-center text-gray-800 animate-fade-in">
            <p className="font-bold italic">{feedback.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}