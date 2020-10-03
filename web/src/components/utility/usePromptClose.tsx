import { useEffect } from "react";

export function usePromptClose(shouldPrompt) {
  // prompt user closing the modal
  useEffect(() => {
    const handler = function (event) {
      event.preventDefault();
      event.returnValue = "Are you sure you want to leave?";
    };

    // promp user trying to leave/close window while the modal is open
    if (shouldPrompt) {
      window.addEventListener("beforeunload", handler);
    } else {
      window.removeEventListener("beforeunload", handler);
    }

    // when the modal unmounts, remove the listener
    return () => window.removeEventListener("beforeunload", handler);
  }, [shouldPrompt]);
}
