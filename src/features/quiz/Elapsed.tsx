import { useEffect } from "react";
import { useStopWatch } from "@/common/hooks";

export default function Elapsed() {
  const stopWatch = useStopWatch();
  useEffect(() => {
    stopWatch.start();
    return () => stopWatch.reset();
  }, []);

  return <p>{stopWatch.time}</p>;
}
