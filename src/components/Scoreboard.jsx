import { useNavigate } from "react-router-dom";
import { useQuizStore } from "../stores/useQuizStore";
import calculateTotalScore from "../utils/calculateScore";

export default function Scoreboard() {
  // Access the questions and score from the store
  const { questions, score, setScore } = useQuizStore();

  console.log("Score", score);

  // Calculate total score using the utility function
  const { totalQuestions, totalCorrectAnswers, totalIncorrectAnswers } =
    calculateTotalScore(questions, score);

  const navigate = useNavigate();

  const handleTryAgain = () => {
    navigate("/");
    setScore(0); // Reset the score to 0
  };

  return (
    <div className="p-6 w-[40%] h-[50%] space-y-6 bg-gradient-to-b from-gray-100 to-purple-200 rounded-lg shadow-lg text-center text-white">
      <h1 className="text-4xl font-bold mb-4 text-fuchsia-800">Quiz Results</h1>
      <div>
        <h2 className="text-3xl font-bold mb-4 text-purple-400">Your Score</h2>
        <p className="text-6xl font-semibold text-purple-400">{score}</p>
      </div>
      <div className="flex flex-col w-[40%] mx-auto">
        <div className="flex justify-between items-center space-x-2 px-8">
          <p className="text-sm text-left text-yellow-600">Total Questions :</p>
          <p className="text-md text-right text-yellow-600">{totalQuestions}</p>
        </div>
        <div className="flex justify-between items-center space-x-2 px-8">
          <p className="text-sm text-left text-green-600">Correct Answers :</p>
          <p className="text-md text-right text-green-600">
            {totalCorrectAnswers}
          </p>
        </div>
        <div className="flex justify-between items-center space-x-2 px-8">
          <p className="text-sm text-left text-red-400">Incorrect Answers :</p>
          <p className="text-md text-right text-red-400">
            {totalIncorrectAnswers}
          </p>
        </div>
      </div>
      <button
        className="border border-black bg-purple-400 rounded-2xl px-4 py-2 mt-4 hover:bg-purple-300"
        onClick={handleTryAgain}
      >
        Try again
      </button>
    </div>
  );
}
