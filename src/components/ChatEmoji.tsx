import EmojiPicker, { Theme } from "emoji-picker-react";
import { Box, BoxProps } from "@mantine/core";

export default function ChatEmoji(props: BoxProps) {
  return (
    <Box {...props}>
      <EmojiPicker theme={Theme.DARK} width="100%" lazyLoadEmojis/>
    </Box>
  );
}
