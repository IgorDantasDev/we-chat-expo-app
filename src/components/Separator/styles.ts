import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  ${({ width }) => !!width && `width: ${RFValue(width)}px`};
  ${({ width }) => !!width && `min-width: ${RFValue(width)}px`};
  ${({ width }) => !!width && `max-width: ${RFValue(width)}px`};
  ${({ height }) => !!height && `height: ${RFValue(height)}px`};
  ${({ height }) => !!height && `min-height: ${RFValue(height)}px`};
  ${({ height }) => !!height && `max-height: ${RFValue(height)}px`};
`;
