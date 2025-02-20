import { useEffect, useState } from "react";
import OptionButton from "./ui/OptionButton";
import PropTypes from "prop-types";

export default function QuizCard({
  currentQuestion,
  question,
  options,
  correctAnswer,
  handleAnswer,
  timeLeft,
  setTimeLeft,
  selectedOption,
  isCorrectOption,
  inputAnswer,
  setInputAnswer,
}) {
  const [enteredAnswer, setEnteredAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission status

  // Reset input field when moving to the next question
  useEffect(() => {
    setEnteredAnswer("");
    setIsSubmitted(false); // Reset submission state
  }, [currentQuestion]);

  const handleIntegerTypeAnswer = (e) => {
    e.preventDefault();
    setTimeLeft(0);

    // Parse the entered answer as an integer
    const value = parseInt(enteredAnswer, 10);
    setInputAnswer(value);
    setIsSubmitted(true); // Mark as submitted

    // Check if the answer is correct
    if (value === correctAnswer) {
      handleAnswer(value, true);
    }
  };

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold">
        {currentQuestion + 1}. {question}
      </h2>
      <div className="mt-4 flex flex-col items-center">
        {options.length > 0 ? (
          // Render multiple-choice options
          options.map((option, index) => (
            <OptionButton
              key={index}
              selectedOption={selectedOption}
              isCorrectOption={isCorrectOption}
              option={option}
              handleAnswer={handleAnswer}
              timeLeft={timeLeft}
            />
          ))
        ) : (
          // Render integer-type input form
          <form
            className="flex flex-col items-center space-y-4"
            onSubmit={handleIntegerTypeAnswer}
          >
            <input
              type="text"
              className={`px-4 py-2 border border-purple-400 rounded-md transition-all duration-300 ${
                isSubmitted
                  ? inputAnswer === correctAnswer
                    ? "bg-green-200 border-green-400"
                    : "bg-red-200 border-red-400"
                  : "bg-purple-200 border-purple-400"
              }`}
              placeholder="Enter your answer here"
              value={enteredAnswer}
              onChange={(e) => setEnteredAnswer(e.target.value)}
              disabled={timeLeft === 0 || isSubmitted}
              required
            />
            <button
              type="submit"
              className={`px-4 py-2 rounded-md text-white transition-all duration-300 ${
                isSubmitted
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-purple-400 hover:bg-purple-600"
              }`}
              disabled={timeLeft === 0 || isSubmitted}
            >
              Submit
            </button>
            {isSubmitted && (
              <div className="mt-2">
                {inputAnswer === correctAnswer ? (
                  <p className="text-green-600">Your answer is correct!</p>
                ) : (
                  <div className="flex justify-center items-center space-x-2">
                    <p className="text-sm text-purple-600">Correct Answer :</p>
                    <p className="text-md text-green-600">{correctAnswer}</p>
                  </div>
                )}
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}

QuizCard.propTypes = {
  currentQuestion: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  correctAnswer: PropTypes.number.isRequired,
  handleAnswer: PropTypes.func.isRequired,
  timeLeft: PropTypes.number.isRequired,
  setTimeLeft: PropTypes.func.isRequired,
  selectedOption: PropTypes.number,
  isCorrectOption: PropTypes.bool,
  inputAnswer: PropTypes.number,
  setInputAnswer: PropTypes.func,
};
