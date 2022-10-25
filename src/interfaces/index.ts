import { SyntheticEvent, RefObject, ReactElement } from "react";

export type TEventTextarea = SyntheticEvent<HTMLTextAreaElement>;
export type TRefHTMLDiv = RefObject<HTMLDivElement>;

export interface IScrollHeight {
  scrollHeightInit: number;
  maxScrollHeight: number;
}

export interface IScrollHeightInfo {
  scrollHeight: number;
  isChangedScrollHeight: boolean;
  onScrollHeight(e: TEventTextarea): void | null;
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
  onScrollHeight(e: TEventTextarea | HTMLElement): void | null;
  addChatItem: (chat: IChat) => void;
}

export type TToggleState = [state: boolean, toggle: () => void];

interface IReactionList {
  label: string;
  key: string;
  node: ReactElement;
}

export interface IChatItemReactionProps {
  reactionList: IReactionList[];
}

export interface ChatItemReactionsSelectorProps {
  isVisible: boolean;
  XYPosition: number;
}

export interface IReactionPosition {
  textChatBoxRef: TRefHTMLDiv;
  reactionSelectorRef: TRefHTMLDiv;
  userReactionsRef: TRefHTMLDiv;
  reactionSelectorPosition: number;
}