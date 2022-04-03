import { useNavigate } from "react-router-dom";
import Button from "@/components/Button";

export default function Top() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>トップページ</h1>
      <div>
        <Button onClick={() => navigate("/quiz")}>開始する</Button>
      </div>
    </div>
  );
}
