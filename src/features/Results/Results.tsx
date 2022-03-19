import { useNavigate } from "react-router-dom";

export default function Component() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>結果ページ</h1>
      <div>
        <button onClick={() => navigate("/")}>トップへ戻る</button>
        <button onClick={() => navigate("/quiz")}>リトライする</button>
      </div>
    </div>
  );
}
