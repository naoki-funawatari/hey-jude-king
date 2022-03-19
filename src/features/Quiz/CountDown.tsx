import { useEffect, useState } from "react";

export default function Component() {
  const [count, setCount] = useState(3);
  useEffect(() => {
    setTimeout(() => setCount(2), 1000);
    setTimeout(() => setCount(1), 2000);
    setTimeout(() => setCount(0), 3000);
  }, []);
  return <div>{count}</div>;
}
