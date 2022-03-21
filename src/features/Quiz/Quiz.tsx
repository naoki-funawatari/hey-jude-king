import { useEffect } from "react";
import { useCountDown, useQuiz, useCorrectCount } from "@/features/Quiz/hooks";
import CountDown from "@/features/Quiz/CountDown";

export default function () {
  const { isLoading, count } = useCountDown();
  const quiz = useQuiz();
  const correctCount = useCorrectCount();
  const handleOptionClicked = (e: React.MouseEvent) => {
    const value = (e.target as HTMLButtonElement).value;
    if (quiz.item.answer === value) {
      correctCount.increment();
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
    </div>
  );
}
