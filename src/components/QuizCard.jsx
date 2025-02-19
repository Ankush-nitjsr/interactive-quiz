import OptionButton from "./ui/OptionButton";

/* eslint-disable react/prop-types */
const QuizCard = ({
  question,
  options,
  handleAnswer,
  timeLeft,
  selectedOption,
  isCorrectOption,
}) => {
  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold">{question}</h2>
      <div className="mt-4 flex flex-col items-center">
        {options.map((option, index) => (
          <OptionButton
            key={index}
            selectedOption={selectedOption}
            isCorrectOption={isCorrectOption}
            option={option}
            handleAnswer={handleAnswer}
            timeLeft={timeLeft}
          />
        ))}
      </div>
      {selectedOption === null && (
        <p className="mt-4 text-red-500">Time left: {timeLeft} seconds</p>
      )}
    </div>
  );
};

export default QuizCard;
