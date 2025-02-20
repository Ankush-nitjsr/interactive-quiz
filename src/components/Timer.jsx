import PropType from "prop-types";
import { useEffect } from "react";

/**
 * Timer component that displays the remaining time and updates it every second.
 *
 * @component
 * @param {Object} props - Component props
 * @param {number} props.timeLeft - The amount of time left in seconds
 * @param {Function} props.setTimeLeft - Function to update the time left
 * @returns {JSX.Element} The rendered Timer component
 */

export default function Timer({ timeLeft, setTimeLeft }) {
  useEffect(() => {
    // Update the time left every second
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // Clear the interval when the component unmounts
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

Timer.propTypes = {
  timeLeft: PropType.number.isRequired,
  setTimeLeft: PropType.func.isRequired,
};
