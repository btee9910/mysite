import TimelineBlock from './TimelineBlock';
import './Qualification.css';

const Qualification = () => {
    const qualifications = [{
        institution: 'General Assembly',
        title: 'Software Engineering Intensive Course',
        period: 'Mar 2023 ▻ Jun 2023',
        description: 'A 12-weeks full time coding bootcamp, one of the most known course that focusing on career transformation in tech. During the course I have learnt to efficient communication and collaboration with full stack web development teams to carry out complex projects from initial concept to completion. Cultivated expertise in version control using Git and GitHub, employing these tools within an Agile software development framework for the execution of multiple software engineering projects.'
    }, {
        institution: 'HAUSSTUFF',
        title: 'E-commerce Entrepreneur',
        period: 'May 2022 ▻ Present',
        description: 'As a design engineer with a strong passion for entrepreneurship, I took the initiative to establish and manage my own e-commerce store after departing from my position as a design engineer. Over the course of my tenure as an E-commerce Entrepreneur, I gained invaluable experience in various facets of running online retail business. <br /> Product Management: I sourced and managed products, ensuring a steady supply and competitive prices.<br /> Website Management: I maintained an easy-to-use website, improved search engine visibility, and handled online advertising. <br /> Customer Satisfaction: I prioritized excellent customer service, addressing inquiries promptly and resolving issues. <br /> Financial Management: I managed budgets, controlled expenses, and consistently grew revenue and profits. <br /> Data Analysis: I used data analysis to make informed decisions about products and marketing strategies.'
    }, {
        institution: 'Hi-Rise Access',
        title: 'Design Engineer',
        period: 'Jun 2019 ▻ Feb 2022',
        description: 'A consulting and engineering company, specialises in the design, fabrication and installation of customised height safety, fall protection and suspended access solutions. As part of my role, I am responsible for overseeing all aspects of product design for manufacturing, which includes consultancy, cost estimating, quoting, designing, 3D modelling, 2D drawing, prototyping, testing, report writing, certification, material sourcing, manufacturing and installation process.'
    }, {
        institution: 'University of Melbourne',
        title: 'Master of Engineering (MEng), Mechanical Engineering',
        period: ' Jun 2016 ▻ Dec 2018',
        description: 'nothing yet'
    }, {
        institution: 'University of Melbourne',
        title: 'Bechelor of Science (BSc), Mechanical System',
        period: ' Feb 2013 ▻ Jun 2016',
        description: 'nothing yet'
    }];


    return (
        <section className='qualification section' id='qualification'>
            <div className="container">
                <div className="qualificatio__block">
                    <h2>Qualification & Experience<span className='header__decor'>&#129;</span></h2>
                    <h5>
                        Transitioning from a career as a Mechanical Design Engineer to becoming a Full-Stack Software Developer, I've embarked on a transformative journey, bridging the gap between the physical and digital worlds.
                    </h5>
                </div>
                <div className="qualification__block qualification__timeline">
                    {qualifications.map((qualification, index) => {
                        return <TimelineBlock institution={qualification.institution} title={qualification.title} period={qualification.period} description={qualification.description} index key={index} />
                    })};
                </div>
            </div>
        </section>
    )
}

export default Qualification