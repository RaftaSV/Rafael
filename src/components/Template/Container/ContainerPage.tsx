import React from 'react';

import { Container,
    StyleWrapper
} from './style';
import Title from 'components/Atoms/Title';

interface ContainerProps {
    children: React.ReactNode;
}

const ContainerPage: React.FC<ContainerProps> = ({ children }) => {
    return (
        <Container>
            <StyleWrapper>
                <Title color="primary" size={80} marginLeft={20}>
                    Habilidades
                </Title>
                {children}
            </StyleWrapper>

        </Container>
    );
};

export default ContainerPage;
