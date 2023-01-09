import createStore from "zustand";
import { IReaction } from "../interfaces";

interface IReactionState {
  reactions: IReaction[];
}

const useReactions = createStore<IReactionState>((set) => ({
  reactions: [],
}));

export default useReactions;
