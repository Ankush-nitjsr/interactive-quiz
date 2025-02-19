import { useEffect } from "react";
import { useQuizStore } from "../stores/useQuizStore";
import quizData from "../data/quizData.json";

const useFetchQuizData = () => {
  const setQuestions = useQuizStore((state) => state.setQuestions);

  useEffect(() => {
    setQuestions(quizData.multipleChoiceQuestions);
  }, [setQuestions]);

  return { quizData };
};

export default useFetchQuizData;
