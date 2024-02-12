import React from "react";
import { Props } from "./types";
import { Container } from "./styles";

export const Text = ({
  children,
  color = "black",
  isBold,
  size = 14,
  textAlign = "left",
  ...rest
}: Props) => {
  return (
    <Container
      textAlign={textAlign}
      color={color}
      isBold={isBold}
      size={size}
      {...rest}
    >
      {children}
    </Container>
  );
};
