import { useRef, useEffect } from "react";

export default function useFocusOnMount() {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.setAttribute("tabindex", "-1");
      // elementRef.current.focus();
    }
  }, []);

  return elementRef;
}
