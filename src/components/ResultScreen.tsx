import React from 'react';

interface ResultScreenProps {
  status: 'won' | 'lost';
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ status, onRestart }) => {
  const messages = {
    won: {
      title: 'Chiến Thắng!',
      description: 'Chúc mừng! Bạn đã xây dựng thành công một "Lớp học của những nụ cười" và trở thành Lớp học Kiểu mẫu!',
      style: 'border-cyan-400 text-cyan-300',
    },
    lost: {
      title: 'Game Over',
      description: 'Thật tiếc, những hành động tiêu cực đã dẫn đến xung đột lớn trong lớp học. Hãy thử lại và đưa ra những lựa chọn tốt hơn nhé.',
      style: 'border-pink-600 text-pink-400',
    },
  };

  const { title, description, style } = messages[status];

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center text-center p-8`}>
      <div className={`relative z-10 w-full max-w-2xl text-center bg-black/40 backdrop-blur-xl p-10 rounded-2xl shadow-2xl border-2 ${style}`}>
        <h1 className="text-6xl font-bold mb-6 font-serif text-white drop-shadow-lg">{title}</h1>
        <p className="text-xl mb-10 text-white/90 leading-relaxed">{description}</p>
        <button
          onClick={onRestart}
          className="px-10 py-5 bg-white/90 text-gray-900 font-bold text-lg rounded-full shadow-lg hover:bg-white transform hover:scale-105 transition-transform duration-300"
        >
          Chơi Lại
        </button>
      </div>
       <p className="mt-10 text-white/70 font-serif italic text-lg drop-shadow-md">"Bạo lực không chỉ là đánh nhau, mà còn là sự thờ ơ. Sự tử tế chính là vũ khí mạnh nhất."</p>
    </div>
  );
};

export default ResultScreen;
