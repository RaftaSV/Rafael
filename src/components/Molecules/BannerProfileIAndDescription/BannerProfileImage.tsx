import Image from 'components/Atoms/Images';
import {BannerProfileImageStyle, ContainerStyled, NameAndDescriptionStyled, NameStyled} from './style';
import Title from 'components/Atoms/Title';
import React, {useEffect, useRef} from 'react';

interface BannerProfileImageProps {
    imageUrl?: string | undefined;
    name?: string;
    lastName?: string;
    description?: string;
}
const BannerProfileImage: React.FC<BannerProfileImageProps> = (
    {imageUrl= '', name, lastName, description}
) => {
    const containerRef = useRef<HTMLDivElement>(null);


    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    };


    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            threshold: 0.5
        });

        if (containerRef.current) {
            observer.observe(containerRef.current);
            containerRef.current.addEventListener('animationend', () => {
                // @ts-ignore
                containerRef.current.classList.remove('animate');
            });
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
                containerRef.current.removeEventListener('animationend', () => {
                    // @ts-ignore
                    containerRef.current.classList.remove('animate');
                });
            }
        };
    }, []);


    return (
        <BannerProfileImageStyle ref={containerRef}>
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
    );
};

export default BannerProfileImage;
