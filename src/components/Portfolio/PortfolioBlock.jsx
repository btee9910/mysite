import './PortfolioBlock.css'

const PortfolioBlock = ({ index, projectName, projectDescription, thumbnail, url }) => {

    const ImageBlock = () => {
        return (
            <div className="portfolio__block__subblock portfolio__block__image">
                <a href={url} target="_blank"><img src={thumbnail} alt={'screenshot of ' + projectName + 'homepage'} className='project__thumbnail' /></a>
            </div>
        );
    };

    const DescriptionBlock = () => {
        // let customStyle = '';
        // index % 2 === 0 ? customStyle = 'text-align: left;': customStyle = 'text-align: right;';
        return (
            <div className="portfolio__block__subblock portfolio__block__description">
                <div className='project'>
                    <div className='project__name'>
                        <h5>{projectName}</h5>
                    </div>
                    <div className='project__description'>
                        <h6>{projectDescription}</h6>
                    </div>
                    <div className='project__button__wrapper'>
                        <a href={url} className='project__button' target="_blank">View site</a>
                    </div>
                </div>
            </div>
        );
    };

    let first_block = <ImageBlock />;
    let second_block = <DescriptionBlock />;

    if (index % 2 === 1) {
        first_block = <DescriptionBlock />;
        second_block = <ImageBlock />;
    }

    return (
        <div className='portfolio__block'>
            {first_block}
            {second_block}
        </div>
    )
}

export default PortfolioBlock;
