import './ContactBlock.css'


const ContactBlock = ({icon, content, alt, url}) => {
  return (
    <div className='contactblock'>
        <div className="contactblock__subblock contactblock__icon"><a href={url} target="_blank"><img src={icon} alt={alt} className='contactblock__icon__img'/></a></div>
        <div className="contactblock__subblock contactblock__content"><a href={url} target="_blank">{content}</a></div>
    </div>
  )
}

export default ContactBlock