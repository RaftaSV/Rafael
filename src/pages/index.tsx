import Title from 'components/Atoms/Title';
import Layout from 'components/Template/Layout';
import BannerProfileImage from 'components/Molecules/BannerProfileImage';
import Container from '../components/Atoms/Conteiner';
const app = () => {
    return (
        <div>
            <Layout/>
            <BannerProfileImage/>
        </div>
    );
};
export default app;
