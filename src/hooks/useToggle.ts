import { useCallback, useState } from "react";
import { TToggleState } from "../interfaces";

const useToggle = (initialState = false): TToggleState => {
  const [state, setState] = useState<boolean>(initialState);
  const toggle = useCallback(() => {
    setState((state) => !state);
  }, []);
  return [state, toggle];
};
export default useToggle;
