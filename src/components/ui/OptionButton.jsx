import PropTypes from "prop-types";

/**
 * OptionButton component renders a button for each quiz option.
 *
 * @param {Object} props - The properties object.
 * @param {string|null} props.selectedOption - The currently selected option text, or null if no option is selected.
 * @param {boolean} props.isCorrectOption - Indicates if the selected option is correct.
 * @param {Object} props.option - The option object containing text and correctness.
 * @param {string} props.option.text - The text of the option.
 * @param {boolean} props.option.isCorrect - Indicates if the option is correct.
 * @param {function} props.handleAnswer - The function to handle the answer selection.
 * @param {number} props.timeLeft - The remaining time for the quiz.
 *
 * @returns {JSX.Element} The rendered button element.
 */

export default function OptionButton({
  selectedOption,
  isCorrectOption,
  option,
  handleAnswer,
  timeLeft,
}) {
  return (
    // Render a button element with the option text
    <button
      className={`block w-80 px-4 py-2 text-white rounded mt-2 border border-purple-400 ${
        selectedOption !== null
          ? selectedOption === option.text
            ? isCorrectOption
              ? "bg-green-400 cursor-not-allowed" // Green background for correct answer
              : "bg-red-400 cursor-not-allowed" // Red background for incorrect answer
            : option.isCorrect
            ? "bg-green-400 cursor-not-allowed" // Green background for correct answer
            : "bg-purple-200 cursor-not-allowed"
          : timeLeft > 0
          ? "bg-purple-400 hover:bg-purple-600" // Purple background for default state
          : option.isCorrect
          ? "bg-green-400 cursor-not-allowed"
          : "bg-purple-200 cursor-not-allowed"
      }`}
      onClick={() => handleAnswer(option.text, option.isCorrect)}
      disabled={selectedOption !== null} // Disable buttons after an answer is selected
    >
      {option.text}
    </button>
  );
}

OptionButton.propTypes = {
  selectedOption: PropTypes.string,
  isCorrectOption: PropTypes.bool.isRequired,
  option: PropTypes.shape({
    text: PropTypes.string.isRequired,
    isCorrect: PropTypes.bool.isRequired,
  }).isRequired,
  handleAnswer: PropTypes.func.isRequired,
  timeLeft: PropTypes.number.isRequired,
};
