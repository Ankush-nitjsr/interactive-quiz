import { create } from "zustand";

export const useQuizStore = create((set) => ({
  questions: [],
  setQuestions: (questions) => set({ questions }),
}));
