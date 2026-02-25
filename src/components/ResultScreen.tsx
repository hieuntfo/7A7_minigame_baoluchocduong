import React from 'react';

interface ResultScreenProps {
  status: 'won' | 'lost';
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ status, onRestart }) => {
  const messages = {
    won: {
      title: 'Chiến Thắng!',
      description: 'Chúc mừng! Lớp 7A7 đã xây dựng thành công một "Lớp học của những nụ cười" và trở thành Lớp học Kiểu mẫu của trường THCS Cầu Giấy!',
      style: 'bg-green-500/50 border-green-300 text-white',
    },
    lost: {
      title: 'Game Over',
      description: 'Thật tiếc, những hành động tiêu cực đã dẫn đến xung đột lớn trong lớp học. Hãy thử lại và đưa ra những lựae chọn tốt hơn nhé.',
      style: 'bg-red-500/50 border-red-300 text-white',
    },
  };

  const { title, description, style } = messages[status];

  return (
    <div className="flex flex-col items-center justify-center text-center p-8 transition-opacity duration-500">
      <div className={`w-full max-w-lg p-8 border-4 rounded-3xl shadow-2xl backdrop-blur-md ${style}`}>
        <h1 className="text-5xl font-bold mb-4 text-shadow-md">{title}</h1>
        <p className="text-xl mb-8 text-shadow-md">{description}</p>
        <button
          onClick={onRestart}
          className="px-8 py-4 bg-white text-gray-800 font-bold rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-transform duration-300"
        >
          Chơi Lại
        </button>
      </div>
       <p className="mt-8 text-gray-500 font-serif italic text-lg">"Bạo lực không chỉ là đánh nhau, mà còn là sự thờ ơ. Sự tử tế chính là vũ khí mạnh nhất."</p>
    </div>
  );
};

export default ResultScreen;
