import { Navbar, Title, ScrollArea } from "@mantine/core";
import ActiveUser from "./ActiveUser";

export default function ActiveUsers() {
  return (
    <Navbar width={{ base: 280 }} p="xs">
      <Title order={3} pl="0.6rem" mt="md" mb="lg">
        Usuarios Conectados
      </Title>

      <ScrollArea
        pr="md"
        styles={() => ({
          scrollbar: {
            "&[data-orientation='vertical'] .mantine-ScrollArea-thumb": {
              width: "3px !important",
            },
          },
        })}
      >
        <ActiveUser />
        <ActiveUser />
        <ActiveUser />
        <ActiveUser />
        <ActiveUser />
        <ActiveUser />
        <ActiveUser />
        <ActiveUser />
        <ActiveUser />
        <ActiveUser />
        <ActiveUser />
        <ActiveUser />
        <ActiveUser />
        <ActiveUser />
        <ActiveUser />
        <ActiveUser />
        <ActiveUser />
        <ActiveUser />
        <ActiveUser />
        <ActiveUser />
        <ActiveUser />
        <ActiveUser />
        <ActiveUser />
        <ActiveUser />
      </ScrollArea>
    </Navbar>
  );
}
