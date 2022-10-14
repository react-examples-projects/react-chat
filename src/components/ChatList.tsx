import { ScrollArea } from "@mantine/core";
import Chat from "./Chat";

interface IChatListProps {
  dynamicHeight: number;
}

export default function ChatList({ dynamicHeight }: IChatListProps) {
  return (
    <ScrollArea
      style={{
        height: `calc(100vh - ${dynamicHeight + 100}px)`,
        overflowX: "hidden",
      }}
      pr="1.3rem"
      id="chat"
    >
      {Array(100)
        .fill(0)
        .map((_, i) => (
          <Chat key={i} />
        ))}
    </ScrollArea>
  );
}
