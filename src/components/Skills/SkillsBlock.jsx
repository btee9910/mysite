import './SkillsBlock.css';

const SkillsBlock = ({category, skillsList}) => {
  return (
    <div className='skills__block'>
        <div className="skills__subblock skills__title">
            <h5>{category}</h5>
            <img src="./right-arrow.png" alt="Right arrow icon" className='skills__right__arrow'/>
        </div>
        <div className='skills__subblock skills__list'>
            {skillsList.map((skill, i) => {
                return <div className="skill__each" key={i}><span>{skill}</span></div>
            })}
        </div>

    </div>
  )
}

export default SkillsBlock