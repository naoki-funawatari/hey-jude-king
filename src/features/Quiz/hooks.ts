import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

export const useCountDown = () => {
  const [count, setCount] = useState(3);
  useEffect(() => {
    setTimeout(() => setCount(2), 1000);
    setTimeout(() => setCount(1), 2000);
    setTimeout(() => setCount(0), 3000);
  }, []);

  return { isLoading: !!count, count };
};

export const useQuiz = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  return useMemo(() => {
    const item = list[index];
    const next = () => {
      return list.length - 1 === index
        ? navigate("/results")
        : setIndex(state => state + 1);
    };

    const anotherAnswers = [
      ...new Set(list.map(o => o.answer).filter(o => o !== item.answer)),
    ];
    const answer1 = anotherAnswers.splice(rnd(anotherAnswers.length), 1)[0];
    const answer2 = anotherAnswers.splice(rnd(anotherAnswers.length), 1)[0];
    const choices = [item.answer, answer1, answer2];
    srt(choices);

    return { item, choices, next };
  }, [index]);
};

const list = [
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
];

const rnd = (len: number) => Math.floor(Math.random() * len);
const srt = (list: string[]) => {
  for (let i = list.length - 1; 0 < i; i--) {
    const j = rnd(i + 1);
    let item = list[i];
    list[i] = list[j];
    list[j] = item;
  }

  return list;
};
