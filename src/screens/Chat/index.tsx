import React from "react";

import { ChatBackground, Container } from "./styles";
import { ChatHeader } from "./localComponents/ChatHeader";
import { FlatList } from "react-native";
import { ChatMessage } from "./localComponents/ChatMessage";
import { DATA } from "~/utils/data";
import { Separator } from "~/components/Separator";
import Input from "~/components/Input";
import { RFValue } from "react-native-responsive-fontsize";
import BACKGROUND_IMAGE from "~/assets/images/background.jpg";

export const Chat = () => {
  return (
    <Container>
      <ChatHeader message={DATA[1]} />
      <ChatBackground source={BACKGROUND_IMAGE}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <ChatMessage message={item} />}
          ItemSeparatorComponent={() => <Separator height={10} />}
          contentContainerStyle={{ paddingVertical: RFValue(8) }}
        />
      </ChatBackground>
      <Input
        onMessageSend={() => {}}
        color="transparent"
        placeholderTextColor={"white"}
        placeholder="Message"
      />
    </Container>
  );
};
