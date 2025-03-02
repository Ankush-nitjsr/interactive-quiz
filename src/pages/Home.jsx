import { Link } from "react-router-dom";

/**
 * Home component renders the main page of the interactive quiz application.
 * It displays a welcome message and provides links to start the quiz or view history.
 *
 * @component
 * @example
 * return (
 *   <Home />
 * )
 */

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 w-[60%] h-[50%] border border-gray-400 rounded-3xl bg-gradient-to-b from-white to-purple-200">
      <h1 className="text-3xl font-bold text-fuchsia-800">
        Welcome to the Interactive Quiz
      </h1>
      <div className="mt-6">
        {/* Link to the Quiz page */}
        <Link
          to="/quiz"
          className="px-8 py-4 bg-purple-500 hover:bg-purple-600 text-white rounded-xl text-xl"
        >
          Start Quiz
        </Link>
        {/* Link to the History page */}
        <Link
          to="/history"
          className="ml-4 px-8 py-4 bg-white hover:bg-purple-400 text-purple-500 hover:text-white rounded-xl text-xl"
        >
          View History
        </Link>
      </div>
    </div>
  );
}
