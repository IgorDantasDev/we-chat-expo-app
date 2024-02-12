import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { SeparatorProps } from "./types";

export const Container = styled.View<SeparatorProps>`
  ${({ width }) => !!width && `width: ${RFValue(width)}px`};
  ${({ width }) => !!width && `min-width: ${RFValue(width)}px`};
  ${({ width }) => !!width && `max-width: ${RFValue(width)}px`};
  ${({ height }) => !!height && `height: ${RFValue(height)}px`};
  ${({ height }) => !!height && `min-height: ${RFValue(height)}px`};
  ${({ height }) => !!height && `max-height: ${RFValue(height)}px`};
`;
