import React, { ReactNode } from 'react';
import { StyleTitle } from './style';
import { ColorType } from 'styles/theme';

interface TitleProps {
  children: ReactNode;
  size?: number;
  lineHeight?: number;
  color?: ColorType;
}

const Title: React.FC<TitleProps> = ({ children, size = 35, lineHeight = size + 20, color = 'text' }) => {
    return (
        <StyleTitle $size={size} $lineHeight={lineHeight} $color={color}>
            {children}
        </StyleTitle>
    );
};

export default Title;
