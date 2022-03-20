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

    return { item, next };
  }, [index]);
};

const list = [
  {
    statement: "question 1",
    answer: "選択肢①",
    choices: ["選択肢①", "選択肢②", "選択肢③"],
  },
  {
    statement: "question 2",
    answer: "選択肢②",
    choices: ["選択肢①", "選択肢②", "選択肢③"],
  },
  {
    statement: "question 3",
    answer: "選択肢③",
    choices: ["選択肢①", "選択肢②", "選択肢③"],
  },
  {
    statement: "question 4",
    answer: "選択肢①",
    choices: ["選択肢①", "選択肢②", "選択肢③"],
  },
  {
    statement: "question 5",
    answer: "選択肢②",
    choices: ["選択肢①", "選択肢②", "選択肢③"],
  },
  {
    statement: "question 6",
    answer: "選択肢③",
    choices: ["選択肢①", "選択肢②", "選択肢③"],
  },
];

// const answers1 = [...list].map(o => o.answer);
// const answers2 = answers1.filter(o => o !== item.answer);
// const answers3 = [...new Set(answers2)];
// const choices1 = [item.answer];
// choices1.push(answers3.splice(r(answers3.length))[0]);
// choices1.push(answers3.splice(r(answers3.length))[0]);
// const choices2 = s(choices1);

// const r = (length: number) => Math.floor(Math.random() * length);
// const s = (list: string[]) => {
//   for (let i = list.length - 1; i > 0; i--) {
//     let r = Math.floor(Math.random() * (i + 1));
//     let tmp = list[i];
//     list[i] = list[r];
//     list[r] = tmp;
//   }

//   return list;
// };
