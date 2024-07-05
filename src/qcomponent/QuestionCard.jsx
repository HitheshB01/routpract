import React from 'react';

const QuestionCard = ({ question, options, onAnswer }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">{question}</h2>
      <div className="space-y-2">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
