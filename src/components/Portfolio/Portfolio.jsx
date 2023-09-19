import './Portfolio.css'
import PortfolioBlock from './PortfolioBlock';

const Portfolio = () => {
    const projects = [{
        projectName: 'ToDo List',
        projectDescription: 'A simple yet fully functional and user experience considered React frontend, Express backend and MongoDB project.',
        thumbnail: './todolist.png',
        url: 'https://todolist-tee.vercel.app/'
    }, {
        projectName: 'Tic Tac Toe',
        projectDescription: 'A classic game built on frontend with JavaScript + JQuery.',
        thumbnail: './tictactoe.png',
        url: 'https://btee9910.github.io/TicTacToe/'
    }, {
        projectName: 'HAUSSTUFF',
        projectDescription: 'A B2C eCommerce store based in Melbourne, Victoria.',
        thumbnail: './hausstuff.png',
        url: 'https://hausstuff.com.au/'
    }];

    return (
        <section className='portfolio section' id='portfolio'>
            <div className='container portfolio__container'>
                <h2>Featured Portfolio<span className='header__decor'>&#129;</span></h2>

                {projects.map((project, index) => {
                    return <PortfolioBlock index={Number(index)} projectName={project.projectName} projectDescription={project.projectDescription} thumbnail={project.thumbnail} url={project.url} key={index} />
                })}
            </div>
        </section>
    )
}

export default Portfolio