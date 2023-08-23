import styled from 'styled-components';
import { ColorType } from 'styles/theme';
interface StyleTitleProps {
  $size: number;
  $lineHeight: number;
  $color: ColorType;
}

export const StyleTitle = styled.h2<StyleTitleProps>`
  font-size: ${({ $size }) => $size}px;
  line-height: ${({ $lineHeight }) => $lineHeight}px;
  color: ${({ theme, $color }) => theme.colors[$color]};
  margin-top: -5px;
  margin-left: 2px;
`;
