import { useNavigate } from "react-router-dom";
import PropType from "prop-types";

/**
 * Footer Component
 *
 * This component is used to navigate between quiz questions and handle the "Next" or "Finish" button logic.
 * It also resets the quiz state (e.g., selected answer, timer) when moving to the next question.
 * On the last question, it saves the quiz history and navigates to the quiz completion page.
 *
 * @param {Object} props - Component props
 * @param {number} props.currentQuestion - The index of the current question.
 * @param {function} props.setCurrentQuestion - Function to update the current question index.
 * @param {Array} props.questions - The list of quiz questions.
 * @param {function} props.setTimeLeft - Function to reset the timer for the next question.
 * @param {function} props.setSelectedOption - Function to reset the selected option for the next question.
 * @param {function} props.setIsCorrectOption - Function to reset the correctness state for the next question.
 * @param {function} props.setInputAnswer - Function to reset the input answer for the next question.
 * @param {function} props.saveQuizHistory - Function to save the quiz history when the quiz is completed.
 */
export default function Footer({
  currentQuestion,
  setCurrentQuestion,
  questions,
  setTimeLeft,
  setSelectedOption,
  setIsCorrectOption,
  setInputAnswer,
  saveQuizHistory,
}) {
  const navigate = useNavigate();

  /**
   * Handles the "Next" or "Finish" button click.
   * - Moves to the next question if it's not the last question.
   * - Resets the timer, selected option, and correctness state for the next question.
   * - If it's the last question, saves the quiz history and navigates to the quiz completion page.
   */
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      // Move to the next question
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(30); // Reset the timer
      setSelectedOption(null); // Reset the selected answer
      setInputAnswer(0); // Reset the input answer
      setIsCorrectOption(false); // Reset the correctness state
    } else {
      // Save quiz history and navigate to the quiz completion page
      saveQuizHistory();
      navigate("/quiz-complete");
    }
  };

  return (
    <div className="flex justify-between items-center">
      {/* Display the current question number and total questions */}
      <p>
        {currentQuestion + 1} of {questions.length} Questions
      </p>

      {/* "Next" or "Finish" button */}
      <button
        className="bg-purple-400 hover:bg-purple-600 p-2 rounded-md text-white"
        onClick={handleNext}
      >
        {currentQuestion === questions.length - 1
          ? "Finish Quiz" // Show "Finish Quiz" on the last question
          : "Next Question"}{" "}
        {/* Show "Next Question" for other questions */}
      </button>
    </div>
  );
}

// Prop validation for the Footer component
Footer.propTypes = {
  currentQuestion: PropType.number, // Current question index
  setCurrentQuestion: PropType.func, // Function to update the current question index
  questions: PropType.array, // List of quiz questions
  setTimeLeft: PropType.func, // Function to reset the timer
  setSelectedOption: PropType.func, // Function to reset the selected option
  setIsCorrectOption: PropType.func, // Function to reset the correctness state
  setInputAnswer: PropType.func, // Function to reset the input answer
  saveQuizHistory: PropType.func, // Function to save quiz history
};
