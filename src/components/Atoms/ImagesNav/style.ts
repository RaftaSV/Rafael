import styled from 'styled-components';
import { mediaQueries } from 'styles/theme';

interface CircleImageProps {
  $width: number;
  $height: number;
  $marginLeft?: number;
  $marginRight?: number;
}
export const CircleImage = styled.img<CircleImageProps>`
  border-radius: 50%;
  border: 2.5px solid ${({ theme }) => theme.colors.text};
  margin-left: ${({ $marginLeft }) => $marginLeft}px;
  margin-right: ${({ $marginRight }) => $marginRight}px;
  object-fit: contain;
  ${mediaQueries.desktop} {
    width: ${({ $width }) => $width}px;
    height: ${({ $height }) => $height}px;
  }
  ${mediaQueries.tablet} {
    width: ${({ $width }) => $width * 0.6}px;
    height: ${({ $height }) => $height * 0.6}px;
  }
  ${mediaQueries.mobile} {
    width: ${({ $width }) => $width * 0.9}px;
    height: ${({ $height }) => $height * 0.9}px;
  }
`;
