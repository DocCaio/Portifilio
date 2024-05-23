import './Hero.css';

const Hero = () => {
    return (
       <section className='hero-container'>
        <div className='hero-content'>
            <h2>escrever</h2>
            <p>elogios</p>

        </div>

        <div className='hero-img'>
           <img src='./assets/programador.jpg' alt='programming guy' />

        </div>

       </section>

    )
}

export default Hero;