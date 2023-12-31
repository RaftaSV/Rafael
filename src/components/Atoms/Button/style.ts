import styled from 'styled-components';
import { ColorType } from 'styles/theme';
interface StyleButtonProps {
  $color: ColorType;
}

export const StyleButton = styled.button<StyleButtonProps>`
  border: 1px solid transparent;
  height: 45px;
  border-radius: 12px;
  padding: 0 20px;
  margin-top: 10px;
  cursor: pointer;
  background: ${({ theme, $color }) => theme.colors[$color]};
  color: ${({ theme }) => theme.colors.text};
  &:hover {
    opacity: 0.8;
    transition: opacity 0.3s;
  }
`;
