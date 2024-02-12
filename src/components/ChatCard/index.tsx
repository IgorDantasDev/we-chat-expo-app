import React from "react";
import {
  Container,
  Content,
  ConversationInfo,
  MessageInfoContainer,
  ProfileImage,
} from "./styles";
import { getRandomImageUnsplash } from "~/utils/unsplash";
import { Text } from "../Text";
import { Separator } from "../Separator";
import { Icon } from "../Icon";

export const ChatCard: React.FC = () => {
  return (
    <Container>
      <ProfileImage source={{ uri: getRandomImageUnsplash(50) }} />
      <Separator width={10} />
      <Content>
        <ConversationInfo>
          <Text font-weight="700" color="white">
            Camarada Ibra
          </Text>
          <Text size={12} color="#535c63">
            Algum avanço?
          </Text>
        </ConversationInfo>
        <MessageInfoContainer>
          <Text size={10} color="#535c63">
            10:28
          </Text>
        </MessageInfoContainer>
      </Content>
    </Container>
  );
};
