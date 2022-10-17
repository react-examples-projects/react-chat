import EmojiPicker, { Theme, Props} from "emoji-picker-react";
import { Box, BoxProps } from "@mantine/core";

interface IChatEmojiProps extends BoxProps {
  emojiProps?: Props;
}

export default function ChatEmoji({
  emojiProps = {},
  ...props
}: IChatEmojiProps) {
  return (
    <Box {...props}>
      <EmojiPicker
        theme={Theme.DARK}
        width="100%"
        lazyLoadEmojis
        {...emojiProps}
      />
    </Box>
  );
}
