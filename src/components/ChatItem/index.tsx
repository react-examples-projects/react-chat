import { Box, Text, MantineTheme, Group, CSSObject } from "@mantine/core";
import { memo, useState } from "react";
import { IChat } from "../../interfaces";
import ChatItemReactions from "./ChatItemReactions";
import Linkify from "react-linkify";
import useCalculateReactionPosition from "../../hooks/useCalculateReactionPosition";
import useToggle from "../../hooks/useToggle";
import ChatItemReactionSelector from "./ChatItemReactionSelector";
import ChatItemProfile from "./ChatItemProfile";

const BoxTextStyles = (theme: MantineTheme) => ({
  backgroundColor: theme.colors.dark[6],
  padding: "0.5rem",
  borderRadius: "5px",
  cursor: "text",
  width: "max-content",
  maxWidth: "500px",
  "&:hover": {
    backgroundColor: theme.colors.dark[5],
  },
});

const BoxContainerStyles = (): CSSObject => ({
  marginBottom: "1.5rem",
});

const UsernameStyles = (): CSSObject => ({
  marginBottom: "0.5rem",
});

const REACTIONS: { [key: string]: string } = {
  love: "❤️",
  satisfaction: "👍",
  happy: "😆",
  surprise: "😮",
  sad: "😢",
  angry: "😡",
};

const REACTION_LIST = [
  {
    name: "happy",
    emoji: "😆",
    count: 2,
  },{
    name: "angry",
    emoji: "😡",
    count: 5,
  },
];

function ChatItem({ profile, time, username, content }: IChat) {
  const [reactions, setReactions] = useState(REACTION_LIST);
  const [isVisibleReactions, toggleVisibleReactions] = useToggle();
  const {
    textChatBoxRef,
    reactionSelectorRef,
    userReactionsRef,
    reactionSelectorPosition,
  } = useCalculateReactionPosition(isVisibleReactions);

  const onSelect = (label: string) => {
    // setReactions((reacts) => {
    //   const newReact = {
    //     key: label,
    //     label,
    //     node: (
    //       <Badge
    //         color="yellow"
    //         style={{
    //           display: "flex",
    //           justifyContent: "center",
    //           alignItems: "center",
    //         }}
    //       >
    //         {REACTIONS[label]}
    //       </Badge>
    //     ),
    //   };
    //   return [...reacts, newReact];
    // });
  };

  return (
    <Box
      sx={BoxContainerStyles}
      onMouseEnter={toggleVisibleReactions}
      onMouseLeave={toggleVisibleReactions}
    >
      <Group>
        <ChatItemProfile profile={profile} />

        <Box>
          <Group>
            <Text sx={UsernameStyles}>{username}</Text>
            <Text
              size="xs"
              sx={{ color: "#6c757d", marginBottom: "0.5rem" }}
              component="time"
            >
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

            <ChatItemReactions
              reactionList={reactions}
              ref={userReactionsRef}
            />

            <ChatItemReactionSelector
              isVisible={isVisibleReactions}
              XYPosition={reactionSelectorPosition}
              ref={reactionSelectorRef}
              onSelect={onSelect}
            />
          </Box>
        </Box>
      </Group>
    </Box>
  );
}

export default memo(ChatItem);
