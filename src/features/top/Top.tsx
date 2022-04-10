import { useNavigate } from "react-router-dom";

export default function Top() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>トップページ</h1>
      <div>
        <button onClick={() => navigate("/quiz")}>開始する</button>
      </div>
    </div>
  );
}
