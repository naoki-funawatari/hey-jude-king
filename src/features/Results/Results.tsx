import { useNavigate } from "react-router-dom";
import { useCorrectCount } from "@/common/hooks";
import Button from "@/components/Button";

export default function () {
  const navigate = useNavigate();
  const correctCount = useCorrectCount();

  return (
    <div>
      <h1>結果ページ</h1>
      <p>{correctCount.value} 問正解です！</p>
      <div>
        <Button onClick={() => navigate("/")}>トップへ戻る</Button>
        <Button onClick={() => navigate("/quiz")}>リトライする</Button>
      </div>
    </div>
  );
}
