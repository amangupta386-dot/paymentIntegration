import woodlandVideo from '../assets/woodland-trees.mp4';
import "./herosection.css";


function HeroSection() {
  return (
    <section className="hero-section">
      <div className="video-container">
        {/* Background Video */}
        <video autoPlay muted loop className="background-video">
          <source src={woodlandVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="hero-overlay">
          <h1>Sustainable Solutions for a Greener Tomorrow</h1>
          <p>
            At Aumekaa, we provide 100% plastic-free, biodegradable, and compostable alternatives for both businesses
            and consumers—ensuring eco-friendly living without compromising quality.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
