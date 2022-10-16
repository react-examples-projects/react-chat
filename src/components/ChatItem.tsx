import { Box, Text, MantineTheme, Image, Group } from "@mantine/core";
import { IChat } from "../interfaces";
import Linkify from "react-linkify";

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

export default function ChatItem({ profile, time, username, content }: IChat) {
  return (
    <Box sx={BoxContainerStyles}>
      <Group>
        <Image
          radius="xl"
          src={profile}
          width="40px"
          height="40px"
          alt="Profile Pic"
          sx={{
            alignSelf: "flex-start",
          }}
        />

        <Box>
          <Group>
            <Text sx={UsernameStyles}>{username}</Text>
            <Text size="xs" sx={{ color: "#6c757d" }} component="time">
              {time}
            </Text>
          </Group>
          <Box mb="sm" sx={BoxTextStyles}>
            <Text
              component="pre"
              sx={() => ({
                display: "block",
                width: "100%",
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
              })}
            >
              <Linkify
                componentDecorator={(
                  decoratedHref: string,
                  decoratedText: string,
                  key: number
                ) => (
                  <Text
                    component="a"
                    variant="link"
                    href={decoratedHref}
                    key={key}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {decoratedText}
                  </Text>
                )}
              >
                {content}
              </Linkify>
            </Text>
          </Box>
        </Box>
      </Group>
    </Box>
  );
}
