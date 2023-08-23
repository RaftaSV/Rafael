import { Container } from 'react-grid-system';

import Navbar from 'components/Organisms/Navbar';
import { StyleWrapper } from './style';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <StyleWrapper>
            <Navbar />
            <Container>{children}</Container>
        </StyleWrapper>
    );
};

export default Layout;

