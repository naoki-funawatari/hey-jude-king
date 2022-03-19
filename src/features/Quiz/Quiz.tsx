import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CountDown from "@/features/Quiz/CountDown";

const useCountDown = () => {
  const [count, setCount] = useState(3);
  useEffect(() => {
    setTimeout(() => setCount(2), 1000);
    setTimeout(() => setCount(1), 2000);
    setTimeout(() => setCount(0), 3000);
  }, []);

  return { isLoading: !!count, count };
};

export default function Component() {
  const navigate = useNavigate();
  const { isLoading, count } = useCountDown();

  return (
    <div>
      <h1>クイズページ</h1>
      {isLoading ? (
        <CountDown {...{ count }} />
      ) : (
        <div>
          <button onClick={() => navigate("/results")}>選択肢①</button>
          <button onClick={() => navigate("/results")}>選択肢②</button>
          <button onClick={() => navigate("/results")}>選択肢③</button>
        </div>
      )}
    </div>
  );
}
