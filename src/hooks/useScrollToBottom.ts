import { useRef } from "react";
import { IScrollObject } from "../interfaces";

export default function useScrollToBottom<
  T extends HTMLElement
>(): IScrollObject<T> {
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
