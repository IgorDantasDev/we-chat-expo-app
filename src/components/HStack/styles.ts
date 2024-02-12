import styled from "styled-components/native";
import { IHStackProps } from "./types";

export const Container = styled.View<IHStackProps>`
  flex-direction: row;
  width: 100%;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
`;
