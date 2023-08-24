import Navbar from 'components/Organisms/Navbar';
import { StyleWrapper } from './style';

const Layout = () => {
    return (
        <StyleWrapper>
            <Navbar />
            <meta
                name="description"
                content="Bienvenido a mi portafolio"
            />
        </StyleWrapper>
    );
};

export default Layout;
