import React, {useEffect} from 'react';
import Title from 'components/Atoms/Title';
import Image from 'components/Atoms/Images';
import { BannerProfileImageStyle, ContainerStyled, NameAndDescriptionStyled, NameStyled } from './style';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface BannerExperienceProps {
  imageUrl?: string;
  experience?: string;
  description?: string;
}
const AboutMeBanner: React.FC<BannerExperienceProps> = ({ imageUrl = '', experience, description }) => {
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
        <ContainerStyled data-aos="zoom-in">
            <BannerProfileImageStyle  >
                <NameAndDescriptionStyled>
                    <NameStyled>
                        <Title color="primary" size={80} marginLeft={20}>
                            {experience}
                        </Title>
                    </NameStyled>
                    <Title color={'text'} lineHeight={20} align={'justify'} marginLeft={20} size={30}>
                        {description}
                    </Title>
                </NameAndDescriptionStyled>
                <Image imageUrl={imageUrl} width={260} height={260} marginLeft={0} />
            </BannerProfileImageStyle>
        </ContainerStyled>
    );
};

export default AboutMeBanner;
