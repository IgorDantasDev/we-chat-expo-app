import { ReactNode } from "react";
import { TextProps } from "react-native";

export type TextAlign = "right" | "left" | "center" | "justify";
export interface Props extends TextProps {
  color?: string;
  size?: number;
  isBold?: boolean;
  textAlign?: TextAlign;
  children: string | ReactNode;
}
