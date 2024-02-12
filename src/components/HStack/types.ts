import { ReactNode } from "react";
import { ViewProps } from "react-native";

export type JustifyContent =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-evenly"
  | "space-around";

export type AlignItems = "center" | "flex-end" | "flex-start";

export interface IHStackProps extends ViewProps {
  children?: ReactNode;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
}
