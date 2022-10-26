import { ReactionBarSelector } from "@charkour/react-reactions";
import { CSSProperties, forwardRef, Ref } from "react";
import { IChatItemReactionProps } from "../../interfaces";

const BoxTextReactionStyles: CSSProperties = {
  background: "transparent",
  borderRadius: "0 0 5px 5px",
  position: "absolute",
  bottom: "-1.6rem",
  left: "0",
  boxShadow: "unset",
  padding: "0",
};

function ChatItemReactions(
  { reactionList }: IChatItemReactionProps,
  ref: Ref<HTMLDivElement>
) {
  if (!reactionList.length) return null;

  return (
    <ReactionBarSelector
      reactions={reactionList}
      iconSize={13}
      style={BoxTextReactionStyles}
      ref={ref}
    />
  );
}

export default forwardRef<HTMLDivElement, IChatItemReactionProps>(
  ChatItemReactions
);
