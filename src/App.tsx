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
import Chat from "./components/Chat";

function App() {
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
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <ScrollArea style={{ height: "calc(100vh - 150px)" }} pr="1.3rem">
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
        mt="20px"
        sx={() => ({
          display: "flex",
          alignItems: "flex-end",
          width: "100%",
          gap: "8px",
        })}
      >
        <Textarea
          placeholder="¡Habla con tus amigos en este momento!"
          aria-label="¡Habla con tus amigos en este momento!"
          sx={() => ({ width: "100%" })}
          minRows={1}
          maxRows={4}
          autosize
        />
        <Button leftIcon={<BiSend />} sx={() => ({ height: "44px" })}>
          Enviar
        </Button>
      </Box>
    </AppShell>
  );
}

export default App;
