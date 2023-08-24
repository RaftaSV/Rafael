import Image from 'components/Atoms/Images';
import {BannerProfileImageStyle, ContainerStyled, NameAndDescriptionStyled, NameStyled} from './style';
import  Profile from './Images/profile.png';
import Title from 'components/Atoms/Title';

const BannerProfileImage = () => {
    return (
        <ContainerStyled>

            <BannerProfileImageStyle>
                <Image imageUrl={Profile} width={300} height={300}/>
                <NameAndDescriptionStyled>
                    <NameStyled>
                        <Title color="primary"
                            size={80}
                            lineHeight={30}
                            marginLeft={20}>
                    Rafael
                        </Title>
                        <Title
                            color="accent"
                            size={80}
                            marginLeft={20}>
                    Gonzalez
                        </Title>
                    </NameStyled>
                    <Title
                        color={'text'}
                        lineHeight={20}
                        align={'justify'}
                        marginLeft={20}
                        size={30}
                    >
                        Bienvenido a mi portafolio, donde podrás conocer más sobre mí y mi trabajo como
                        estudiante de ingeniero en sistemas. Soy un apasionado de la tecnología
                        y el desarrollo de soluciones innovadoras para problemas reales. En este portafolio,
                        te mostraré algunos de los proyectos que he realizado, tanto académicos como personales,
                        donde he aplicado mis conocimientos y habilidades en el diseño y gestión de bases de datos,
                        así como en la programación web, tanto en el backend como en el frontend. He usado diferentes
                        lenguajes y herramientas, como MySQL, JavaScript, TypeScript, Java, C#, Node.js, React.js,
                        entre otros. Si tienes alguna pregunta o comentario, no dudes en contactarme.
                    </Title>
                </NameAndDescriptionStyled>

            </BannerProfileImageStyle>
        </ContainerStyled>
    );
};

export default BannerProfileImage;
