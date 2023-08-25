import Layout from 'components/Template/Layout';
import BannerProfileImage from 'components/Molecules/BannerProfileIAndDescription';
import Profile from 'assets/profile.png';
import coding from 'assets/coding.gif';
import BannerExperience from 'components/Molecules/Bannerexperience';
const app = () => {
    const name = 'Rafael';
    const lastName = 'Gonzalez';
    const description = 'Soy un desarrollador de software con experiencia en el ' +
        'desarrollo de aplicaciones web y escritorio. Me apasiona el desarrollo de software ' +
        'y la tecnología en general. Me gusta aprender nuevas tecnologías y aplicarlas en mis ' +
        'proyectos. Me considero una persona responsable, creativo, con iniciativa y puntualidad,' +
        ' asumo con agrado los retos y metas que su organización me pudiera plantear; con buen manejo de ' +
        'relaciones interpersonales, facilidad para trabajar en equipo, en condiciones de alta presión, ' +
        'así como para resolver problemas eficientemente y lograr las metas trazadas por la empresa y' +
        ' mi grupo de trabajo.';
    const experience = 'Experiencia';
    const  descriptionExperience = 'Estudiante de quinto año en Ingeniería en Sistemas Computacionales,' +
        ' con experiencia en proyectos de desarrollo de software, tanto en el ámbito web como en aplicaciones de escritorio. ' +
        'He contribuido en proyectos académicos abarcando diversas materias, ' +
        'además de realizar proyectos personales que han fortalecido mis habilidades creativas y resolutivas.' +
        ' Durante mi servicio social, lideré la creación de un software integral para el restaurante \'El Rinconcito Mexicano\', ' +
        'incluyendo gestión de menú, órdenes, gastos y facturación. Busco constantemente expandir mis habilidades y enfrentar nuevos desafíos en el desarrollo de soluciones tecnológicas.';

    return (
        <div>
            <Layout urlImage={Profile}
                name={name}
                lastName={lastName}
            />
            <BannerProfileImage
                imageUrl={Profile}
                name={name}
                lastName={lastName}
                description={description}
            />
            <BannerExperience
                imageUrl={coding}
                experience={experience}
                description={descriptionExperience}
            />
        </div>
    );
};
export default app;
