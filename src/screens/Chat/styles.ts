import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

import { HEADER_COLOR } from "~/constants/colors";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${HEADER_COLOR};
`;

export const ChatBackground = styled.ImageBackground`
  flex: 1;
  padding: 0 ${RFValue(16)}px;
`;
