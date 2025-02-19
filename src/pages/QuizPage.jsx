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

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(30);
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
      />
    </div>
  );
};

export default QuizPage;
