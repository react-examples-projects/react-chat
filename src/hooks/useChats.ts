import createStore from "zustand";
import chatHistoryMock from "../mocks/chat.json";
import { IChat } from "../interfaces";

interface IChatState {
  chats: IChat[];
  addChat(_chat: IChat): void;
}

const useChats = createStore<IChatState>((set) => ({
  chats: chatHistoryMock,
  addChat: (chat: IChat) => set((state) => ({ chats: [...state.chats, chat] })),
}));

export default useChats;
