import { useState, useRef } from 'react';
import './TimelineBlock.css';

const TimelineBlock = ({ institution, title, period, description, index }) => {
    const [hover, setHover] = useState(false)
    const descriptionRef = useRef()

    const DisplayBlock = () => {
        return (
            <>
                <h5>{institution}</h5>
                <h6>{title}</h6>
                <h6>{period}</h6>
            </>
        )
    }

    const DescriptionBlock = () => {
        return (
            <>
                {hover && <p className='timeline__description' >{description}</p>}
            </>
        )
    }

    let firstBlock = <DisplayBlock />;
    let secondBlock = <DescriptionBlock />;

    if (index % 2 === 1) {
        firstBlock = <DescriptionBlock />;
        secondBlock = <DisplayBlock />;
    }

    return (
        <div className='timeline__block' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className="timeline__subblock timeline__left" >
                {firstBlock}
            </div>
            <div className="timeline">
                <span className='timeline__pin'>⦿</span>
                <span className='timeline__line'></span>
            </div>
            <div className="timeline__subblock timeline__right" >
                {secondBlock}
            </div>
        </div>
    )
}

export default TimelineBlock