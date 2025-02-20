import { useEffect, useState } from "react";
import { getQuizHistory } from "../utils/localDB";
import History from "../components/History";
import { Link } from "react-router-dom";

/**
 * HistoryPage component fetches and displays the quiz attempt history.
 *
 * This component uses the `useState` hook to manage the state of quiz history
 * and the `useEffect` hook to fetch the quiz history when the component mounts.
 * It displays a list of quiz attempts if available, otherwise shows a message
 * indicating no quiz attempts were found.
 *
 * @component
 * @example
 * return (
 *   <HistoryPage />
 * )
 */

export default function HistoryPage() {
  // State to store the quiz history
  const [quizHistory, setQuizHistory] = useState([]);

  // Fetch quiz history when the component mounts
  useEffect(() => {
    const fetchQuizHistory = async () => {
      try {
        const history = await getQuizHistory();
        setQuizHistory(history);
      } catch (error) {
        console.error("Failed to fetch quiz history:", error);
      }
    };

    fetchQuizHistory();
  }, []);

  return (
    <div className="p-4 flex flex-col space-y-4 justify-center items-center">
      <nav className="flex justify-center items-center space-x-4">
        <h1 className="text-2xl font-bold">Quiz Attempt History</h1>
        <Link to="/" className="bg-purple-500 px-4 py-1 rounded-xl text-white">
          Home
        </Link>
      </nav>
      <div className="flex space-x-4 flex-wrap">
        {/* Display quiz history or a message if no history is found */}
        {quizHistory.length > 0 ? (
          quizHistory.map((attempt) => (
            <History key={attempt.id} attempt={attempt} />
          ))
        ) : (
          <p>No quiz attempts found.</p>
        )}
      </div>
    </div>
  );
}
