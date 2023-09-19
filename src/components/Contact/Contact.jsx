import './Contact.css'
import ContactBlock from './ContactBlock'
import './Contact.css'


const Contact = () => {
    const basicInfos = [{
        icon: '/email.png',
        content: 'btee9910@gmail.com',
        alt: 'email icon',
        url: 'mailto:btee9910@gmail.com'
    }, {
        icon: '/mobile.png',
        content: '+614 3333 9910',
        alt: 'phone icon',
        url: "https://api.whatsapp.com/send?phone=61433339910&text=Hello, let's have a chat!"
    }, {
        icon: '/location.png',
        content: 'Melbourne, Victoria 3000',
        alt: 'Location icon',
        url: 'https://www.google.com/maps/place/Melbourne+VIC+3000/@-37.8113845,144.9528516,15z/data=!3m1!4b1!4m6!3m5!1s0x6ad642b8c21cb29b:0x1c045678462e3510!8m2!3d-37.8152065!4d144.963937!16s%2Fm%2F03bn332?entry=ttu'
    }];

    const sites = [{
        icon: '/linkedin.png',
        content: 'Linkedin',
        alt: 'Linkedin logo',
        url: 'https://www.linkedin.com/in/btee/'
    }, {
        icon: '/github.png',
        content: 'GitHub',
        alt: 'github logo',
        url: 'https://github.com/btee9910'
    }, {
        icon: '/www.png',
        content: 'btee9910.github.io/mysite/',
        alt: 'world wide web icon',
        url: 'https://btee9910.github.io/mysite/'
    }];

    return (
        <section className='contact section' id='contact'>
            <div className="container">
                <h2>Contact<span className='header__decor'>&#129;</span></h2>
                <div className="contact__body">
                    <div className="contact__content contact__info">
                        {basicInfos.map((info, i) => {
                            return <ContactBlock icon={info.icon} content={info.content} alt={info.alt} url={info.url} key={i} />
                        })}
                    </div>

                    <div className="contact__content">
                        <span className='contact__comment'>Looking forward to connect and explore new opportunities. <br />Feel free to get in touch with me.</span>
                    </div>

                    <div className="contact__content contact__sites">
                        {sites.map((site, i) => {
                            return <ContactBlock icon={site.icon} content={site.content} alt={site.alt} url={site.url} key={i} />
                        })}
                    </div>
                </div>
                <footer className='footer'>
                    <span className='footer__content'>© Copyright 2023. Proudly made by <a href='https://www.linkedin.com/in/btee/' target="_blank">Brandon Tee</a></span>
                </footer>
            </div>
        </section>
    )
}

export default Contact