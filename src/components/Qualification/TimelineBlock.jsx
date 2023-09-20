import './TimelineBlock.css';

const TimelineBlock = ({ institution, title, period, description, index }) => {

    const DisplayBlock = () => {
        return (
            <>
                <h5>{institution}</h5>
                <h6>{title}</h6>
                <h6>{period}</h6>
            </>
        )
    }

    let firstBlock = <DisplayBlock />;
    let secondBlock = <></>;

    if (index % 2 === 1) {
        firstBlock = <></>;
        secondBlock = <DisplayBlock />;
    }


    return (
        <div className='timeline__block'>
            <div className="timeline__subblock timeline__left">
                {firstBlock}
            </div>
            <div className="timeline">
                |
            </div>
            <div className="timeline__subblock timeline__right">
                {secondBlock}
            </div>
        </div>
    )
}

export default TimelineBlock