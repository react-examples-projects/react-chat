import { ReactionBarSelector } from "@charkour/react-reactions";
import { forwardRef, Ref } from "react";
import { ChatItemReactionsSelectorProps } from "../../interfaces";

function ChatItemReactionSelector(
  { isVisible, XYPosition, onSelect }: ChatItemReactionsSelectorProps,
  ref: Ref<HTMLDivElement>
) {
  if (!isVisible) return null;

  return (
    <ReactionBarSelector
      onSelect={onSelect}
      ref={ref}
      iconSize={18}
      style={{
        backgroundColor: "#1A1B1E",
        position: "absolute",
        bottom: XYPosition === 0 ? "-2.2rem" : "0",
        right: XYPosition + "rem",
      }}
    />
  );
}

export default forwardRef<HTMLDivElement, ChatItemReactionsSelectorProps>(
  ChatItemReactionSelector
);
