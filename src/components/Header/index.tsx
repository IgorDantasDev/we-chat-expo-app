import React from "react";
import { Text } from "../Text";
import { Icon } from "../Icon";
import { Container, RowContainer } from "./styles";
import { Separator } from "../Separator";
import { Pressable } from "react-native";

export const Header: React.FC = () => {
  return (
    <Container>
      <Text size={20} color="white">
        We Chat
      </Text>
      <RowContainer>
        <Pressable>
          <Icon color={"white"} icon={"camera"} />
        </Pressable>
        <Separator width={10} />
        <Pressable>
          <Icon color={"white"} icon={"magnifyingGlass"} />
        </Pressable>
        <Separator width={10} />
        <Pressable>
          <Icon color={"white"} icon={"dots"} />
        </Pressable>
      </RowContainer>
    </Container>
  );
};
