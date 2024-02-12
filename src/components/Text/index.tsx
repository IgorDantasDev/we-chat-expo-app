import React from "react";
import { Props } from "./types";
import { Container } from "./styles";

export const Text = ({
  children,
  color = "black",
  isBold,
  size = 14,
  ...rest
}: Props) => {
  return (
    <Container color={color} isBold={isBold} size={size} {...rest}>
      {children}
    </Container>
  );
};
