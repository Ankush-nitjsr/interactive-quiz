import { Link } from "react-router-dom";
import Timer from "../Timer";
import PropType from "prop-types";

/**
 * Header component that displays the navigation bar with links and a timer.
 *
 * This component provides navigation links to the home and history pages,
 * along with a timer to track the remaining time for the quiz.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {number} props.timeLeft - The remaining time for the quiz.
 * @param {function} props.setTimeLeft - Function to update the remaining time.
 * @returns {JSX.Element} The rendered Header component.
 */

export default function Header({ timeLeft, setTimeLeft }) {
  return (
    <header className="p-4 bg-white shadow-md">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center max-w-4xl mx-auto">
        {/* Home Link */}
        <Link to="/" className="text-xl font-bold hover:text-purple-600">
          Interactive Quiz
        </Link>

        {/* History Link */}
        <Link
          to="/history"
          className="hover:underline text-purple-600 text-lg font-semibold"
        >
          History
        </Link>

        {/* Quiz Timer */}
        <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
      </nav>
    </header>
  );
}

Header.propTypes = {
  timeLeft: PropType.number.isRequired,
  setTimeLeft: PropType.func.isRequired,
};
