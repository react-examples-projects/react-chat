import { useEffect, useRef, useState } from "react";
import { IReactionPosition } from "../interfaces";

export default function useCalculateReactionPosition(
  isVisibleReactions: boolean
): IReactionPosition {
  const textChatBoxRef = useRef<HTMLDivElement>(null);
  const reactionSelectorRef = useRef<HTMLDivElement>(null);
  const userReactionsRef = useRef<HTMLDivElement>(null);
  const [reactionSelectorPosition, setReactionSelectorPosition] = useState(0);

  useEffect(() => {
    if (
      textChatBoxRef.current &&
      userReactionsRef.current &&
      reactionSelectorRef.current
    ) {
      const textChatRect = textChatBoxRef.current.getBoundingClientRect();
      const userReactionsRect =
        userReactionsRef.current.getBoundingClientRect();
      const reactionSelectorRect =
        reactionSelectorRef.current.getBoundingClientRect();

      const widthTextChat = textChatRect.width;
      const widthUserReactions = userReactionsRect.width;
      const widthReactionSelector = reactionSelectorRect.width;

      const totalWidth = Math.ceil(widthReactionSelector + widthUserReactions);

      console.log({ totalWidth, widthTextChat, widthUserReactions });

      if (totalWidth > widthTextChat) {
        setReactionSelectorPosition(-13.5);
      }
      // if (widthTextChat < 210) {
      //   setReactionSelectorPosition(-13.5);
      // }
    }
  }, [isVisibleReactions]);

  return {
    textChatBoxRef,
    reactionSelectorRef,
    userReactionsRef,
    reactionSelectorPosition,
  };
}
