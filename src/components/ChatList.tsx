import { ScrollArea } from "@mantine/core";
import { IChatListProps } from "../interfaces";
import ChatItem from "./ChatItem";
import useChats from "../hooks/useChats";

export default function ChatList({ dynamicHeight }: IChatListProps) {
  const chatHistory = useChats((state) => state.chats);
  return (
    <ScrollArea
      style={{
        height: `calc(100vh - ${dynamicHeight + 100}px)`,
        overflowX: "hidden",
      }}
      pr="1.3rem"
      id="chat"
    >
      {chatHistory.map((chat, i) => (
        <ChatItem key={i} {...chat} />
      ))}
    </ScrollArea>
  );
}
