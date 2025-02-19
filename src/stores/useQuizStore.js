import { create } from "zustand";

export const useQuizStore = create((set) => ({
  // for all questions
  questions: [],
  setQuestions: (questions) => set({ questions }),

  // for total score
  score: 0,
  setScore: (score) => set({ score }),
}));
