import { useState, useEffect } from "react";
import { useQuizStore } from "../stores/useQuizStore";
import QuizCard from "../components/QuizCard";
import useFetchQuizData from "../hooks/useFetchQuizData";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const QuizPage = () => {
  const { quizData } = useFetchQuizData();

  const { questions, setQuestions, score, setScore } = useQuizStore();
  const [currentQuestion, setCurrentQuestion] = useState(0);
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
    setTimeLeft(0); // Stop the timer

    if (isCorrect) {
      setScore(score + 1); // Update score if the answer is correct
    }
  };

  const saveQuizHistory = () => {};

  return (
    <div className="flex flex-col justify-between p-4 text-center w-[40%] h-[60%] bg-gradient-to-b from-gray-100 to-purple-200 rounded-lg shadow-lg">
      {/* Display the Header component */}
      <Header timeLeft={timeLeft} setTimeLeft={setTimeLeft} />

      {/* Display the QuizCard component */}
      <QuizCard
        currentQuestion={currentQuestion}
        question={
          questions[currentQuestion]?.question || "No question available"
        }
        options={questions[currentQuestion]?.options || []}
        handleAnswer={handleAnswer}
        timeLeft={timeLeft}
        selectedOption={selectedOption}
        isCorrectOption={isCorrectOption}
      />

      {/* Display the Footer component */}
      <Footer
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        questions={questions}
        setTimeLeft={setTimeLeft}
        setSelectedOption={setSelectedOption}
        setIsCorrectOption={setIsCorrectOption}
        saveQuizHistory={saveQuizHistory}
      />
    </div>
  );
};

export default QuizPage;
