import {
  AppShell,
  Navbar,
  Header,
  Input,
  Button,
  Box,
  ScrollArea,
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
        mt="sm"
        sx={() => ({
          display: "flex",
          width: "100%",
          gap: "8px",
        })}
      >
        <Input
          type="text"
          placeholder="¡Habla con tus amigos en este momento!"
          width="100%"
        />
        <Button leftIcon={<BiSend />}>Enviar</Button>
      </Box>
      {/* <Grid style={{ width: "100%", height: "52px" }} mt="sm">
        <Grid.Col sm={10} md={10} lg={11} xl={11} span={11}>
          <Input
            type="text"
            placeholder="¡Habla con tus amigos en este momento!"
          />
        </Grid.Col>

        <Grid.Col sm={2} md={2} lg={1} xl={1} span={1}>
          <Button leftIcon={<BiSend />}>Enviar</Button>
        </Grid.Col>
      </Grid> */}
    </AppShell>
  );
}

export default App;
