import { ImageProps } from "react-native";
import { IconNames } from "~/constants/icons";

export interface IconOptionProps {
  icon: IconNames;
  size?: number;
  color?: string;
}

export interface IconProps extends ImageProps, IconOptionProps {}
