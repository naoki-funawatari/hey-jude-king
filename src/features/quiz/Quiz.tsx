import { useState, useEffect } from "react";
import { useCountDown, useQuiz, useCorrectCount } from "@/common/hooks";
import CountDown from "@/features/quiz/CountDown";
import Elapsed from "@/features/quiz/Elapsed";

export default function Quiz() {
  const [message, setMessage] = useState("");
  const countDown = useCountDown();
  const correctCount = useCorrectCount();
  const quiz = useQuiz();

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

  useEffect(() => {
    countDown.set(3);
    countDown.start();
    correctCount.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!countDown.isReady) {
    return <></>;
  }

  if (countDown.isCountingDown) {
    return <CountDown {...countDown} />;
  }

  return (
    <div>
      <h1>クイズページ</h1>
      <Elapsed />
      {quiz.choices.map(o => (
        <button key={o} value={o} onClick={handleOptionClicked}>
          {o}
        </button>
      ))}
      <p>{message}</p>
    </div>
  );
}
