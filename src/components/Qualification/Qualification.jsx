import TimelineBlock from './TimelineBlock';
import './Qualification.css';

const Qualification = () => {
    const qualifications = [{
        institution: '❂ Open to Work',
        title: <h6>Full Stack Software Developer</h6>,
        period: <h6>Present</h6>,
        description: <p>I am excited to kickstart my career change and actively seeking a full-stack software developer position. Having recently completed a rigorous coding bootcamp, I am eager to contribute my newfound expertise to innovative projects and continue to explore and learn in the ever-evolving world of software development.</p>
    }, {
        institution: 'General Assembly',
        title: <h6>Software Engineering Intensive Course</h6>,
        period: <h6>Mar 2023 ▸ Jun 2023</h6>,
        description: <p>A 12-weeks full time coding bootcamp, one of the most known course that focusing on career transformation in tech. During the course I have learnt to efficient communication and collaboration with full stack web development teams to carry out complex projects from initial concept to completion. Cultivated expertise in version control using Git and GitHub, employing these tools within an Agile software development framework for the execution of multiple software engineering projects.</p>
    }, {
        institution: 'HAUSSTUFF',
        title: <h6>E-commerce Entrepreneur</h6>,
        period: <h6>May 2022 ▸ Present</h6>,
        description: <p>As a design engineer with a strong passion for entrepreneurship, I took the initiative to establish and manage my own e-commerce store after departing from my position as a design engineer. Over the course of my tenure as an E-commerce Entrepreneur, I gained invaluable experience in various facets of running online retail business. <br /> Product Management: I sourced and managed products, ensuring a steady supply and competitive prices.<br /> Website Management: I maintained an easy-to-use website, improved search engine visibility, and handled online advertising. <br /> Customer Satisfaction: I prioritized excellent customer service, addressing inquiries promptly and resolving issues. <br /> Financial Management: I managed budgets, controlled expenses, and consistently grew revenue and profits. <br /> Data Analysis: I used data analysis to make informed decisions about products and marketing strategies.</p>
    }, {
        institution: 'Hi-Rise Access',
        title: <h6>Design Engineer</h6>,
        period: <h6>Jun 2019 ▸ Feb 2022</h6>,
        description: <p>A consulting and engineering company, specialises in customised height safety, fall protection and suspended access solutions. As part of my role, I am responsible for overseeing all aspects of product design for manufacturing, which includes consultancy, cost estimating, quoting, designing, 3D modelling, 2D drawing, prototyping, testing, report writing, certification, material sourcing, manufacturing and installation process.</p>
    }, {
        institution: 'University of Melbourne',
        title: <h6>Master of Engineering (MEng) <br/>  Mechanical Engineering</h6>,
        period: <h6>Jun 2016 ▸ Dec 2018</h6>,
        description: <p>nothing yet</p>
    }, {
        institution: 'University of Melbourne',
        title: <h6>Bechelor of Science (BSc) <br/> Mechanical System</h6>,
        period: <h6>Feb 2013 ▸ Jun 2016</h6>,
        description: <p>nothing yet</p>
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