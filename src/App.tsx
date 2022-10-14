import Chat from "./components/Chat";
import Layout from "./components/Layouts/Layout";
import useScrollHeightLines from "./hooks/useScrollHeightLines";
import { Button, Box, ScrollArea, Textarea } from "@mantine/core";
import { BiSend } from "react-icons/bi";

function App() {
  const { scrollHeight, isChangedScrollHeight, onScrollHeight } =
    useScrollHeightLines({
      scrollHeightInit: 42,
      maxScrollHeight: 200,
    });

  return (
    <Layout>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "calc(100vh - 92px)",
        }}
      >
        <ScrollArea
          style={{
            height: `calc(100vh - ${scrollHeight + 100}px)`,
            overflowX: "hidden",
          }}
          pr="1.3rem"
          id="chat"
        >
          {Array(100)
            .fill(0)
            .map((_, i) => (
              <Chat key={i} />
            ))}
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
            onChange={onScrollHeight}
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
              bottom: isChangedScrollHeight ? "-1.2rem" : "unset",
              top: isChangedScrollHeight ? "unset" : "50%",
              transform: "translateY(-50%)",
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
    </Layout>
  );
}

export default App;
