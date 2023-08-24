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

  ${mediaQueries.mobile} {
    /* Estilos para móviles */
    font-size: ${({ $size }) => $size / 1.9}px;
  }

  ${mediaQueries.tablet} {
    /* Estilos para tablet y más grandes */
    font-size: ${({ $size }) => $size / 1.5}px;
  }
`;
