import OptionButton from "./ui/OptionButton";

/* eslint-disable react/prop-types */
const QuizCard = ({
  currentQuestion,
  question,
  options,
  handleAnswer,
  timeLeft,
  selectedOption,
  isCorrectOption,
}) => {
  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold">
        {currentQuestion + 1}. {question}
      </h2>
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
    </div>
  );
};

export default QuizCard;
