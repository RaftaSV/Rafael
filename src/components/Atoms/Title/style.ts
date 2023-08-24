import styled from 'styled-components';
import { ColorType, mediaQueries } from 'styles/theme';

interface StyleTitleProps {
  $size: number;
  $lineHeight: number;
  $color: ColorType;
  $marginLeft?: number;
  $align?: string;
}

export const StyleTitle = styled.h2<StyleTitleProps>`
  font-size: ${({ $size }) => $size}px;
  color: ${({ theme, $color }) => theme.colors[$color]};
  margin-left: ${({ $marginLeft }) => $marginLeft}px;
  text-align: ${({ $align }) => $align};

  ${mediaQueries.mobile} {
    /* Estilos para móviles */
    font-size: ${({ $size }) => $size / 1.72}px;
  }

  ${mediaQueries.tablet} {
    /* Estilos para tablet y más grandes */
    font-size: ${({ $size }) => $size / 1.5}px;
  }
  ${mediaQueries.desktop} {
    line-height: ${({ $lineHeight }) => $lineHeight*1.4}px;
  }
`;
