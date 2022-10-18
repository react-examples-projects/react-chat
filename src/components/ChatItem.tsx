import { Box, Text, MantineTheme, Image, Group } from "@mantine/core";
import { ReactionBarSelector } from "@charkour/react-reactions";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { IChat } from "../interfaces";
import Linkify from "react-linkify";
import useToggle from "../hooks/useToggle";

const BoxTextStyles = (theme: MantineTheme) => ({
  backgroundColor:
    theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
  padding: "0.5rem",
  borderRadius: "5px",
  cursor: "text",
  width: "max-content",
  maxWidth: "500px",
  "&:hover": {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[1],
  },
  "> div > div": {
    width: "100% !important",
  },
});

const BoxContainerStyles = () => ({
  marginBottom: "1.5rem",
});

const BoxTextReactionStyles: CSSProperties = {
  background: "transparent",
  borderRadius: "0 0 5px 5px",
  position: "absolute",
  bottom: "-1.5rem",
  left: "0",
  boxShadow: "unset",
  padding: "0",
};

const UsernameStyles = () => ({
  marginBottom: "0.5rem",
});

export default function ChatItem({ profile, time, username, content }: IChat) {
  const textChatBoxRef = useRef<HTMLDivElement>(null);
  const [rightDir, setRightDir] = useState(0);
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
      label: "oh",
      node: (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          🤮
        </div>
      ),
      key: "oh",
    },
  ];

  useEffect(() => {
    if (textChatBoxRef.current) {
      const data = textChatBoxRef.current.getBoundingClientRect();
      if (data.width < 210) {
        setRightDir(-13.5);
      }
      console.log(data.width);
    }
  }, []);

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

          <Box
            mb="sm"
            sx={BoxTextStyles}
            style={{ position: "relative" }}
            ref={textChatBoxRef}
          >
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
                  bottom: rightDir === 0 ? "-2.2rem" : "12%",
                  right: rightDir + "rem",
                }}
              />
            )}
          </Box>
        </Box>
      </Group>
    </Box>
  );
}
