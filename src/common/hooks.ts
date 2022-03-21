import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useRecoilState, useResetRecoilState } from "recoil";
import { quizListStore, correctCountStore } from "@/common/stores";

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
  const list = useRecoilValue(quizListStore);

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

export const useCorrectCount = () => {
  const [correctCount, setCorrectCount] = useRecoilState(correctCountStore);
  const reset = useResetRecoilState(correctCountStore);
  const increment = () => setCorrectCount(state => state + 1);
  return { value: correctCount, increment, reset };
};

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
