import React, { ReactNode } from 'react';
import { StyleContainer } from './style';

export interface ContainerProps {
  children: ReactNode;
  size?: 'small' | 'middle' | 'large';
  id?: string;
  style?: React.CSSProperties;
  className?: string;
}

function Container({ children, id, style, className, size = 'small', ...rest }: ContainerProps) {
    return (
        <StyleContainer id={id} className={className} style={style} $size={size} {...rest}>
            {children}
        </StyleContainer>
    );
}

export default Container;
