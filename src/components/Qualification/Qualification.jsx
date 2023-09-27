import TimelineBlock from './TimelineBlock';
import './Qualification.css';

const Qualification = () => {
    const qualifications = [{
        institution: <h6>Full Stack Software Developer</h6>,
        title: <h5>❂ Open to Work</h5>,
        period: <h6>Present</h6>,
        description: <p>I am excited to kickstart my career change and actively seeking a full-stack software developer position. <br /> Having recently completed a rigorous coding bootcamp, I am eager to contribute my newfound expertise to innovative projects and continue to explore and learn in the ever-evolving world of software development.</p>
    }, {
        institution: <h6>General Assembly</h6>,
        title: <h5>Software Engineering Immersive</h5>,
        period: <h6>Mar 2023 ▸ Jun 2023</h6>,
        description: <p>A 12 weeks comprehensive software engineering program, focusing on hands-on experience with full stack software development and tools.
            <br />
            → Main programming language: <span className='programming__languege'>HTML</span>, <span className='programming__languege'>CSS</span>, <span className='programming__languege'>JavaScript</span> and <span className='programming__languege'>Ruby</span>.
            <br />
            → Frameworks include <span className='programming__languege'>React</span>, <span className='programming__languege'>Vue</span>, <span className='programming__languege'>Next</span>, <span className='programming__languege'>Ruby on Rails</span>, <span className='programming__languege'>Node</span>, <span className='programming__languege'>Express</span> and etc.
            <br />
            → Development tools include <span className='programming__languege'>Git</span>, <span className='programming__languege'>Github</span>, <span className='programming__languege'>VS code</span>, <span className='programming__languege'>Postman</span> and etc.
            <br />
            → Developed a strong command of Git and GitHub for version control while collaborating effectively within a team environment. 
            <br />
            → Employing these tools within an Agile software development framework for the execution of multiple software engineering projects from initial concept to completion.</p>
    }, {
        institution: <h6>HAUSSTUFF</h6>,
        title: <h5>E-commerce Entrepreneur</h5>,
        period: <h6>May 2022 ▸ Present</h6>,
        description: <p>As a Design engineer with a strong passion for entrepreneurship, I took the initiative to establish and manage my own e-commerce store.
            <br />
            → Improve website UI design with <span className='programming__languege'>CSS</span> customisation that enhance user experience and indirectly improve SEO.
            <br />
            → Product Management: Sourced and managed products, ensuring a steady supply and competitive prices.
            <br />
            → Website Management: Maintained an easy-to-use website, improved search engine visibility, and handled online advertising.
            <br />
            → Customer Satisfaction: Prioritized excellent customer service, addressing inquiries promptly and resolving issues.
            <br />
            → Financial Management: Managed budgets, controlled expenses, and consistently grew revenue and profits.
            <br />
            → Data Analysis: Used data analysis to make informed decisions about products and marketing strategies.</p>
    }, {
        institution: <h6>Hi-Rise Access</h6>,
        title: <h5>Design Engineer</h5>,
        period: <h6>Jun 2019 ▸ Feb 2022</h6>,
        description: <p>A consulting and engineering company, specialises in customised height safety, fall protection and suspended access solutions.
            <br />
            → Responsible for overseeing all aspects of product design for manufacturing, from concept to production.
            <br />
            → Developed my skills further in problem-solving, project management, continuous learning and product design.</p>
    }, {
        institution: <h6>University of Melbourne</h6>,
        title: <h5>Master of Engineering (MEng) <br />  Mechanical Engineering</h5>,
        period: <h6>Jun 2016 ▸ Dec 2018</h6>,
        description: <p>→ Eager to engage in advanced coursework, research projects, and hands-on experiences to gain practical insights into complex mechanical systems and innovations.
            <br />
            → Completed a capstone project - Fluid mechanics in FEniCS (<span className='programming__languege'>Python</span>), solving the incompressible Navier-Stokes equation for flow through cylinder and airfoil, applying my existing knowledge in Python to solve real-world problems </p>
    }, {
        institution: <h6>University of Melbourne</h6>,
        title: <h5>Bechelor of Science (BSc) <br /> Mechanical System</h5>,
        period: <h6>Feb 2013 ▸ Jun 2016</h6>,
        description: <p>→ Acquired in-depth knowledge of fundamental engineering principles, including thermodynamics, fluid mechanics, and mechanical design.
            <br />
            → Proficient in using industry-standard software and tools, such as Matlab, Solidworks, Simulink and etc.
            <br />
            Took courses in:
            <br />
            - Engineering Computation which included extensive learning in programming using the <span className='programming__languege'>C language</span> to solve complex engineering problem;
            <br />
            - Foundation of Computing which expands my coding knowledge further in <span className='programming__languege'>Python</span>.</p>
    }];


    return (
        <section className='qualification section' id='qualification'>
            <div className="container qualification__container">
                <div className="qualificatio__block">
                    <h2>Qualification & Experience<span className='header__decor'>•</span></h2>
                </div>
                <div className="qualification__block qualification__timeline">
                    {qualifications.map((qualification, index) => {
                        return <TimelineBlock institution={qualification.institution} title={qualification.title} period={qualification.period} description={qualification.description} index={Number(index)} key={index} />
                    })};
                    <h6 className='timeline__decor'>✢ ✢ ✢ ✢ ✢</h6>
                </div>
            </div>
        </section>
    )
}

export default Qualification