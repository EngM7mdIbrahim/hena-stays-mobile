import { useState, useEffect, useCallback, useRef } from "react";

export function useCountDown(
  initial: number,
  increaseRate: number = 0,
  increaseTimes: number = 0
) {
  const [counter, setCounter] = useState(initial);
  const increaseCountRef = useRef(0);

  useEffect(() => {
    if (counter === 0) return;
    const timer = setInterval(() => {
      setCounter((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const reset = useCallback(() => {
    if (increaseCountRef.current < increaseTimes) {
      increaseCountRef.current += 1;
    }
    const newInitial = initial + increaseRate * increaseCountRef.current;
    setCounter(newInitial);
  }, [initial, increaseRate, increaseTimes]);

  return { counter, reset };
}
