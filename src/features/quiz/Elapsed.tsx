import { useEffect } from "react";
import { useStopWatch } from "@/common/hooks";

export default function Elapsed() {
  const stopWatch = useStopWatch();
  useEffect(() => {
    stopWatch.reset();
    stopWatch.start();
    return () => stopWatch.stop();
  }, []);

  return <p>{stopWatch.time}</p>;
}
