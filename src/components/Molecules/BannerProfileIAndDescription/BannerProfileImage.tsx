import Image from 'components/Atoms/Images';
import {BannerProfileImageStyle, ContainerStyled, NameAndDescriptionStyled, NameStyled} from './style';
import Title from 'components/Atoms/Title';
import React, {useEffect, useRef, useState} from 'react';

interface BannerProfileImageProps {
    imageUrl?: string | undefined;
    name?: string;
    lastName?: string;
    description?: string;
}
const BannerProfileImage: React.FC<BannerProfileImageProps> = (
    {imageUrl= '', name, lastName, description}
) => {
    const containerReference = useRef<HTMLDivElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                entry.target.classList.add('animate');
                setHasAnimated(true);
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            threshold: 0.5
        });

        if (containerReference.current) {
            observer.observe(containerReference.current);
            containerReference.current.addEventListener('animationend', () => {
                containerReference.current?.classList.remove('animate');
            });
        }

        return () => {
            if (containerReference.current) {
                observer.unobserve(containerReference.current);
                containerReference.current.removeEventListener('animationend', () => {
                    containerReference.current?.classList.remove('animate');
                });
            }
        };
    }, [hasAnimated]);


    return (
        <ContainerStyled ref={containerReference}>
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
