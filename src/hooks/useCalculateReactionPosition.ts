import { useEffect, useRef, useState } from "react";
import { IReactionPosition } from "../interfaces";

/* 
  In `ChatItemReactionSelector` is used to put the container at X,Y coords using this variable value
*/
const APPROX_COORDS = -13.5;

export default function useCalculateReactionPosition(
  isVisibleReactions: boolean
): IReactionPosition {
  const textChatBoxRef = useRef<HTMLDivElement>(null);
  const reactionSelectorRef = useRef<HTMLDivElement>(null);
  const userReactionsRef = useRef<HTMLDivElement>(null);
  const [reactionSelectorPosition, setReactionSelectorPosition] = useState(0);

  useEffect(() => {
    const isReadyNodes =
      textChatBoxRef.current &&
      userReactionsRef.current &&
      reactionSelectorRef.current;
    if (!isReadyNodes) return;

    const textChatRect = textChatBoxRef.current.getBoundingClientRect();
    const userReactionsRect = userReactionsRef.current.getBoundingClientRect();
    const reactionSelectorRect =
      reactionSelectorRef.current.getBoundingClientRect();

    const widthTextChat = textChatRect.width;
    const widthUserReactions = userReactionsRect.width;
    const widthReactionSelector = reactionSelectorRect.width;
    const totalWidth = Math.ceil(widthReactionSelector + widthUserReactions);

    if (totalWidth > widthTextChat) setReactionSelectorPosition(APPROX_COORDS);
  }, [isVisibleReactions]);

  return {
    textChatBoxRef,
    reactionSelectorRef,
    userReactionsRef,
    reactionSelectorPosition,
  };
}
