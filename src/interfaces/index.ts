import { SyntheticEvent, RefObject } from "react";

export type TEventScrollHeight = SyntheticEvent<HTMLTextAreaElement>;

export interface IScrollHeight {
  scrollHeightInit: number;
  maxScrollHeight: number;
}

export interface IScrollHeightInfo {
  scrollHeight: number;
  isChangedScrollHeight: boolean;
  onScrollHeight(e: TEventScrollHeight): void | null;
}

export interface IScrollObject<T> {
  ref: RefObject<T>;
  scrollToBottom: () => void;
}

export interface IChat {
  profile: string;
  time: string;
  username: string;
  content: string;
}

export interface IChatListProps {
  dynamicHeight: number;
  chatHistory: IChat[];
}

export interface IChatInputTextProps {
  isChangedScrollHeight: boolean;
  onScrollHeight(e: TEventScrollHeight | HTMLElement): void | null;
  addChatItem: (chat: IChat) => void;
}

export type TToggleState = [state: boolean, toggle: () => void];
