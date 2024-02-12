import styled from 'styled-components/native';
import {IconProps} from './types';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.Image<Partial<IconProps>>`
  min-width: ${({size}) => RFValue(size)}px;
  min-height: ${({size}) => RFValue(size)}px;
  max-width: ${({size}) => RFValue(size)}px;
  max-height: ${({size}) => RFValue(size)}px;
`;
