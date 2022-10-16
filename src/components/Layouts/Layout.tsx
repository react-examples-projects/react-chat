import { AppShell, Header, Box, } from "@mantine/core";
import { ReactElement } from "react";
import ActiveUsers from "../ActiveUsers";

interface ILayout {
  children: ReactElement[] | ReactElement;
}

export default function Layout({ children }: ILayout) {
  return (
    <AppShell
      padding="md"
      navbar={<ActiveUsers />}
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
