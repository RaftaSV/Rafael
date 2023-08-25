import Image from 'components/Atoms/Images';
import {BannerProfileImageStyle, ContainerStyled, NameAndDescriptionStyled, NameStyled} from './style';
import Title from 'components/Atoms/Title';
import React from 'react';

interface BannerProfileImageProps {
    imageUrl?: string | undefined;
    name?: string;
    lastName?: string;
    description?: string;
}
const BannerProfileImage: React.FC<BannerProfileImageProps> = (
    {imageUrl= '', name, lastName, description}
) => {
    return (
        <ContainerStyled>
            <BannerProfileImageStyle>
                <Image
                    imageUrl={imageUrl}
                    width={280} height={280} marginLeft={20}/>
                <NameAndDescriptionStyled>
                    <NameStyled>
                        <Title color="primary"
                            size={80}
                            lineHeight={30}
                            marginLeft={20}>
                            {name}
                        </Title>
                        <Title
                            color="accent"
                            size={80}
                            marginLeft={20}>
                            {lastName}
                        </Title>
                    </NameStyled>
                    <Title
                        color={'text'}
                        lineHeight={20}
                        align={'justify'}
                        marginLeft={10}
                        size={30}
                    >
                        {description}
                    </Title>
                </NameAndDescriptionStyled>

            </BannerProfileImageStyle>
        </ContainerStyled>
    );
};

export default BannerProfileImage;
