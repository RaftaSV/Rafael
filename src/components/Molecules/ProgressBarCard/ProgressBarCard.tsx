import AOS from 'aos';
import 'aos/dist/aos.css';
import {ColorType} from 'styles/theme';
import React, {useEffect} from 'react';
import Title from 'components/Atoms/Title';
import {ImageStyle, ProgressBarContainer, ProgressBarSkill} from './style';
import ProgressBar from 'components/Atoms/ProgressBar';

interface ProgressBarCardProps {
    color?: ColorType;
    backgroundColor?: ColorType;
    width?: number;
    skill?: string;
    image?: string;
}


const ProgressBarCard: React.FC<ProgressBarCardProps> = (
    {   backgroundColor = 'info',
        width = 100,
        color = 'success',
        skill = '',
        image = ''
    }
) => {
    useEffect(() => {
        AOS.init({
            // Configuración global para ajustar el comportamiento de las animaciones
            duration: 1000,        // Duración en milisegundos de la animación
            easing: 'linear', // Tipo de aceleración (ejemplos: 'ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear')
            once: false,           // Las animaciones solo ocurren una vez por elemento (por defecto es falso)
            mirror: true,        // Las animaciones se invierten en direcciones opuestas al hacer scroll hacia arriba (por defecto es falso)
            anchorPlacement: 'top-center', // Posición de anclaje para las animaciones (por defecto es 'top-bottom')
        });


    }, []);
    return (
        <ProgressBarContainer>
            <ProgressBarSkill>
                <Title color="primary" size={30} lineHeight={30}>
                    {skill}
                </Title>
                <ProgressBar
                    width={width}
                    backgroundColor={backgroundColor}
                    color={color}
                />
            </ProgressBarSkill>
            <ImageStyle src={image}/>
        </ProgressBarContainer>
    );
};

export default ProgressBarCard;
