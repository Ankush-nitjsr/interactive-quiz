import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-[50%] h-[50%] border border-gray-400 rounded-3xl">
      <h1 className="text-3xl font-bold">Welcome to the Interactive Quiz</h1>
      <div className="mt-6">
        <Link
          to="/quiz"
          className="px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded "
        >
          Start Quiz
        </Link>
        <Link
          to="/history"
          className="ml-4 px-4 py-2 bg-gray-500 hover:bg-gray-400 text-white rounded"
        >
          View History
        </Link>
      </div>
    </div>
  );
}
