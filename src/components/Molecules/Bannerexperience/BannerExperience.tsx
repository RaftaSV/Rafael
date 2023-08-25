import Image from 'components/Atoms/Images';
import {BannerProfileImageStyle, ContainerStyled, NameAndDescriptionStyled, NameStyled} from './style';
import Title from 'components/Atoms/Title';
import React from 'react';

interface BannerExperienceProps {
    imageUrl?: string | undefined;
    experience?: string;
    description?: string;
}
const BannerExperience: React.FC<BannerExperienceProps> = (
    {imageUrl= '', experience, description}
) => {
    return (
        <ContainerStyled>
            <BannerProfileImageStyle>
                <NameAndDescriptionStyled>
                    <NameStyled>
                        <Title
                            color="accent"
                            size={80}
                            marginLeft={20}>
                            {experience}
                        </Title>
                    </NameStyled>
                    <Title
                        color={'text'}
                        lineHeight={20}
                        align={'justify'}
                        marginLeft={20}
                        size={30}
                    >
                        {description}
                    </Title>
                </NameAndDescriptionStyled>
                <Image
                    imageUrl={imageUrl}
                    width={280} height={280} marginLeft={20}/>

            </BannerProfileImageStyle>
        </ContainerStyled>
    );
};

export default BannerExperience;
