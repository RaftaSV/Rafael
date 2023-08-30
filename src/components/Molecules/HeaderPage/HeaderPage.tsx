import React, {useEffect} from 'react';
import Image from 'components/Atoms/Images';
import {
    BannerProfileImageContainerStyled,
    BannerProfileImageStyle,
    ContainerStyled,
    CoverImageStyled,
    ImageStyled,
    NameStyled,
} from './style';
import Title from 'components/Atoms/Title';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface BannerProfileImageProps {
  imageUrl?: string | undefined;
  name?: string;
  lastName?: string;
  description?: string;
  coverImage?: string;
}
const HeaderPage: React.FC<BannerProfileImageProps> = ({
    imageUrl = '',
    coverImage = '',
    name,
    lastName,
    description,
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
        <ContainerStyled data-aos="fade-down">
            <BannerProfileImageStyle>
                <BannerProfileImageContainerStyled>
                    <CoverImageStyled src={coverImage} />
                    <ImageStyled>
                        <Image imageUrl={imageUrl} width={200} height={200} marginLeft={20} />
                    </ImageStyled>
                    <NameStyled>
                        <Title color="primary" size={80} lineHeight={30} marginLeft={20}>
                            {name}
                        </Title>
                        <Title color="accent" size={80} marginLeft={20}>
                            {lastName}
                        </Title>
                    </NameStyled>
                </BannerProfileImageContainerStyled>
            </BannerProfileImageStyle>
        </ContainerStyled>
    );
};

export default HeaderPage;
