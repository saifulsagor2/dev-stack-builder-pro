import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <div className="hero-text">
          <h1>
            Build Your Ideal
            <span>Development Stack</span>
          </h1>

          <p>
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack
            that fits your next project.
          </p>

          <div className="hero-buttons">
            <a href="#technologies" className="primary-button">
              Explore Technologies
            </a>

            <a href="#about" className="secondary-button">
              Learn More
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="stack-image">
            DEV
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;