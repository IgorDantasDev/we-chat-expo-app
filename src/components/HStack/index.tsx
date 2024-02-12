import React, { FC } from "react";
import { Container } from "./styles";
import { IHStackProps } from "./types";

export const HStack: FC<IHStackProps> = ({
  alignItems = "center",
  justifyContent = "flex-start",
  children,
}) => {
  return (
    <Container alignItems={alignItems} justifyContent={justifyContent}>
      {children}
    </Container>
  );
};
