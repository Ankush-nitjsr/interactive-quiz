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
    <div className="history-page p-4 flex flex-col space-y-4 justify-center items-center">
      <nav className="flex justify-center items-center p-4 space-x-4">
        <Link to="/" className="bg-purple-500 px-4 py-1 rounded-xl text-white">
          Home
        </Link>
        <h1 className="text-4xl font-bold">Quiz Attempt History</h1>
      </nav>
      <div className="history-container flex flex-wrap justify-center items-center p-2 gap-4 sm:gap-6 md:gap-8">
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
