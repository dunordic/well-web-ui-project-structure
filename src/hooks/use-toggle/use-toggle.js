import { useState, useCallback } from "react";

export default function useToggle(initialState = false) {
  const [isEnabled, setIsEnabled] = useState(initialState);
  const toggleState = useCallback(
    newState =>
      setIsEnabled(currentState =>
        newState === undefined ? !currentState : newState
      ),
    []
  );
  return [isEnabled, toggleState];
}
