import PropTypes from "prop-types";

export default function OptionButton({
  selectedOption,
  isCorrectOption,
  option,
  handleAnswer,
  timeLeft,
}) {
  return (
    <button
      className={`block w-80 px-4 py-2 text-white rounded mt-2 ${
        timeLeft > 0
          ? selectedOption === option.text
            ? isCorrectOption
              ? "bg-green-500 cursor-not-allowed" // Green for correct answer
              : "bg-red-500 cursor-not-allowed" // Red for incorrect answer
            : selectedOption !== null
            ? "bg-gray-400 cursor-not-allowed" // Disabled state
            : "bg-blue-500 hover:bg-amber-500" // Default color
          : "bg-gray-400 cursor-not-allowed"
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
