function Hero() {

  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-content__text">
              <h1>
                We make crypto
                <br /> clear and simple
              </h1>
            </div>
            <div className="hero-content__text_small">
              <h1>
              Buy, sell, and grow your crypto with CoinFlip, the platform dedicated to every trader at every level.
              </h1>
            </div>
            <button className="btn-main-big">Get started</button>
            {/* mobile btn */}
            <a className="mobile-btn-hero" href="#market">
              See Prices <i className="fa-solid fa-angle-down"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
