import './PortfolioBlock.css'

const PortfolioBlock = ({ index, projectName, projectDescription, thumbnail, url, repo }) => {

    return (
        <div className='portfolio__block' style={index % 2 === 1 ? { flexDirection: 'row-reverse' } : {}} >
            <div className="portfolio__block__subblock portfolio__block__image">
                <img src={thumbnail} alt={'screenshot of ' + projectName + 'homepage'} className='project__image' />
                <div className='project__hover__effect project__hover__effect__1'>
                </div>
                <div className='project__hover__effect project__hover__effect__2'>
                </div>
                <a href={url} target="_blank"><img src="./open.png" alt="Visit Page icon" className='site__access__icon' /></a>
            </div>
            <div className="portfolio__block__subblock portfolio__block__description" >
                {/* <div className='project'> */}
                <div className='project__name'>
                    <h5>{projectName}</h5>
                    {repo && <a href="https://github.com/btee9910/TicTacToe" target='_blank'><img src="github.png" alt="github icon" /></a>
                    }
                </div>
                <div className='project__description'>
                    <h6>{projectDescription}</h6>
                </div>
                <div className='project__button__wrapper'>
                    <a href={url} className='project__button' target="_blank">View site</a>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default PortfolioBlock;
