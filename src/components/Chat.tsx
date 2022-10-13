import { Box, Text, MantineTheme } from "@mantine/core";

interface IChat {
  text?: string;
}

const BoxTextStyles = (theme: MantineTheme) => ({
  backgroundColor:
    theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
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
});

const UsernameStyles = (theme: MantineTheme) => ({
  marginBottom: "0.5rem",
});

const BoxContainerStyles = (theme: MantineTheme) => ({});

export default function Chat({
  text = "Box lets you add inline styles with sx prop",
}: IChat) {
  return (
    <Box sx={BoxContainerStyles}>
      <Text sx={UsernameStyles}>Libardo Rengifo</Text>
      <Box mb="sm" sx={BoxTextStyles}>
        <Text>{text}</Text>
      </Box>
    </Box>
  );
}
