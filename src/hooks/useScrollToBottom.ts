import { RefObject, useRef } from "react";

interface ScrollObject<T> {
  ref: RefObject<T>;
  scrollToBottom: () => void;
}

export default function useScrollToBottom<
  T extends HTMLElement
>(): ScrollObject<T> {
  const ref = useRef<T>(null);
  console.log(ref.current);

  const scrollToBottom = (): void => {
    if (ref.current) {
      // ref.current.scrollTop = ref.current.scrollHeight;
      ref.current.scrollTo({ top: 0, behavior: "smooth" });
      console.log(ref.current.scrollHeight);
      // ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return {
    ref,
    scrollToBottom,
  };
}
