import { AppShell, Navbar, Header, Box } from "@mantine/core";
import { ReactElement } from "react";

interface ILayout {
  children: ReactElement [];
}

export default function Layout({ children }: ILayout) {
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
          height: "calc(100vh - 92px)",
        }}
      >
        {children}
      </Box>
    </AppShell>
  );
}
