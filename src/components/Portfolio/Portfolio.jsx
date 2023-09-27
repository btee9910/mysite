import './Portfolio.css'
import PortfolioBlock from './PortfolioBlock';

const Portfolio = () => {
    const projects = [{
        projectName: 'ToDo List',
        projectDescription: 'A simple yet fully functional and user experience considered project with React frontend, Express backend and MongoDB database.',
        thumbnail: './todolist.png',
        url: 'https://todolist-tee.vercel.app/',
        repo: 'https://github.com/btee9910/todolist'
    }, {
        projectName: 'Tic Tac Toe',
        projectDescription: 'A classic game built on frontend with HTML, CSS, JavaScript and JQuery. This was built by myself on the 3rd week of the Software Engineering Bootcamp at General Assembly.',
        thumbnail: './tictactoe.png',
        url: 'https://btee9910.github.io/TicTacToe/',
        repo: 'https://github.com/btee9910/TicTacToe'
    }, {
        projectName: 'HAUSSTUFF',
        projectDescription: 'A B2C eCommerce boutique specializing in stylish home and garden project, based in Melbourne, Victoria.',
        thumbnail: './hausstuff.png',
        url: 'https://hausstuff.com.au/',
        repo: ''
    }];

    return (
        <section className='portfolio section' id='portfolio'>
            <div className='container portfolio__container'>
                <h2>Featured Portfolio<span className='header__decor'>•</span></h2>

                {projects.map((project, index) => {
                    return <PortfolioBlock index={Number(index)} projectName={project.projectName} projectDescription={project.projectDescription} thumbnail={project.thumbnail} url={project.url} repo={project.repo} key={index} />
                })}

                <h5>✧ And more to come. . . ✧</h5>
            </div>
        </section>
    )
}

export default Portfolio