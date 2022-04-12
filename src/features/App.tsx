import { Routes, Route } from "react-router-dom";
import Top from "@/features/top/Top";
import Quiz from "@/features/quiz/Quiz";
import Results from "@/features/results/Results";
import StopWatch from "@/features/stopwatch/StopWatch";
import "@/assets/style.scss";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/results" element={<Results />} />
      <Route path="/stopwatch" element={<StopWatch />} />
    </Routes>
  );
}
