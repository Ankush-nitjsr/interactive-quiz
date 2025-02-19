/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const HistoryPage = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {}, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Quiz Attempt History</h2>
      {history.length > 0 ? (
        <ul className="mt-4">
          {history.map((attempt, index) => (
            <li key={index} className="p-2 border-b">
              Score: {attempt.score} | Date: {attempt.date}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4">No history available.</p>
      )}
    </div>
  );
};

export default HistoryPage;
