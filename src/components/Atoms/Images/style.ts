import styled from 'styled-components';

export const CircleImage = styled.img<{ width: number; height: number }>`
  border-radius: 50%;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  object-fit: contain;
`;
