import TimelineBlock from "./TimelineBlock";
import "./Qualification.css";

const Qualification = () => {
  const qualifications = [
    {
      institution: "Full Stack Software Developer",
      title: "❂ Open to Work",
      period: "Present",
      description: (
        <p>
          I’m currently open to new full-stack software development
          opportunities after taking a short career break to care for my newborn
          and support my family.
        </p>
      ),
      stacks: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Ruby",
        "React",
        "Vue",
        "Next",
        "Ruby on Rails",
        "Node",
        "Express",
        "Git",
        "Github",
      ],
    },
    {
      institution: "Dealer Studio",
      title: "Head of Support | Software Developer",
      period: "March 2024 ▸ March 2025",
      description: (
        <p>
          Dealer Studio – Leading provider of SaaS/eCommerce solutions for the
          automotive industry, hosting 750+ websites across Australia and New
          Zealand.
          <br />→ Deployed 20+ OEM, used car, and dealer group websites by
          developing reusable and scalable frontend components.
        </p>
      ),
      stacks: [
        "TypeScript",
        "React",
        "Next",
        "Vercel",
        "SCSS",
        "Bootstrap",
        "GitHub",
        "Cloudinary",
      ],
    },
    {
      institution: "General Assembly",
      title: "Software Engineering Immersive",
      period: "Mar 2023 ▸ Jun 2023",
      description: (
        <p>
          A 12 weeks comprehensive software engineering program, focusing on
          hands-on experience with full stack software development and tools.
          <br />→ Employing tools within an Agile software development framework
          for the execution of multiple software engineering projects from
          initial concept to completion.
        </p>
      ),
      stacks: [
        "HTML",
        "CSS",
        "JavaScript",
        "Ruby",
        "React",
        "Vue",
        "Next",
        "Ruby on Rails",
        "Node",
        "Express",
        "Git",
        "Github",
        "VS Code",
        "Postman",
      ],
    },
    {
      institution: "Hi-Rise Access",
      title: "Design Engineer",
      period: "Jun 2019 ▸ Feb 2022",
      description: (
        <p>
          A consulting and engineering company, specialises in customised height
          safety, fall protection and suspended access solutions. Responsible
          for overseeing all aspects of product design for manufacturing, from
          concept to production.
        </p>
      ),
      stacks: ["Solidworks", "Bluebeam"],
    },
    {
      institution: "HAUSSTUFF",
      title: "E-commerce Entrepreneur",
      period: "October 2016 ▸ March 2023",
      description: (
        <p>
          B2C eCommerce boutique specializing in stylish home and garden
          product. <br />→ Managed inventory, optimized customer service
          processes, and implemented software solutions to enhance user
          experience and drive sales
        </p>
      ),
      stacks: ["HTML", "CSS", "Shopify"],
    },
    {
      institution: "University of Melbourne",
      title: "Master of Engineering (MEng)",
      period: "Jun 2016 ▸ Dec 2018",
      description: (
        <p>
          Mechanical Engineering
          <br />→ Engaged in advanced coursework, research projects, and
          hands-on experiences to gain practical insights into complex
          mechanical systems and innovations.
        </p>
      ),
      stacks: ["Python", "FEniCS"],
    },
    {
      institution: "University of Melbourne",
      title: "Bechelor of Science (BSc)",
      period: "Feb 2013 ▸ Jun 2016",
      description: (
        <p>
          Major in Mechanical System
          <br />→ Acquired in-depth knowledge of fundamental engineering
          principles, including thermodynamics, fluid mechanics, and mechanical
          design.
        </p>
      ),
      stacks: ["C#", "Python", "Matlab", "Solidworks", "Simulink"],
    },
  ];

  return (
    <section className="qualification section" id="qualification">
      <div className="container qualification__container">
        <div className="qualificatio__block">
          <h2>
            Qualification & Experience<span className="header__decor">•</span>
          </h2>
        </div>
        <div className="qualification__block qualification__timeline">
          {qualifications.map((qualification, index) => {
            return (
              <TimelineBlock
                institution={qualification.institution}
                title={qualification.title}
                period={qualification.period}
                description={qualification.description}
                stacks={qualification.stacks}
                index={Number(index)}
                key={index}
              />
            );
          })}
          <br />
          <h6 className="timeline__decor">✢ ✢ ✢ ✢ ✢</h6>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
