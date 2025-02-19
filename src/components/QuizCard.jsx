/* eslint-disable react/prop-types */
const QuizCard = ({ question, options, handleAnswer, timeLeft }) => {
  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold">{question}</h2>
      <div className="mt-4">
        {options.map((option, index) => (
          <button
            key={index}
            className="block w-full px-4 py-2 bg-blue-500 text-white rounded mt-2"
            onClick={() => handleAnswer(option.isCorrect)}
          >
            {option.text}
          </button>
        ))}
      </div>
      <p className="mt-4 text-red-500">Time left: {timeLeft}s</p>
    </div>
  );
};

export default QuizCard;
