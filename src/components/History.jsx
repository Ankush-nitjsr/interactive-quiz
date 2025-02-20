import PropTypes from "prop-types";

/**
 * History component displays the details of a quiz attempt.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.attempt - The attempt object containing details of the quiz attempt.
 * @param {number} props.attempt.id - The unique identifier for the attempt.
 * @param {number} props.attempt.timestamp - The timestamp of when the attempt was made.
 * @param {number} props.attempt.score - The score achieved in the attempt.
 * @param {number} props.attempt.correctAnswers - The number of correct answers in the attempt.
 * @param {number} props.attempt.incorrectAnswers - The number of incorrect answers in the attempt.
 * @returns {JSX.Element} The rendered History component.
 */

export default function History({ attempt }) {
  return (
    <div className="mb-4 p-6 border border-gray-300 rounded-lg bg-gradient-to-b from-gray-100 to-purple-200 shadow-lg text-center text-black">
      <p className="text-md text-purple-600">Quiz Attempt</p>
      <h2 className="text-lg font-semibold text-purple-800">
        {new Date(attempt.timestamp).toLocaleString()}
      </h2>
      <div className="mt-2">
        <p className="text-xl font-semibold text-purple-700 mb-2">
          Score: {attempt.score}
        </p>
        <div className="flex flex-col mx-auto">
          <div className="flex justify-between items-center space-x-2 px-8">
            <p className="text-sm text-left text-green-600">Correct Answers:</p>
            <p className="text-md text-right text-green-600">
              {attempt.correctAnswers}
            </p>
          </div>
          <div className="flex justify-between items-center space-x-2 px-8">
            <p className="text-sm text-left text-red-400">Incorrect Answers:</p>
            <p className="text-md text-right text-red-400">
              {attempt.incorrectAnswers}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

History.propTypes = {
  attempt: PropTypes.shape({
    id: PropTypes.number.isRequired,
    timestamp: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    correctAnswers: PropTypes.number.isRequired,
    incorrectAnswers: PropTypes.number.isRequired,
  }).isRequired,
};
