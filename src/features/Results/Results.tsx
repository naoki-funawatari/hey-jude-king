import { useNavigate } from "react-router-dom";
import { useCorrectCount } from "@/features/Quiz/hooks";

export default function () {
  const navigate = useNavigate();
  const correctCount = useCorrectCount();

  return (
    <div>
      <h1>結果ページ</h1>
      <p>{correctCount.value} 問正解です！</p>
      <div>
        <button onClick={() => navigate("/")}>トップへ戻る</button>
        <button onClick={() => navigate("/quiz")}>リトライする</button>
      </div>
    </div>
  );
}
