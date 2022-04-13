import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useRecoilState, useResetRecoilState } from "recoil";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import {
  quizListStore,
  correctCountStore,
  elapsedStore,
} from "@/common/stores";

export const useCountDown = () => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [isCountingDown, setIsCountingDown] = useState<boolean>(false);
  const [count, setCount] = useState<number | undefined>(undefined);
  const countRef = useRef<number | undefined>(undefined);
  const set = useCallback((value: number) => {
    setIsReady(true);
    setIsCountingDown(false);
    setCount(value);
    countRef.current = value;
  }, []);
  const start = useCallback(() => {
    setIsCountingDown(true);
    countDown();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const countDown = useCallback(() => {
    if (countRef.current === undefined) {
      return;
    }

    if (countRef.current > 0) {
      setTimeout(() => {
        setCount(state => (state ? state - 1 : 0));
        countRef.current = countRef.current ? countRef.current - 1 : 0;
        countDown();
      }, 1000);
    } else {
      setIsCountingDown(false);
    }
  }, []);

  return { isReady, isCountingDown, count: count ?? 0, set, start };
};

// https://www.wakuwakubank.com/posts/743-javascript-dayjs/#%E4%BB%96%E3%81%AE%E6%97%A5%E6%99%82%E3%81%A8%E3%81%AE%E5%B7%AE%E5%88%86br-diff
export const useStopWatch = () => {
  // settings
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.tz.setDefault("Asia/Tokyo");
  // logics
  const [elapsed, setElapsed] = useRecoilState(elapsedStore);
  const resetElapsed = useResetRecoilState(elapsedStore);
  const [tzDate, setTzDate] = useState(dayjs(0));
  const timer = useRef<NodeJS.Timeout | undefined>(undefined);
  const start = useCallback(() => {
    if (timer.current) {
      return;
    }

    const startTime = Date.now();
    timer.current = setInterval(() => {
      setElapsed(state => ({
        ...state,
        start: startTime,
        partial: Date.now() - startTime,
      }));
    }, 33);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const stop = useCallback(() => {
    if (timer.current) {
      clearInterval(timer.current);
    }

    timer.current = undefined;
    setElapsed(state => ({
      start: Date.now(),
      total: state.total + state.partial,
      partial: 0,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const reset = useCallback(() => {
    if (timer.current) {
      clearInterval(timer.current);
    }

    timer.current = undefined;
    resetElapsed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => setTzDate(dayjs(elapsed.total + elapsed.partial)), [elapsed]);

  return {
    start,
    stop,
    reset,
    elapsed,
    time: tzDate.utc().format("mm:ss.SSS"),
  };
};

export const useQuiz = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const list = useRecoilValue(quizListStore);
  const random = useRandom();
  const shuffle = useShuffle();

  return useMemo(() => {
    const item = list[index];
    const next = () => {
      return list.length - 1 === index
        ? navigate("/results")
        : setIndex(state => state + 1);
    };

    const anotherAnswers = [
      ...new Set(list.map(o => o.answer).filter(o => o !== item.answer)),
    ];
    const answer1 = anotherAnswers.splice(
      random.generate(anotherAnswers.length),
      1
    )[0];
    const answer2 = anotherAnswers.splice(
      random.generate(anotherAnswers.length),
      1
    )[0];
    const choices = [item.answer, answer1, answer2];
    shuffle.execute(choices);

    return { item, choices, next };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);
};

export const useCorrectCount = () => {
  const [correctCount, setCorrectCount] = useRecoilState(correctCountStore);
  const reset = useResetRecoilState(correctCountStore);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const increment = useCallback(() => setCorrectCount(state => state + 1), []);
  return { value: correctCount, increment, reset };
};

const useRandom = () => {
  const generate = (value: number) => Math.floor(Math.random() * value);
  return { generate };
};

const useShuffle = () => {
  const random = useRandom();
  const execute = (list: string[]) => {
    for (let i = list.length - 1; 0 < i; i--) {
      const j = random.generate(i + 1);
      const item = list[i];
      list[i] = list[j];
      list[j] = item;
    }
  };
  return { execute };
};
