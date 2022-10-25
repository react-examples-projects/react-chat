import { useState, useCallback } from "react";
import {
  IScrollHeight,
  IScrollHeightInfo,
  TEventTextarea,
} from "../interfaces";

export default function useScrollHeightLines({
  scrollHeightInit,
  maxScrollHeight,
}: IScrollHeight): IScrollHeightInfo {
  const [scrollHeight, setScrollHeight] = useState<number>(scrollHeightInit);
  const isChangedScrollHeight = scrollHeight !== scrollHeightInit;

  const onScrollHeight = useCallback(
    (
      e: TEventTextarea | HTMLElement
    ): void | null => {
      const t = e instanceof HTMLElement ? e : (e.target as HTMLElement);
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
