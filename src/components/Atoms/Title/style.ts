import styled from 'styled-components';
import { ColorType, mediaQueries } from 'styles/theme';

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
  
  ${mediaQueries.mobile} {
    font-size: 16px;
    color: ${({ theme, $color }) => theme.colors[$color]};
  }

  ${mediaQueries.tablet} {
    font-size: 20px;
    color: ${({ theme, $color }) => theme.colors[$color]};
  }

  ${mediaQueries.desktop} {
    font-size: ${({ $size }) => $size}px;
    color: ${({ theme, $color }) => theme.colors[$color]};
  }
`;
