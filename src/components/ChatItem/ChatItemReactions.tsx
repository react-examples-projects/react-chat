import { forwardRef, Ref } from "react";
import { IChatItemReactionProps } from "../../interfaces";
import { Box, CSSObject, MantineTheme, Text } from "@mantine/core";

const BoxTextReactionStyles = (): CSSObject => ({
  position: "absolute",
  bottom: "-1.6rem",
  left: "0",
  display: "flex",
  gap: "5px",
  alignItems: "center",
  width: "auto",
});

const BoxReactionListStyles = (theme: MantineTheme): CSSObject => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.colors.dark[6],
  padding: "1px 4px",
  borderRadius: "4px",
  fontSize: "12px",
});

function ChatItemReactions(
  { reactionList }: IChatItemReactionProps,
  ref: Ref<HTMLDivElement>
) {
  if (!reactionList.length) return null;

  return (
    <Box sx={BoxTextReactionStyles} ref={ref}>
      {reactionList.map(({ emoji, count }, i) => (
        <Box sx={BoxReactionListStyles} key={i}>
          {emoji}
          <Text ml={6}>{count}</Text>
        </Box>
      ))}
    </Box>
  );
}

export default forwardRef<HTMLDivElement, IChatItemReactionProps>(
  ChatItemReactions
);
