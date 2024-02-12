import React from "react";
import { Container } from "./styles";
import { IconProps } from "./types";
import Icons from "~/constants/icons";

export const Icon = ({
  icon,
  size = 20,
  color,
  style,
}: Omit<IconProps, "source">) => {
  if (color) {
    return (
      <Container
        size={size}
        source={Icons[icon]}
        style={[{ tintColor: color }, style]}
      />
    );
  }
  return (
    <Container
      size={size}
      source={Icons[icon]}
      style={style}
      resizeMode="contain"
    />
  );
};
