import {
  AppShell,
  Navbar,
  Header,
  Button,
  Box,
  ScrollArea,
  Textarea,
} from "@mantine/core";
import { BiSend } from "react-icons/bi";
import { SyntheticEvent, useState } from "react";
import useScrollToBottom from "./hooks/useScrollToBottom";
import Chat from "./components/Chat";
import "./styles/styles.scss";

function App() {
  const INPUT_CHAT_HEIGHT_LINE_ROWS = 42;
  const [inputTextChatHeight, setInputTextChatHeight] = useState<number>(
    INPUT_CHAT_HEIGHT_LINE_ROWS
  );
  const { ref, scrollToBottom } = useScrollToBottom<HTMLDivElement>();
  const IS_LARGE_INPUT_CHAT_LINE_ROWS =
    INPUT_CHAT_HEIGHT_LINE_ROWS !== inputTextChatHeight;

  function calcHeight(e: SyntheticEvent<HTMLTextAreaElement>) {
    if (e.target) {
      const target = e.target as HTMLTextAreaElement;
      target.style.height = "0";
      scrollToBottom();
      if (target.scrollHeight > 200) {
        target.style.height = "200px";
        setInputTextChatHeight(200);
      } else {
        target.style.height = target.scrollHeight + "px";
        setInputTextChatHeight(target.scrollHeight);
      }
    }
  }
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 230 }} p="xs">
          {/* Navbar content */}
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          {/* Header content */}
        </Header>
      }
      styles={(theme) => ({
        main: {
          position: "relative",
          height: "100vh",
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: `calc(100vh - 92px)`,
        }}
      >
        <ScrollArea
          style={{
            height: `calc(100vh - ${inputTextChatHeight + 100}px)`,
            overflowX: "hidden",
          }}
          pr="1.3rem"
          ref={ref}
          id="chat"
        >
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat text="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias ..." />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
        </ScrollArea>

        <Box
          sx={() => ({
            position: "absolute",
            bottom: "0",
            width: "100%",
          })}
        >
          <Textarea
            placeholder="¡Habla con tus amigos en este momento!"
            aria-label="¡Habla con tus amigos en este momento!"
            id="input-text-chat"
            minRows={1}
            maxRows={4}
            onChange={calcHeight}
          />

          <Button
            leftIcon={<BiSend />}
            variant="subtle"
            color="dark"
            sx={(theme) => ({
              position: "absolute",
              zIndex: theme.activeStyles.zIndex,
              width: "40px",
              height: "40px",
              bottom: IS_LARGE_INPUT_CHAT_LINE_ROWS ? "-1.2rem" : "unset",
              top: IS_LARGE_INPUT_CHAT_LINE_ROWS ? "unset" : "50%",
              transform:  "translateY(-50%)",
              padding: "0",
              right: "0",
              fontSize: "1.2rem",

              "&:active": {
                transform: "translateY(-50%)",
                fontSize: "1.1rem",
              },

              "> div > span": {
                marginRight: "0",
              },
            })}
          ></Button>
        </Box>
      </Box>
    </AppShell>
  );
}

export default App;
