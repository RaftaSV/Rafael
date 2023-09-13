import React, { ReactNode } from 'react';
import { StyleTitle } from './style';
import { ColorType } from 'styles/theme';

interface TitleProps {
  children: ReactNode;
  size?: number;
  lineHeight?: number;
  color?: ColorType;
  marginLeft?: number;
  align?: string;
  htmlTag?: string;
}

const Title: React.FC<TitleProps> = ({
    children,
    size = 35,
    lineHeight = size + 20,
    color = 'text',
    marginLeft = 0,
    align = 'center',
    htmlTag = 'h1',
}) => {
    return (
        <StyleTitle $size={size} $lineHeight={lineHeight} $color={color} $marginLeft={marginLeft} $align={align}
            as={htmlTag}
        >
            {children}
        </StyleTitle>
    );
};

export default Title;
