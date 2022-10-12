import { AppShell, Navbar, Header, Input, Button, Grid } from "@mantine/core";
import { BiSend } from "react-icons/bi";

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
      <Grid style={{ width: "100%", marginTop: "auto" }}>
        <Grid.Col sm={10} md={10} lg={11} xl={11} span={11}>
          <Input
            type="text"
            placeholder="¡Habla con tus amigos en este momento!"
          />
        </Grid.Col>

        <Grid.Col sm={2} md={2} lg={1} xl={1} span={1}>
          <Button leftIcon={<BiSend />}>Enviar</Button>
        </Grid.Col>
      </Grid>
    </AppShell>
  );
}

export default App;
