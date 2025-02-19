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
      className={`block w-80 px-4 py-2 text-white rounded mt-2 border border-purple-400 ${
        selectedOption !== null
          ? selectedOption === option.text
            ? isCorrectOption
              ? "bg-green-400 cursor-not-allowed"
              : "bg-red-400 cursor-not-allowed"
            : option.isCorrect
            ? "bg-green-400 cursor-not-allowed"
            : "bg-purple-200 cursor-not-allowed"
          : timeLeft > 0
          ? "bg-purple-400 hover:bg-purple-600"
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
