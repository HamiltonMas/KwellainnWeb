// Download a resort hero image and save as src/assets/images/hero-bg.jpg
import heroImage from '../images/hero-bg.jpg';

const Hero = () => {
  return (
    <section id="home" style={styles.heroSection}>
      <div style={styles.backgroundOverlay}>
        <img 
          src={heroImage} 
          alt="Kwela Inn Resort" 
          style={styles.backgroundImage}
        />
        <div style={styles.overlay}></div>
      </div>
      
      <div className="container" style={styles.heroContent}>
        <h1 style={styles.title}>Welcome to Kwela Inn</h1>
        <p style={styles.subtitle}>
          Your premier destination for luxury, relaxation, and unforgettable experiences.
        </p>
        <div style={styles.buttonGroup}>
          <a href="#rooms" className="btn" style={styles.primaryBtn}>
            View Rooms
          </a>
          <a href="#contact" className="btn" style={styles.secondaryBtn}>
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

const styles = {
  heroSection: {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    overflow: 'hidden',
  },
  backgroundOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  heroContent: {
    zIndex: 2,
    maxWidth: '800px',
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    '@media (max-width: 768px)': {
      fontSize: '2.5rem',
    },
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '40px',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
    '@media (max-width: 768px)': {
      fontSize: '1.2rem',
    },
  },
  buttonGroup: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  primaryBtn: {
    backgroundColor: '#0d9488',
    border: '2px solid #0d9488',
  },
  secondaryBtn: {
    backgroundColor: 'transparent',
    border: '2px solid white',
  },
};

export default Hero;