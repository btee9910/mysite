import SkillsBlock from './SkillsBlock';
import './Skills.css'


const Skills = () => {
    const skillsCategories = [{
        category: 'Frontend Development',
        skillsList: ['HTML', 'CSS', 'Javascript', 'vite', 'React.js', 'Vue.js', 'jQuery', 'Next.js', 'Underscore.js']
    }, {
        category: 'Backend Development',
        skillsList: ['Node.js', 'Express.js', 'JSON', 'REST APIs', 'Ruby', 'Ruby on Rails', 'Python', 'C#', 'MongoDB', 'PostgreSQL', 'Sqlite3', 'JWT']
    }, {
        category: 'Development Tools',
        skillsList: ['Git', 'GitHub', 'Google Chrome', 'Firefox', 'Postman', 'Visual Studio Code', 'Slack', 'Xcode', 'Stack Overflow', 'Vercel', 'Figma']
    }, {
        category: 'Mechanical Engineering',
        skillsList: ['Solidworks', 'Rhinoceros 3D', 'AutoCAD', 'Bluebeam Revu', '3D Computer Aided Design (CAD)', 'Project Menagement', 'Engineering Drawings', 'Engineering Design']
    }];

    return (
        <section className='skills section' id='skills'>
            <div className='container'>
                <h2>Skills<span className='header__decor'>•</span></h2>
                <div className='skills__body'>
                    {skillsCategories.map((category, i) => {
                        return (
                            <div className='skills__category' key={i}>
                                <SkillsBlock category={category.category} skillsList={category.skillsList} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Skills