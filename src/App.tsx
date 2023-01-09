import Layout from "./components/Layouts/Layout";
import ChatList from "./components/ChatList";
import useScrollHeightLines from "./hooks/useScrollHeightLines";
import ChatInputText from "./components/ChatInputText";

function App() {
  const { scrollHeight: dynamicHeight, ...props } = useScrollHeightLines({
    scrollHeightInit: 42, // initial height
    maxScrollHeight: 200,
  });

  return (
    <Layout>
      <ChatList dynamicHeight={dynamicHeight} />
      <ChatInputText {...props} />
    </Layout>
  );
}

export default App;
