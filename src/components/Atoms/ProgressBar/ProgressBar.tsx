import React, {useEffect} from 'react';
import {ColorType} from 'styles/theme';
import { ProgressBarContainer, ProgressBarFill} from './style';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface ProgressBarProps {
    backgroundColor?: ColorType;
    width?: number;
    color?: ColorType

}

const ProgressBar : React.FC<ProgressBarProps> = (
    {
        backgroundColor = 'secondary',
        width = 100,
        color = 'primary'
    }) => {
    useEffect(() => {
        AOS.init({
            // Configuración global para ajustar el comportamiento de las animaciones
            duration: 800,        // Duración en milisegundos de la animación
            easing: 'linear', // Tipo de aceleración (ejemplos: 'ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear')
            once: false,           // Las animaciones solo ocurren una vez por elemento (por defecto es falso)
            mirror: true,        // Las animaciones se invierten en direcciones opuestas al hacer scroll hacia arriba (por defecto es falso)
            anchorPlacement: 'top-center', // Posición de anclaje para las animaciones (por defecto es 'top-bottom')
        });


    }, []);
    return (
        <ProgressBarContainer $backgroundColor={backgroundColor}>
            <ProgressBarFill $color={color} $width={width} data-aos="fade-right"/>
        </ProgressBarContainer>
    );

};

export default ProgressBar;
