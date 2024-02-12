import React, { FC, useMemo } from "react";
import { Container, MessageContainer } from "./styles";
import { IChatMessageProps } from "./types";
import { Text } from "~/components/Text";
import { useChatMessageController } from "./useChatMessageController";
import { formatTimestampToHHMM } from "~/utils/formatTime";

export const ChatMessage: FC<IChatMessageProps> = ({ message }) => {
  /**
   * Controller
   */
  const { isSender } = useChatMessageController({ message });

  return (
    <Container>
      <MessageContainer isSender={isSender}>
        <Text color="white">{message.content}</Text>
        <Text isBold textAlign="right" size={10} color="#a79f9f">
          {formatTimestampToHHMM(message.sent_at)}
        </Text>
      </MessageContainer>
    </Container>
  );
};
