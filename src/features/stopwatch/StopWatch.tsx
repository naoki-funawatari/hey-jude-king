import { useStopWatch } from "@/common/hooks";

export default function StopWatch() {
  const stopWatch = useStopWatch();

  return (
    <div>
      <h1>ストップウォッチ</h1>
      <div>
        <button onClick={stopWatch.start}>START</button>
        &nbsp;&nbsp;
        <button onClick={stopWatch.stop}>STOP</button>
        &nbsp;&nbsp;
        <button onClick={stopWatch.reset}>RESET</button>
      </div>
      <br />
      <p>{stopWatch.time}</p>
      <br />
      <p>{stopWatch.elapsed.partial}</p>
      <br />
      <p>{stopWatch.elapsed.total}</p>
    </div>
  );
}
