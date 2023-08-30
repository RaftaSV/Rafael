import styled, { keyframes } from 'styled-components';
import { ColorType } from 'styles/theme';

interface StyleProgressBarFillProps {
    $width?: number;
    $color: ColorType;
}

interface StyleProgressBarProps {
    $backgroundColor: ColorType;
}

export const ProgressBarContainer = styled.div<StyleProgressBarProps>`
  width: 200px;
  height: 20px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ $backgroundColor, theme }) => theme.colors[$backgroundColor]};
`;

export const ProgressBarFill = styled.div<StyleProgressBarFillProps>`
  height: 20px;
  width: ${({ $width }) => $width}%;
  background-color: ${({ theme, $color }) => theme.colors[$color]};
  border-radius: 8px;
`;
