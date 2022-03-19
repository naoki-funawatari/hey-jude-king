import { useNavigate } from "react-router-dom";
import CountDown from "@/features/Quiz/CountDown";

export default function Component() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>クイズページ</h1>
      <CountDown />
      <div>
        <button onClick={() => navigate("/results")}>選択肢①</button>
        <button onClick={() => navigate("/results")}>選択肢②</button>
        <button onClick={() => navigate("/results")}>選択肢③</button>
      </div>
    </div>
  );
}
