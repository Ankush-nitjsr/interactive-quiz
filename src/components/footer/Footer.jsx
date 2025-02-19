import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Footer({
  currentQuestion,
  setCurrentQuestion,
  questions,
  setTimeLeft,
  setSelectedOption,
  setIsCorrectOption,
  saveQuizHistory,
}) {
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(30);
      setSelectedOption(null); // Reset selected answer for the next question
      setIsCorrectOption(false); // Reset correctness for the next question
    } else {
      saveQuizHistory();
      navigate("/quiz-complete");
    }
  };
  return (
    <div className="flex justify-between items-center">
      <p>
        {currentQuestion + 1} of {questions.length} Questions
      </p>
      <button
        className="bg-purple-400 p-2 rounded-md text-white"
        onClick={handleNext}
      >
        Next Question
      </button>
    </div>
  );
}
