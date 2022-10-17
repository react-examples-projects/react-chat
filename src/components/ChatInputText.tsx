import { Button, Box, Textarea, CSSObject, MantineTheme } from "@mantine/core";
import { BiSend, BiImages, BiFileBlank, BiHappy } from "react-icons/bi";
import { IChatInputTextProps, TEventScrollHeight } from "../interfaces";
import { useState, useRef, useEffect } from "react";
import { EmojiClickData } from "emoji-picker-react";


import ChatEmoji from "./ChatEmoji";
import useToggle from "../hooks/useToggle";

const ChatInputContainerStyle = (): CSSObject => ({
  position: "absolute",
  bottom: "0",
  width: "100%",
});

const BtnChatCommonStyles: CSSObject = {
  position: "absolute",
  width: "40px",
  height: "40px",
  transform: "translateY(-50%)",
  padding: "0",
  fontSize: "1.2rem",
  "&:active": {
    transform: "translateY(-50%)",
    fontSize: "1.1rem",
  },

  "> div > span": {
    marginRight: "0",
  },
};

export default function ChatInputText({
  isChangedScrollHeight,
  onScrollHeight,
  addChatItem,
}: IChatInputTextProps) {
  const textChatRef = useRef<HTMLTextAreaElement>(null);
  const [message, setMessage] = useState("");
  const [isOpenEmojiPicket, toggleOpenEmojiPicker] = useToggle();

  const BtnChatStyles = (theme: MantineTheme): CSSObject => ({
    ...BtnChatCommonStyles,
    zIndex: theme.activeStyles.zIndex,
    bottom: isChangedScrollHeight ? "-1.2rem" : "unset",
    top: isChangedScrollHeight ? "unset" : "50%",
  });

  const BtnSendStyles = (theme: MantineTheme): CSSObject => ({
    ...BtnChatStyles(theme),
    right: "0",
  });

  const BtnImgStyles = (theme: MantineTheme): CSSObject => ({
    ...BtnChatStyles(theme),
    right: "42px",
  });

  const BtnFileStyles = (theme: MantineTheme): CSSObject => ({
    ...BtnChatStyles(theme),
    right: "82px",
  });

  const BtnEmojiStyles = (theme: MantineTheme): CSSObject => ({
    ...BtnChatStyles(theme),
    right: "124px",
  });

  const addChat = () => {
    const newChat = {
      username: "0xZerox",
      profile:
        "https://i.pinimg.com/736x/ec/0f/0b/ec0f0bc70db662938ec7dd85ab946eab.jpg",
      content: message,
      time: new Date().toLocaleDateString(),
    };

    addChatItem(newChat);
    setMessage("");
  };

  const onChangeMessage = (e: TEventScrollHeight) => {
    onScrollHeight(e);
    setMessage(e.currentTarget.value);
  };

  const onEmojiClick = (emoji: EmojiClickData) => {
    console.log(emoji);
    setMessage((msj) => msj + emoji.emoji);
  };

  useEffect(() => {
    if (!message) {
      onScrollHeight(textChatRef.current as HTMLTextAreaElement);
    }
  }, [onScrollHeight, message]);

  return (
    <Box sx={ChatInputContainerStyle}>
      <Textarea
        ref={textChatRef}
        value={message}
        placeholder="¡Habla con tus amigos en este momento!"
        aria-label="¡Habla con tus amigos en este momento!"
        id="input-text-chat"
        minRows={1}
        maxRows={4}
        onChange={onChangeMessage}
      />

      <Button
        leftIcon={<BiSend />}
        variant="subtle"
        color="dark"
        sx={BtnSendStyles}
        onClick={addChat}
      />

      <Button
        leftIcon={<BiImages />}
        variant="subtle"
        color="dark"
        sx={BtnImgStyles}
      />

      <Button
        leftIcon={<BiFileBlank />}
        variant="subtle"
        color="dark"
        sx={BtnFileStyles}
      />

      <Button
        leftIcon={<BiHappy />}
        variant="subtle"
        color="dark"
        sx={BtnEmojiStyles}
        onClick={toggleOpenEmojiPicker}
      />

      {isOpenEmojiPicket && (
        <ChatEmoji
          emojiProps={{ onEmojiClick }}
          sx={() => ({
            position: "absolute",
            right: "0",
            top: "-29rem",
          })}
        />
      )}
    </Box>
  );
}
