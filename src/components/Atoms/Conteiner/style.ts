import styled from 'styled-components';
import { getStyleResponsive, Size } from './Config';

export const StyleContainer = styled.div<{ $size: Size }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 12%;
  padding: 0 20px;
  margin-top: 15px;
  ${({ $size }) => getStyleResponsive({ size: $size })}
`;