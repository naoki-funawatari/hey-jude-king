import { Routes, Route } from "react-router-dom";
import Top from "@/features/Top/Top";
import Quiz from "@/features/Quiz/Quiz";
import Results from "@/features/Results/Results";

export default function () {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
}
