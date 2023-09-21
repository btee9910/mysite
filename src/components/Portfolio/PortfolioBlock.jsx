import './PortfolioBlock.css'

const PortfolioBlock = ({ index, projectName, projectDescription, thumbnail, url }) => {

    return (
        <div className='portfolio__block' style={index % 2 === 1 ? { flexDirection: 'row-reverse' } : {}} >
            <div className="portfolio__block__subblock portfolio__block__image">
                <img src={thumbnail} alt={'screenshot of ' + projectName + 'homepage'} className='project__image' />
                <img src="./open.png" alt="Visit Page icon" className='site__access_icon' />
                <div className='project__hover__effect project__hover__effect__1'>
                </div>
                <div className='project__hover__effect project__hover__effect__2'>
                    <a href={url} target="_blank"> </a>
                </div>
            </div>
            <div className="portfolio__block__subblock portfolio__block__description" >
                {/* <div className='project'> */}
                    <div className='project__name'>
                        <h5>{projectName}</h5>
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
