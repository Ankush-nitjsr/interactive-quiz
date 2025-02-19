/**
 * Calculates the total score based on the number of questions and correct answers.
 * @param {Array} questions - The list of quiz questions.
 * @param {number} score - The number of correct answers.
 * @returns {Object} - An object containing totalQuestions, totalCorrectAnswers, and totalIncorrectAnswers.
 */
const calculateTotalScore = (questions, score) => {
  // Handle edge cases where questions or score might be undefined or null
  if (!questions || !Array.isArray(questions)) {
    throw new Error("Invalid questions: Expected an array of questions.");
  }
  if (typeof score !== "number" || score < 0) {
    throw new Error("Invalid score: Expected a non-negative number.");
  }

  const totalQuestions = questions.length;
  const totalCorrectAnswers = score;
  const totalIncorrectAnswers = totalQuestions - totalCorrectAnswers;

  return { totalQuestions, totalCorrectAnswers, totalIncorrectAnswers };
};

export default calculateTotalScore;
