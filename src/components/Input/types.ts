import React from "react";
import { TextInputProps } from "react-native";
import { IconNames } from "~/constants/icons";

export type IconPosition = "left" | "right";

export interface InputProps extends TextInputProps {
  color?: string;
  iconColor?: string;
  icon?: IconNames;
  iconPosition?: IconPosition;
  label?: string;
  error?: string;
  backgroundActiveColor?: string;
  iconButton?: React.ReactNode;
  onMessageSend?: (text: string) => void;
}

/**
 * StyleProps
 */

export interface BorderProps {
  readonly color: string;
  readonly borderColor: string;
}

/**
 * RefProps
 */

export interface InputValueRef {
  value: string;
  focus: () => void;
  blur: () => void;
  setValue: (value: string) => void;
}
