import { Routes, Route } from "react-router-dom";
import Top from "@/features/top/Top";
import Quiz from "@/features/quiz/Quiz";
import Results from "@/features/results/Results";

export default function () {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
}
