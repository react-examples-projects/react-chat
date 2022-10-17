import { Box, Text, MantineTheme, Image, Group } from "@mantine/core";
import { ReactionBarSelector } from "@charkour/react-reactions";
import { IChat } from "../interfaces";
import Linkify from "react-linkify";
import useToggle from "../hooks/useToggle";
import { CSSProperties } from "react";

const BoxTextStyles = (theme: MantineTheme) => ({
  backgroundColor:
    theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
  padding: "0.8rem",
  borderRadius: "5px 5px 0 0",
  cursor: "text",
  width: "max-content",
  maxWidth: "500px",
  "&:hover": {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[1],
    "> div": {
      backgroundColor:
        (theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1]) + " !important",
    },
  },
  "> div > div": {
    width: "100% !important",
  },
});

const BoxTextReactionStyles: CSSProperties = {
  backgroundColor: "#25262b",
  borderRadius: "0 0 5px 5px",
  position: "absolute",
  bottom: "-1.5rem",
  left: "0",
  boxShadow: "unset",
};

const UsernameStyles = () => ({
  marginBottom: "0.5rem",
});

const BoxContainerStyles = () => ({
  marginBottom: "1rem",
});

export default function ChatItem({ profile, time, username, content }: IChat) {
  const [isVisibleReactions, toggleVisibleReactions] = useToggle();
  const REACTION_LIST = [
    {
      label: "haha",
      node: (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          😄
        </div>
      ),
      key: "smile",
    },
    {
      label: "haha",
      node: (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          😄
        </div>
      ),
      key: "smile",
    },
  ];

  return (
    <Box
      sx={BoxContainerStyles}
      onMouseEnter={toggleVisibleReactions}
      onMouseLeave={toggleVisibleReactions}
    >
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

          <Box mb="sm" sx={BoxTextStyles} style={{ position: "relative" }}>
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
            {REACTION_LIST.length && (
              <ReactionBarSelector
                reactions={REACTION_LIST}
                iconSize={13}
                style={BoxTextReactionStyles}
              />
            )}

            {isVisibleReactions && (
              <ReactionBarSelector
                iconSize={18}
                style={{
                  backgroundColor: "#1A1B1E",
                  position: "absolute",
                  bottom: "-2.2rem",
                  right: "0",
                }}
              />
            )}
          </Box>
        </Box>
      </Group>
    </Box>
  );
}
