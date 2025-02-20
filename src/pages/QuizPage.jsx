import { useState, useEffect } from "react";
import { useQuizStore } from "../stores/useQuizStore";
import QuizCard from "../components/QuizCard";
import useFetchQuizData from "../hooks/useFetchQuizData";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { saveQuizAttempt } from "../utils/localDB";

/**
 * QuizPage component renders the main quiz interface.
 * It fetches quiz data, manages quiz state, and handles user interactions.
 *
 * @component
 * @returns {JSX.Element} The rendered QuizPage component.
 *
 * @example
 * return (
 *   <QuizPage />
 * )
 *
 * @typedef {Object} QuizData
 * @property {Array<Object>} questions - Array of quiz questions.
 *
 * @typedef {Object} Question
 * @property {string} question - The quiz question text.
 * @property {Array<string>} options - The possible answer options.
 * @property {number} correctAnswer - The index of the correct answer.
 *
 * @typedef {Object} Attempt
 * @property {number} timestamp - The timestamp of the quiz attempt.
 * @property {number} score - The score achieved in the quiz.
 * @property {number} correctAnswers - The number of correct answers.
 * @property {number} incorrectAnswers - The number of incorrect answers.
 */

export default function QuizPage() {
  // Fetch quiz data using the custom hook
  const { quizData } = useFetchQuizData();
  // Access the questions, score, and store functions from the store
  const { questions, setQuestions, score, setScore } = useQuizStore();
  // State to manage the current question index
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // State to manage the time left for each question
  const [timeLeft, setTimeLeft] = useState(30);
  // State to manage the selected option and whether it is correct
  const [selectedOption, setSelectedOption] = useState(null);
  // State to manage the input answer for integer type questions
  const [isCorrectOption, setIsCorrectOption] = useState(false);
  // State to manage the input answer for integer type questions
  const [inputAnswer, setInputAnswer] = useState(0);

  // Set the questions from the quiz data
  useEffect(() => {
    setQuestions(quizData.questions);
  }, [setQuestions, quizData.questions]);

  // Timer to move to the next question when time runs out
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

  // Handle user answer selection
  const handleAnswer = (selectedOption, isCorrect) => {
    setSelectedOption(selectedOption); // Set the selected answer
    setIsCorrectOption(isCorrect); // Set whether the answer is correct
    setTimeLeft(0); // Stop the timer

    if (isCorrect) {
      setScore(score + 1); // Update score if the answer is correct
    }
  };

  // Save the quiz attempt to local storage using indexedDB
  const saveQuizHistory = async () => {
    const attempt = {
      timestamp: Date.now(),
      score,
      correctAnswers: score,
      incorrectAnswers: questions.length - score,
    };

    try {
      await saveQuizAttempt(attempt);
      alert("Quiz attempt saved to history!");
    } catch (error) {
      console.error("Failed to save quiz attempt:", error);
    }
  };

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
        correctAnswer={questions[currentQuestion]?.correctAnswer || 0}
        handleAnswer={handleAnswer}
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
        selectedOption={selectedOption}
        isCorrectOption={isCorrectOption}
        inputAnswer={inputAnswer}
        setInputAnswer={setInputAnswer}
      />

      {/* Display the Footer component */}
      <Footer
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        questions={questions}
        setTimeLeft={setTimeLeft}
        setSelectedOption={setSelectedOption}
        setIsCorrectOption={setIsCorrectOption}
        setInputAnswer={setInputAnswer}
        saveQuizHistory={saveQuizHistory}
      />
    </div>
  );
}
