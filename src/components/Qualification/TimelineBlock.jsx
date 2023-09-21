import { useState } from 'react';
import './TimelineBlock.css';

const TimelineBlock = ({ institution, title, period, description, index }) => {
    const [hover, setHover] = useState(false)

    return (
        <div className='timeline__block' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={index % 2 === 1 ? { flexDirection: 'row-reverse' } : {}}>
            <div className={'timeline__subblock ' + (index % 2 === 0 ? 'timeline__left' : 'timeline__right')} >
                <h5>{institution}</h5>
                <h6>{title}</h6>
                <h6>{period}</h6>
            </div>
            <div className="timeline">
                <span className='timeline__pin'>⦿</span>
                <span className='timeline__line'></span>
            </div>
            <div className={'timeline__subblock ' + (index % 2 === 0 ? 'timeline__right' : 'timeline__left')} >
                {hover && <p className='timeline__description' >{description}</p>}
            </div>
        </div>
    )
}

export default TimelineBlock