import React from 'react';
import { StyleButton } from './style';
import { ColorType } from 'styles/theme';

interface ButtonProps {
    className?: string;
    onClick?: () => void;
    color?: ColorType;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, onClick, color = 'primary', children,  ...restProps }) => {
    return (
        <StyleButton
            $color={color}
            onClick={onClick}
            className={`btn ${className}`}
            {...restProps}
        >
            {children}
        </StyleButton>
    );
};


export default Button;
