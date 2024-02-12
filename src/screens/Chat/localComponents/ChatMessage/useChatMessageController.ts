import { useMemo } from "react";

export const useChatMessageController = ({ message }) => {
  /**
   * Memos
   */
  const isSender = useMemo(() => {
    return message.sender === "Angus Bacon";
  }, [message]);

  return {
    isSender,
  };
};
