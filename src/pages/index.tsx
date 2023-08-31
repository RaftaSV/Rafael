import HTML from 'assets/html.png';
import coding from 'assets/coding.gif';
import Profile from 'assets/profile.png';
import coverImage from 'assets/coverImage.jpg';
import Layout from 'components/Template/Layout';
import navBarImage from 'assets/navBarImage.jpg';
import AbautMeBanner from 'components/Molecules/AboutMe';
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
        'Soy un desarrollador fullstack, estudiante de 5to año de ingenieria en sistemas con experiencia en el ' +
        'desarrollo de aplicaciones web y escritorio. Me apasiona el desarrollo de software ' +
        'y la tecnología en general. Me gusta aprender nuevas tecnologías y aplicarlas en mis ' +
        'proyectos. Me considero una persona responsable, creativo, con iniciativa y puntualidad,' +
        ' asumo con agrado los retos y metas que su organización me pudiera plantear; con buen manejo de ' +
        'relaciones interpersonales, facilidad para trabajar en equipo, en condiciones de alta presión, ' +
        'así como para resolver problemas eficientemente y lograr las metas trazadas por la empresa y' +
        ' mi grupo de trabajo.';
    const experience = 'Acerca de mi';
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
            width: 80,
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
            <AbautMeBanner imageUrl={coding} experience={experience} description={description} />
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
