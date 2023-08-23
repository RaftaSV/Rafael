// Importaciones de bibliotecas y componentes
import React, { useEffect, useState } from 'react';
import { useAppTheme } from 'context/appTheme';
import MoonFilled from 'components/Atoms/Icons/moon';
import SundFilled from 'components/Atoms/Icons/sun';
import { NavbarStyle, NavbarNav, NavbarButton } from './style';

// Componente de la barra de navegación
const Navbar = () => {
    // Hook de tema
    const { theme, themeToggle } = useAppTheme();
    const [isScrolling, setIsScrolling] = useState(false);

    // Efecto para gestionar el desplazamiento
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0 && !isScrolling) {
                setIsScrolling(true);
            } else if (window.scrollY === 0 && isScrolling) {
                setIsScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isScrolling]);

    // Renderización del componente
    return (
        <NavbarNav>
            <NavbarStyle size="large" $isScrolling={isScrolling}>
                <NavbarButton
                color='transparent'
                onClick={themeToggle} >
                    {theme === 'light' ? <MoonFilled /> : <SundFilled />}
                </NavbarButton>
            </NavbarStyle>
        </NavbarNav>
    );
};

export default Navbar;
