import React, { FC } from "react";
import {
  Container,
  Content,
  ConversationInfo,
  MessageInfoContainer,
  ProfileImage,
} from "./styles";
import { getRandomImageUnsplash } from "~/utils/unsplash";
import { Text } from "../../../../components/Text";
import { Separator } from "../../../../components/Separator";
import { useNavigation } from "@react-navigation/native";
import { IChatCardProps } from "./types";
import { formatTimestampToHHMM } from "~/utils/formatTime";

export const ChatCard: FC<IChatCardProps> = ({ message }) => {
  /**
   * Navigation
   */
  const { navigate } = useNavigation<StackNavigatorProp>();

  return (
    <Container onPress={() => navigate("Chat")}>
      <ProfileImage source={{ uri: message.sender_image }} />
      <Separator width={10} />
      <Content>
        <ConversationInfo>
          <Text font-weight="700" color="white">
            {message?.receiver}
          </Text>
          <Text size={12} color="#535c63">
            {message?.content}
          </Text>
        </ConversationInfo>
        <MessageInfoContainer>
          <Text size={10} color="#535c63">
            {formatTimestampToHHMM(message?.sent_at)}
          </Text>
        </MessageInfoContainer>
      </Content>
    </Container>
  );
};
