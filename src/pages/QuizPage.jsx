import { useState, useEffect } from "react";
import { useQuizStore } from "../stores/useQuizStore";
import QuizCard from "../components/QuizCard";
import useFetchQuizData from "../hooks/useFetchQuizData";

const QuizPage = () => {
  const { quizData } = useFetchQuizData();

  const { questions, setQuestions } = useQuizStore();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrectOption, setIsCorrectOption] = useState(false);

  useEffect(() => {
    setQuestions(quizData.questions);
  }, [setQuestions, quizData.questions]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [currentQuestion]);

  // Ensure questions are available
  if (!questions || questions.length === 0) {
    return <p className="text-center text-red-500">Loading questions...</p>;
  }

  const handleAnswer = (selectedOption, isCorrect) => {
    setSelectedOption(selectedOption); // Set the selected answer
    setIsCorrectOption(isCorrect); // Set whether the answer is correct

    if (isCorrect) {
      setScore(score + 1); // Update score if the answer is correct
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(30);
      setSelectedOption(null); // Reset selected answer for the next question
      setIsCorrectOption(false); // Reset correctness for the next question
    } else {
      saveQuizHistory();
      alert(`Quiz Completed! Your Score: ${score}`);
    }
  };

  const saveQuizHistory = () => {};

  return (
    <div className="p-4 text-center">
      <QuizCard
        question={
          questions[currentQuestion]?.question || "No question available"
        }
        options={questions[currentQuestion]?.options || []}
        handleAnswer={handleAnswer}
        timeLeft={timeLeft}
        selectedOption={selectedOption}
        isCorrectOption={isCorrectOption}
      />
      {/* Show correct answer and next button */}
      <div>
        {(selectedOption !== null || timeLeft === 0) && (
          <p className="mt-4">
            Correct Option:{" "}
            {questions[currentQuestion]?.options.find((o) => o.isCorrect)?.text}
          </p>
        )}
        <button
          className="px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded mt-2"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
