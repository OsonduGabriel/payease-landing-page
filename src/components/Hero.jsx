import payIcon from '../assets/payment.svg'

function Hero(){
    return(
        <section id='hero'>
            <div className="hero-container">
                <div className="hero-content">
                    <h1>Send Money Instantly, Grow Your Business Faster.</h1>
                    <p>PayEase helps small business owners send and receive money instantly. No delays, no hidden charges — just fast, reliable transfers.</p>
                    <button className='cta'>Get Started for Free</button>
                    <p className='trust-line'>Join 5,000+ business owners. No credit card required.</p>
                </div>
                <div className="hero-img">
                    <img src= {payIcon} className='pay-icon' alt="Money transfer mockup" />
                </div>
            </div>
        </section>
    )
}
export default Hero