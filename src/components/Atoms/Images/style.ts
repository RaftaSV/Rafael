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
  width:${({ $width }) => $width}px;
  height: ${({$height}) => $height}px;
  margin-left: ${({ $marginLeft }) => $marginLeft}px;
  margin-right: ${({ $marginRight }) => $marginRight}px;
  object-fit: contain;
    ${mediaQueries.mobile} {
      margin-left: 0;
      margin-right: 0;
    }
  
`;
