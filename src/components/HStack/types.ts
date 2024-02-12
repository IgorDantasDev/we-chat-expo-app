import { ReactNode } from "react";

export type JustifyContent =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-evenly"
  | "space-around";

export type AlignItems = "center" | "flex-end" | "flex-start";

export interface IHStackProps {
  children?: ReactNode;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
}
