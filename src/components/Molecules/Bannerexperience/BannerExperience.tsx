import Image from 'components/Atoms/Images';
import {BannerProfileImageStyle, ContainerStyled, NameAndDescriptionStyled, NameStyled} from './style';
import Title from 'components/Atoms/Title';
import React, {useEffect, useRef, useState} from 'react';

interface BannerExperienceProps {
    imageUrl?: string;
    experience?: string;
    description?: string;
}
const BannerExperience: React.FC<BannerExperienceProps> = (
    {imageUrl= '', experience, description}
) => {
    const containerRef = useRef<HTMLDivElement>(null);
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

        if (containerRef.current) {
            observer.observe(containerRef.current);
            containerRef.current.addEventListener('animationend', () => {
                containerRef.current?.classList.remove('animate');
            });
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
                containerRef.current.removeEventListener('animationend', () => {
                    containerRef.current?.classList.remove('animate');
                });
            }
        };
    }, [hasAnimated]);


    return (
        <ContainerStyled ref={containerRef}>
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
