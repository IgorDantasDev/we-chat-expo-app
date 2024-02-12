import React, { FC } from "react";

import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container, ProfileImage, RowContainer } from "./styles";
import { getRandomImageUnsplash } from "~/utils/unsplash";
import { Text } from "~/components/Text";
import { Icon } from "~/components/Icon";
import { Separator } from "~/components/Separator";
import { IChatHeaderProps } from "./types";

export const ChatHeader: FC<IChatHeaderProps> = ({ message }) => {
  /**
   * Navigation
   */
  const { goBack } = useNavigation();

  return (
    <Container>
      <RowContainer>
        <Pressable onPress={goBack}>
          <Icon icon="arrowLeft" color="white" />
        </Pressable>
        <ProfileImage source={{ uri: message?.sender_image }} />
        <Separator width={10} />
        <Text size={16} color="white">
          {message?.receiver}
        </Text>
      </RowContainer>
    </Container>
  );
};
