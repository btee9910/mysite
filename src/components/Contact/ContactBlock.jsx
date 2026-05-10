import PropTypes from "prop-types";
import './ContactBlock.css'


const ContactBlock = ({icon, content, alt, url}) => {
  return (
    <div className='contactblock'>
        <div className="contactblock__subblock contactblock__icon"><a href={url} target="_blank" rel="noreferrer"><img src={icon} alt={alt} className='contactblock__icon__img'/></a></div>
        <div className="contactblock__subblock contactblock__content"><a href={url} target="_blank" rel="noreferrer">{content}</a></div>
    </div>
  )
}

ContactBlock.propTypes = {
  icon: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ContactBlock
