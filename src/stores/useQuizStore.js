import { create } from "zustand";

/**
 * useQuizStore - A Zustand store for managing quiz state.
 *
 * @function
 * @param {function} set - Zustand's set function to update the store state.
 *
 * @property {Array} questions - An array to hold all quiz questions.
 * @property {function} setQuestions - A function to set the quiz questions.
 *
 * @property {number} score - The total score of the quiz.
 * @property {function} setScore - A function to set the total score.
 */

export const useQuizStore = create((set) => ({
  // for all questions
  questions: [],
  setQuestions: (questions) => set({ questions }),

  // for total score
  score: 0,
  setScore: (score) => set({ score }),
}));
