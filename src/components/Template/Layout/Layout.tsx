import Navbar from 'components/Organisms/Navbar';
import { StyleWrapper } from './style';
import React from 'react';

interface LayoutProps {
    urlImage?: string;
    name?: string;
    lastName?: string;
}
const Layout : React.FC<LayoutProps> = (
    {urlImage = '',
        name,
        lastName}
) => {
    return (
        <StyleWrapper>
            <Navbar imageUrl={urlImage}
                name={name}
                lastName={lastName}
            />
        </StyleWrapper>
    );
};

export default Layout;
