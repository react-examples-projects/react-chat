import { Box, Text, MantineTheme, Image, Group } from "@mantine/core";

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
  maxWidth: "500px",
  "&:hover": {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[1],
  },
});
 
const UsernameStyles = () => ({
  marginBottom: "0.5rem",
});

const BoxContainerStyles = () => ({
  marginBottom: "0.8rem",
});

export default function Chat({
  text = "Box lets you add inline styles with sx prop",
}: IChat) {
  return (
    <Box sx={BoxContainerStyles}>
      <Group>
        <Image
          radius="md"
          src="https://i.pinimg.com/564x/5f/2d/98/5f2d987179679a47e396484942ced933.jpg"
          width="40px"
          height="40px"
          alt="Profile Pic"
          sx={{
            alignSelf: "flex-start",
          }}
        />

        <Box>
          <Group>
            <Text sx={UsernameStyles}>Libardo Rengifo</Text>
            <Text size="xs" sx={{ color: "#6c757d" }}>
              10:34 pm
            </Text>
          </Group>
          <Box mb="sm" sx={BoxTextStyles}>
            <Text>{text}</Text>
          </Box>
        </Box>
      </Group>
    </Box>
  );
}
