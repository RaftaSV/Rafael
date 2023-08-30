import React from 'react';

import { Container,
    StyleWrapper
} from './style';

interface ContainerProps {
    children: React.ReactNode;
}

const ContainerPage: React.FC<ContainerProps> = ({ children }) => {
    return <Container>
        <StyleWrapper>
            {children}
        </StyleWrapper>

    </Container>;
};

export default ContainerPage;
