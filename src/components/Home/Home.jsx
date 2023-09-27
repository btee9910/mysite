import './Home.css'

const Home = () => {
    return (
        <section className='home section' id='home'>
            <div className="container">
                <div className="home__subcontainer">
                    <div className='home__intro__wrapper'>
                        <h1>Brandon Tee</h1>
                        <h5>Full Stack Software Developer with a background as Mechanical Design Engineer</h5>
                        <h5>Passionate about badminton, photography, indoor plant and technology</h5>
                    </div>
                    <div className='home__button__wrapper'>
                        <a href="#portfolio" className='home__button btn'>View Projects</a>
                    </div>
                </div>
                <div className="home__subcontainer">
                    <div className="home__background">
                        <div className='home__img'></div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Home