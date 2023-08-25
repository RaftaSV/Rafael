import React from 'react';
import Image from 'components/Atoms/Images';
import Title from 'components/Atoms/Title';
import { BannerNavStyled, NameStyled } from './style';


interface BannerNavProps {
    imageUrl?: string | undefined;
    name?: string;
    lastName?: string;

}
const BannerNav: React.FC<BannerNavProps> = (
    {imageUrl= '', name, lastName
    }
) => {

    return (
        <BannerNavStyled>
            <Image imageUrl={imageUrl} width={40} height={40} />
            <Title color="primary"
                marginLeft={10}
            >{name}</Title>
            <NameStyled>
                <Title color="accent">{lastName}</Title>
            </NameStyled>
        </BannerNavStyled>
    );
};

export default BannerNav;
