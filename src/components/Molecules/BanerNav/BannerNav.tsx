import Image from 'components/Atoms/Images';
import profile from './Images/profile.png';
import Title from 'components/Atoms/Title';

import {BannerNavStyled, NameStyled} from './style';

const BannerNav = () => {
    return (
        <BannerNavStyled>
            <Image imageUrl={profile} width={40} height={40}/>
            <Title color='primary'>
                Rafael
            </Title>
            <NameStyled>
                <Title color='accent'>
                Gonzalez
                </Title>
            </NameStyled>

        </BannerNavStyled>
    );


};

export default BannerNav;
