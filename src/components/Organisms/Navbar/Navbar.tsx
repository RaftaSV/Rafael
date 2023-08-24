// Importaciones de bibliotecas y componentes
import React, { useEffect, useState } from 'react';
import { useAppTheme } from 'context/appTheme';
import MoonFilled from 'components/Atoms/Icons/moon';
import SunFilled from 'components/Atoms/Icons/sun';
import Github from 'components/Atoms/Icons/github';
import LinkedIn from 'components/Atoms/Icons/linkedIn';
import BannerNav from '../../Molecules/BanerNav';

import { NavbarStyle, NavbarNav, NavbarButton, NavbarButtonContainer } from './style';

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

    // redirigir a https://github.com/RaftaSV
    const github = () => {
        window.location.href = 'https://github.com/RaftaSV';
    };
    // redirigir a linkedin

    const linkedIn = () => {
        window.location.href = 'https://www.linkedin.com/in/rafael-portillo-8a9707205/';
    };

    // Renderización del componente
    return (
        <NavbarNav>
            <NavbarStyle size="large" $isScrolling={isScrolling}>
                <BannerNav />
                <NavbarButtonContainer>
                    <NavbarButton color="transparent" onClick={github}>
                        <Github />
                    </NavbarButton>
                    <NavbarButton color="transparent" onClick={linkedIn}>
                        <LinkedIn />
                    </NavbarButton>
                    <NavbarButton color="transparent" onClick={themeToggle}>
                        {theme === 'light' ? <MoonFilled /> : <SunFilled />}
                    </NavbarButton>
                </NavbarButtonContainer>
            </NavbarStyle>
        </NavbarNav>
    );
};

export default Navbar;
