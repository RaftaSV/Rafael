import HTML from 'assets/html.png';
import coding from 'assets/coding.gif';
import Profile from 'assets/profile.png';
import coverImage from 'assets/coverImage.jpg';
import Layout from 'components/Template/Layout';
import navBarImage from 'assets/navBarImage.jpg';
import AboutMeBanner from 'components/Molecules/AboutMe';
import HeaderPage from 'components/Molecules/HeaderPage';
import ProgressBarCard from 'components/Molecules/ProgressBarCard';
import JS from 'assets/JS.png';
import TS from 'assets/TS.png';
import  MYSQL from 'assets/MYSQL.png';
import NODE from 'assets/NODE.png';
import REACT from 'assets/REACT.png';
import JAVA from 'assets/JAVA.png';
import STYLED from 'assets/styled.png';
import CSS from 'assets/CSS.png';
import {Row, Col} from 'react-grid-system';
import Container from 'components/Template/Container';
const app = () => {
    const name = 'Rafael';
    const lastName = 'Gonzalez';
    const description =
        'Soy un ingeniero en sistemas en formación quinto año en curso y desarrollador fullstack jr con experiencia ' +
        'en aplicaciones web y escritorio. Me entusiasma el desarrollo de software y la innovación ' +
        'tecnológica. Aprendo y aplico nuevas tecnologías en mis proyectos. Tengo habilidades para ' +
        'trabajar en equipo, bajo presión y con responsabilidad. Busco asumir retos y metas que me ' +
        'permitan crecer profesionalmente y aportar valor a la organización.';
    const experience = 'Mi perfil en desarrollo';
    interface Skill {
        skill: string;
        width: number;
        image: string;
    }
    const skills: Skill[] = [
        {
            skill: 'HTML',
            width: 90,
            image: HTML
        },
        {
            skill: 'CSS',
            width: 70,
            image: CSS
        },
        {
            skill: 'JavaScript',
            width: 70,
            image: JS
        },
        {
            skill: 'TypeScript',
            width: 30,
            image: TS
        },
        {
            skill: 'MySQL',
            width: 80,
            image: MYSQL
        },
        {
            skill: 'Node',
            width: 70,
            image: NODE
        },
        {
            skill: 'React',
            width: 70,
            image: REACT
        },
        {
            skill: 'Styled Components',
            width: 80,
            image: STYLED
        },
        {
            skill: 'Java',
            width: 40,
            image: JAVA
        },
    ];

    return (
        <div>
            <Layout urlImage={navBarImage} name={name} lastName={lastName} />
            <HeaderPage
                imageUrl={Profile}
                name={name}
                lastName={lastName}
                description={description}
                coverImage={coverImage}
            />
            <AboutMeBanner imageUrl={coding} experience={experience} description={description} />
            <Container>
                <Row>
                    {skills.map((skill, index) => (
                        <Col
                            key={index}
                        >
                            <ProgressBarCard
                                skill={skill.skill}
                                width={skill.width}
                                image={skill.image}
                            />
                        </Col>
                    ))}
                </Row>

            </Container>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
};
export default app;
