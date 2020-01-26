import { useState, useEffect, useRef } from "react";

function useInfiniteScroll(callbackFn, option) {
  const [target, setTarget] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scroll, setScroll] = useState(false);

  const io = useRef(null);
  console.log(`IF ${pageNumber}`);
  const checkCallback = ([entry], observe) => {
    if (entry.isIntersecting) {
      console.log(callbackFn);
      callbackFn(entry, observe);
    }
  };

  const baseOption = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0,
  };

  useEffect(() => {
    console.log(`1 target ${target}`);
    if (!target) return;
    io.current = new IntersectionObserver(checkCallback, { ...baseOption, ...option });
    console.log(checkCallback);
    console.log(`IF INIT`);
    return () => io.current && io.current.disconnect();
  }, [target, callbackFn, option]);

  useEffect(() => {
    console.log(`1 scroll ${scroll}`);
    if (!target && !io.current) return;
    console.log(`2 scroll ${scroll}`);
    scroll ? io.current.observe(target) : io.current.unobserve(target);
  }, [scroll]);

  const onInfiniteScrollInit = target => {
    setTarget(target);
    setScroll(true);
  };

  const onInfiniteScrollUpdate = (pageNumber = 1) => {
    setPageNumber(pageNumber);
    setScroll(true);
  };

  const onInfiniteScrollDisconnect = () => io.current.disconnect;
  return [
    setTarget,
    pageNumber,
    setPageNumber,
    setScroll,
    onInfiniteScrollInit,
    onInfiniteScrollUpdate,
    onInfiniteScrollDisconnect,
  ];
}

export default useInfiniteScroll;
