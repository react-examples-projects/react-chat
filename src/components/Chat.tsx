import { Box, Text } from "@mantine/core";

interface IChat {
  text?: string;
}

export default function Chat({
  text = "Box lets you add inline styles with sx prop",
}: IChat) {
  return (
    <Box
      mb="sm"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        padding: "0.8rem",
        borderRadius: theme.radius.md,
        cursor: "text",
        width: "max-content",
        maxWidth: "800px",
        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[5]
              : theme.colors.gray[1],
        },
      })}
    >
      <Text size="md"> {text}</Text>
    </Box>
  );
}
