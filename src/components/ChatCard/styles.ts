import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: "white";
  padding: ${RFValue(16)}px;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 85%;
`;

export const ProfileImage = styled.Image`
  border-radius: ${RFValue(20)}px;
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
`;

export const ConversationInfo = styled.View``;

export const MessageInfoContainer = styled.View`
  align-items: center;
`;
