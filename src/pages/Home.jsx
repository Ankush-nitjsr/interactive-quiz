import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">
        Welcome to the Interactive Quiz Platform
      </h1>
      <div className="mt-6">
        <Link to="/quiz" className="px-4 py-2 bg-blue-500 text-white rounded">
          Start Quiz
        </Link>
        <Link
          to="/history"
          className="ml-4 px-4 py-2 bg-gray-500 text-white rounded"
        >
          View History
        </Link>
      </div>
    </div>
  );
}
