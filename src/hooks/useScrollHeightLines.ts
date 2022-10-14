import { useState, useCallback, SyntheticEvent } from "react";

type EventScrollHeight = SyntheticEvent<HTMLTextAreaElement>;

interface IScrollHeight {
  scrollHeightInit: number;
  maxScrollHeight: number;
}

interface IScrollHeightInfo {
  scrollHeight: number;
  isChangedScrollHeight: boolean;
  onScrollHeight(e: EventScrollHeight): void | null;
}

export default function useScrollHeightLines({
  scrollHeightInit,
  maxScrollHeight,
}: IScrollHeight): IScrollHeightInfo {
  const [scrollHeight, setScrollHeight] = useState<number>(scrollHeightInit);
  const isChangedScrollHeight = scrollHeight !== scrollHeightInit;

  const onScrollHeight = useCallback(
    (e: EventScrollHeight): void | null => {
      const t = e.target as HTMLElement;
      if (!t) return null;

      t.style.height = "0";
      if (t.scrollHeight > maxScrollHeight) {
        t.style.height = maxScrollHeight + "px";
        setScrollHeight(maxScrollHeight);
      } else {
        t.style.height = t.scrollHeight + "px";
        setScrollHeight(t.scrollHeight);
      }
    },
    [maxScrollHeight]
  );

  return {
    scrollHeight,
    isChangedScrollHeight,
    onScrollHeight,
  };
}
