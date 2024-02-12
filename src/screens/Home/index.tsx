import React from "react";
import { Container } from "./styles";
import { Header } from "~/components/Header";
import { StatusBar } from "expo-status-bar";
import { HEADER_COLOR } from "~/constants/colors";
import { ChatCard } from "~/components/ChatCard";

export const Home = () => {
  return (
    <Container>
      <StatusBar backgroundColor={HEADER_COLOR} />
      <Header />
      <ChatCard />
    </Container>
  );
};
