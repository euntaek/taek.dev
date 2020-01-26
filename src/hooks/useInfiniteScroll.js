import { useState, useEffect, useRef } from "react";

function useInfiniteScroll(callbackFn, option) {
  const [target, setTarget] = useState(null);

  const io = useRef(null);

  const checkCallback = ([entry], observe) => {
    if (entry.isIntersecting) {
      callbackFn(entry, observe);
    }
  };

  const baseOption = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0,
  };

  useEffect(() => {
    if (!target) return;
    console.log(`init`);
    io.current = new IntersectionObserver(checkCallback, { ...baseOption, ...option });
    io.current.observe(target);
    return () => io.current && io.current.disconnect();
  }, [target]);

  const onInfiniteScrollInit = target => {
    setTarget(target);
  };
  const onInfiniteScrollUpdate = () => {
    console.log("update");
    return io.current && io.current.observe(target);
  };
  const onInfiniteScrollDisconnect = () => {
    console.log("disconnect");
    return io.current && io.current.disconnect();
  };
  return [onInfiniteScrollInit, onInfiniteScrollUpdate, onInfiniteScrollDisconnect];
}

export default useInfiniteScroll;
