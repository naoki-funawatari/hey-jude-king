import { atom } from "recoil";

export const quizListStore = atom({
  key: "quizListStore",
  default: [
    {
      statement: "question 1",
      answer: "選択肢①",
    },
    {
      statement: "question 2",
      answer: "選択肢②",
    },
    {
      statement: "question 3",
      answer: "選択肢③",
    },
    {
      statement: "question 4",
      answer: "選択肢④",
    },
    {
      statement: "question 5",
      answer: "選択肢⑤",
    },
    {
      statement: "question 6",
      answer: "選択肢⑥",
    },
  ],
});

export const correctCountStore = atom({
  key: "correctCountStore",
  default: 0,
});

export const elapsedStore = atom({
  key: "elapsedStore",
  default: {
    start: 0,
    total: 0,
    partial: 0,
  },
});
