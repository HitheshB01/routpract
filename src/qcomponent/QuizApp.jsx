import React,{useState} from 'react'
import QuestionCard from './QuestionCard'

const QuizApp = () => {
    const question = "What is the capital of France?";
    const options = ["Berlin", "Madrid", "Paris", "Rome"];
    const [answer, setAnswer] = useState(null);
  
    const handleAnswer = (selectedOption) => {
      setAnswer(selectedOption);
    };
  
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <QuestionCard question={question} options={options} onAnswer={handleAnswer} />
        {answer && (
          <div className="mt-4 text-xl">
            {answer === "Paris" ? "Correct!" : "Wrong answer."}
          </div>
        )}
      </div>
    );
}

export default QuizApp
