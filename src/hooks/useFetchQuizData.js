import { useEffect } from "react";
import { useQuizStore } from "../stores/useQuizStore";
import quizData from "../data/quizData.json";

/**
 * Custom hook to fetch and set quiz data.
 *
 * This hook uses the `useQuizStore` to set the quiz questions
 * from the `quizData` object. It runs the effect once when the
 * component mounts.
 *
 * @returns {Object} An object containing the quiz data.
 */

const useFetchQuizData = () => {
  const setQuestions = useQuizStore((state) => state.setQuestions);

  useEffect(() => {
    setQuestions(quizData.multipleChoiceQuestions);
  }, [setQuestions]);

  return { quizData };
};

export default useFetchQuizData;
