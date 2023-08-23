import Title from 'components/Atoms/Title';
import Layout from 'components/Organisms/Layout';
const app = () => {
    return (
        <div>
            <Layout>
                <Title color='primary' size={600}> Hello World </Title>
                <h1> Here i will create my portfolio with react and typescript 😎 </h1>
            </Layout>
        </div>
    );
};
export default app;
