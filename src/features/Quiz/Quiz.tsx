import CountDown from "@/features/Quiz/CountDown";
import { useCountDown, useQuiz } from "@/features/Quiz/hooks";

export default function () {
  const { isLoading, count } = useCountDown();
  const quiz = useQuiz();

  if (isLoading) {
    return <CountDown {...{ count }} />;
  }

  return (
    <div>
      <h1>クイズページ</h1>
      <p>{quiz.item.statement}</p>
      {quiz.choices.map(o => (
        <button key={o} onClick={() => quiz.next()}>
          {o}
        </button>
      ))}
    </div>
  );
}
