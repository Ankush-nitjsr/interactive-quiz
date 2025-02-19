/* eslint-disable react/prop-types */
import { useEffect } from "react";

export default function Timer({ timeLeft, setTimeLeft }) {
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft, setTimeLeft]);

  return (
    <div className="flex space-x-2 bg-purple-200 p-2 rounded-md">
      <p className="text-purple-500">Time Left</p>
      <p
        className={`w-8 h-6 bg-black px-2 rounded-md ${
          timeLeft > 20
            ? "text-yellow-300"
            : timeLeft > 10
            ? "text-orange-300"
            : "text-red-500"
        }`}
      >
        {timeLeft}
      </p>
    </div>
  );
}
