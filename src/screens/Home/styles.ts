import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { BACKGROUND_COLOR } from "~/constants/colors";

export const Container = styled(SafeAreaView)`
  background-color: ${BACKGROUND_COLOR};
  flex: 1;
`;
