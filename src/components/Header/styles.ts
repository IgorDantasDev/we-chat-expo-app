import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { HEADER_COLOR } from "~/constants/colors";

export const Container = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: ${RFValue(16)}px;
  background-color: ${HEADER_COLOR};
`;

export const RowContainer = styled.View`
  flex-direction: row;
`;
