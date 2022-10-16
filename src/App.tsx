import Layout from "./components/Layouts/Layout";
import ChatList from "./components/ChatList";
import useScrollHeightLines from "./hooks/useScrollHeightLines";
import ChatInputText from "./components/ChatInputText";
import CHAT_HISTORY from "./mocks/chat.json";
import { useState } from "react";
import { IChat } from "./interfaces";

function App() {
  const [chatHistory, setChatHistory] = useState<IChat[]>(CHAT_HISTORY);
  const { scrollHeight, isChangedScrollHeight, onScrollHeight } =
    useScrollHeightLines({
      scrollHeightInit: 42,
      maxScrollHeight: 200,
    });

  const addChatItem = (chat: IChat) => {
    setChatHistory((chats) => [...chats, chat]);
  };

  return (
    <Layout>
      <ChatList dynamicHeight={scrollHeight} chatHistory={chatHistory} />
      <ChatInputText
        {...{ isChangedScrollHeight, onScrollHeight }}
        addChatItem={addChatItem}
      />
    </Layout>
  );
}

export default App;
