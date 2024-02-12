import React from "react";
import { Container } from "./styles";
import { SeparatorProps } from "./types";

export const Separator = ({ width, height }: SeparatorProps) => {
  return <Container width={width} height={height} />;
};
