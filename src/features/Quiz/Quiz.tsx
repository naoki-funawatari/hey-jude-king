import { useState, useEffect } from "react";
import { useCountDown, useQuiz, useCorrectCount } from "@/common/hooks";
import CountDown from "@/features/quiz/CountDown";

export default function () {
  const [message, setMessage] = useState("");
  const { isLoading, count } = useCountDown();
  const quiz = useQuiz();
  const correctCount = useCorrectCount();
  const handleOptionClicked = (e: React.MouseEvent) => {
    const value = (e.target as HTMLButtonElement).value;
    if (quiz.item.answer === value) {
      correctCount.increment();
      setMessage("正解です！");
    } else {
      setMessage("不正解です！");
    }

    quiz.next();
  };

  useEffect(() => correctCount.reset(), []);

  if (isLoading) {
    return <CountDown {...{ count }} />;
  }

  return (
    <div>
      <h1>クイズページ</h1>
      <p>{quiz.item.statement}</p>
      {quiz.choices.map(o => (
        <button key={o} value={o} onClick={handleOptionClicked}>
          {o}
        </button>
      ))}
      <p>{message}</p>
    </div>
  );
}
