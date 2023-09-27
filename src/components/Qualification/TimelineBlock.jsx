import { useState } from 'react';
import './TimelineBlock.css';

const TimelineBlock = ({ institution, title, period, description, index }) => {
    // const [hover, setHover] = useState(false)
    // onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}

    return (
        <div className='timeline__block'  style={index % 2 === 1 ? { flexDirection: 'row-reverse' } : {}}>
            <div className={'timeline__subblock ' + (index % 2 === 0 ? 'timeline__left' : 'timeline__right')} >
                {title}
                {institution}
                {period}
            </div>
            <div className="timeline">
                <span className='timeline__pin'>⦿</span>
                <span className='timeline__line'></span>
            </div>
            <div className={'timeline__subblock timeline__hover__effect ' + (index % 2 === 0 ? 'timeline__right' : 'timeline__left')} >
                <div className='timeline__description'><p>{description}</p></div>
            </div>
        </div>
    )
}

export default TimelineBlock