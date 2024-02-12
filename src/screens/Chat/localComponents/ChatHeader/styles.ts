import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { HEADER_COLOR } from "~/constants/colors";

export const Container = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: ${RFValue(16)}px;
  padding-left: 0;
  background-color: ${HEADER_COLOR};
`;

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProfileImage = styled.Image`
  border-radius: ${RFValue(20)}px;
  width: ${RFValue(30)}px;
  height: ${RFValue(30)}px;
`;
