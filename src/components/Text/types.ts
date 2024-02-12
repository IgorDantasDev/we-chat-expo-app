import { ReactNode } from "react";
import { TextProps } from "react-native";

export interface Props extends TextProps {
  color?: string;
  size?: number;
  isBold?: boolean;
  children: string | ReactNode;
}
