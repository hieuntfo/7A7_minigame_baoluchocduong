import React from 'react';

interface ResultScreenProps {
  status: 'won' | 'lost';
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ status, onRestart }) => {
  const messages = {
    won: {
      title: 'CHIẾN THẮNG!',
      description: 'Chúc mừng! Bạn đã xây dựng thành công một "Lớp học của những nụ cười" và trở thành Lớp học Kiểu mẫu!',
      color: 'text-green-500',
    },
    lost: {
      title: 'GAME OVER',
      description: 'Thật tiếc, những hành động tiêu cực đã dẫn đến xung đột lớn trong lớp học. Hãy thử lại và đưa ra những lựa chọn tốt hơn nhé.',
      color: 'text-red-500',
    },
  };

  const { title, description, color } = messages[status];

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center text-center p-8`}>
      <div className={`w-full max-w-lg bg-white p-10 rounded-2xl shadow-2xl`}>
        <h1 className={`text-5xl font-black mb-4 font-display ${color}`}>{title}</h1>
        <p className="text-lg mb-8 text-gray-600 leading-relaxed">{description}</p>
        <button
          onClick={onRestart}
          className="px-8 py-4 bg-gray-800 text-white font-bold text-lg rounded-xl shadow-lg hover:bg-gray-700 transform hover:scale-105 transition-transform duration-300"
        >
          Chơi Lại
        </button>
      </div>
       <p className="mt-8 text-white/80 font-sans italic text-base drop-shadow-sm">"Bạo lực không chỉ là đánh nhau, mà còn là sự thờ ơ. Sự tử tế chính là vũ khí mạnh nhất."</p>
    </div>
  );
};

export default ResultScreen;
