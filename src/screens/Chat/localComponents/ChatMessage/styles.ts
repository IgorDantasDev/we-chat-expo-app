import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { IMessageContainerStyleProps } from "./types";
import { HEADER_COLOR } from "~/constants/colors";

export const Container = styled.TouchableOpacity`
  background-color: transparent;
  flex: 1;
`;

export const MessageContainer = styled.View<IMessageContainerStyleProps>`
  border-radius: ${RFValue(16)}px;
  border-top-right-radius: ${({ isSender }) =>
    isSender ? RFValue(0) : RFValue(16)}px;
  border-top-left-radius: ${({ isSender }) =>
    !isSender ? RFValue(0) : RFValue(16)}px;
  align-self: ${({ isSender }) => (isSender ? "flex-end" : "flex-start")};
  padding: ${RFValue(8)}px ${RFValue(12)}px;
  max-width: 80%;
  background-color: ${({ isSender }) => (isSender ? "#005d4b" : HEADER_COLOR)};
`;
