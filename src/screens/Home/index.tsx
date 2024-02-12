import React from "react";
import { Container } from "./styles";
import { Header } from "~/components/Header";
import { StatusBar } from "expo-status-bar";
import { HEADER_COLOR } from "~/constants/colors";
import { ChatCard } from "~/screens/Home/components/ChatCard";
import { DATA } from "~/utils/data";

export const Home = () => {
  return (
    <Container>
      <Header />
      <ChatCard message={DATA[DATA.length - 1]} />
    </Container>
  );
};
