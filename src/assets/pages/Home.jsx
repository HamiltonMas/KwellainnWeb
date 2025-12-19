import room1 from '../pictures/room-inside-2.jpeg';
import room2 from '../pictures/room-outside.jpeg';
import gallery1 from '../pictures/room-outside.jpeg';
import gallery2 from '../pictures/pool-2.jpeg';
import gallery3 from '../pictures/room-kitchen.jpeg';
import gallery4 from '../pictures/kids-pool.jpeg';
import heroVideo from '../videos/introduction-video.mp4';
import { Link } from 'react-router-dom';

const Home = () => {
  // Featured rooms for homepage preview
  const featuredRooms = [
    {
      id: 1,
      name: 'Deluxe Suite',
      description: 'Spacious suite with king bed, balcony, and luxury bathroom.',
      price: 'From ZAR 1,800/night',
      image: room1,
    },
    {
      id: 2,
      name: 'Executive Room',
      description: 'Comfortable room with garden view and modern amenities.',
      price: 'From ZAR 1,200/night',
      image: room2, // You can use different images
    },
  ];

  // Featured gallery items
  const featuredGallery = [
    { id: 1, src: gallery1, alt: 'Resort Pool', category: 'Facilities' },
    { id: 2, src: gallery2, alt: 'Luxury Room', category: 'Rooms' },
    { id: 3, src: gallery3, alt: 'Dining Area', category: 'Dining' },
    { id: 4, src: gallery4, alt: 'Spa Center', category: 'Wellness' },
  ];

  // Key features
  const keyFeatures = [
    { title: 'Luxury Accommodation', desc: '50+ elegantly designed rooms and suites' },
    { title: 'Event Hosting', desc: 'Perfect venues for weddings & conferences' },
    { title: 'Day Visits', desc: 'Enjoy our facilities for a daily getaway' },
    { title: 'Prime Location', desc: 'Beautiful surroundings with easy access' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.backgroundOverlay}>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            style={styles.backgroundVideo}
          >
          <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div style={styles.overlay}></div>
        </div>
        
        <div className="container" style={styles.heroContent}>
          <h1 style={styles.title}>Welcome to Kwela Inn</h1>
          <p style={styles.subtitle}>
            Your premier destination for luxury, relaxation, and unforgettable experiences in South Africa.
          </p>
          <div style={styles.buttonGroup}>
            <Link to="/rooms" className="btn" style={styles.primaryBtn}>
              View Rooms
            </Link>
            <Link to="/contact" className="btn" style={styles.secondaryBtn}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section style={styles.section}>
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Kwela Inn?</h2>
            <p>
              Experience unparalleled hospitality and comfort at our award-winning resort.
            </p>
          </div>
          
          <div style={styles.featuresGrid}>
            {keyFeatures.map((feature, index) => (
              <div key={index} style={styles.featureCard}>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureDesc}>{feature.desc}</p>
              </div>
            ))}
          </div>
          
          <div style={styles.centerButton}>
            <Link to="/about" className="btn" style={styles.seeMoreBtn}>
              Learn More About Us →
            </Link>
          </div>
        </div>
      </section>

      {/* Rooms Preview Section */}
      <section style={{...styles.section, backgroundColor: '#f8fafc'}}>
        <div className="container">
          <div className="section-title">
            <h2>Featured Accommodations</h2>
            <p>
              Discover our most popular rooms and suites designed for your comfort.
            </p>
          </div>
          
          <div style={styles.roomsGrid}>
            {featuredRooms.map((room) => (
              <div key={room.id} style={styles.roomCard}>
                <div style={styles.imageContainer}>
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    style={styles.roomImage}
                  />
                </div>
                <div style={styles.roomContent}>
                  <h3 style={styles.roomName}>{room.name}</h3>
                  <p style={styles.roomDesc}>{room.description}</p>
                  <div style={styles.priceContainer}>
                    <p style={styles.price}>{room.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div style={styles.centerButton}>
            <Link to="/rooms" className="btn" style={styles.seeMoreBtn}>
              View All Rooms & Suites →
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section style={styles.section}>
        <div className="container">
          <div className="section-title">
            <h2>Glimpse of Our Resort</h2>
            <p>Take a visual tour of our beautiful facilities and surroundings.</p>
          </div>
          
          <div style={styles.galleryGrid}>
            {featuredGallery.map((image) => (
              <div key={image.id} style={styles.galleryItem}>
                <img 
                  src={image.src} 
                  alt={image.alt}
                  style={styles.galleryImage}
                />
                <div style={styles.imageOverlay}>
                  <p style={styles.imageCaption}>{image.alt}</p>
                  <p style={styles.imageCategory}>{image.category}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div style={styles.centerButton}>
            <Link to="/gallery" className="btn" style={styles.seeMoreBtn}>
              Explore Full Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section style={{...styles.section, backgroundColor: '#0f766e', color: 'white'}}>
        <div className="container" style={styles.ctaContainer}>
          <div style={styles.ctaContent}>
            <h2 style={styles.ctaTitle}>Ready to Experience Luxury?</h2>
            <p style={styles.ctaText}>
              Contact us today to book your stay or inquire about our event hosting services. 
              Our team is available 24/7 to assist you.
            </p>
            <div style={styles.ctaButtons}>
              <Link to="/contact" className="btn" style={styles.ctaPrimaryBtn}>
                Get In Touch
              </Link>
              <a href="tel:+27765117835" className="btn" style={styles.ctaSecondaryBtn}>
                Call Now: +27 76 511 7835
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  // Hero Section Styles (same as before)
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
  backgroundVideo: {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: -1,
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
    textDecoration: 'none',
  },
  secondaryBtn: {
    backgroundColor: 'transparent',
    border: '2px solid white',
    textDecoration: 'none',
  },

  // Common Section Styles
  section: {
    padding: '80px 0',
  },
  
  // Features Grid
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    marginBottom: '40px',
  },
  featureCard: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
    textAlign: 'center',
    transition: 'transform 0.3s',
    ':hover': {
      transform: 'translateY(-5px)',
    },
  },
  featureTitle: {
    fontSize: '1.5rem',
    color: '#1e293b',
    marginBottom: '15px',
  },
  featureDesc: {
    color: '#64748b',
    lineHeight: '1.6',
  },

  // Rooms Preview
  roomsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    marginBottom: '40px',
  },
  roomCard: {
    backgroundColor: 'white',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
    transition: 'transform 0.3s',
    ':hover': {
      transform: 'translateY(-5px)',
    },
  },
  imageContainer: {
    height: '200px',
    overflow: 'hidden',
  },
  roomImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s',
    ':hover': {
      transform: 'scale(1.05)',
    },
  },
  roomContent: {
    padding: '20px',
  },
  roomName: {
    fontSize: '1.5rem',
    color: '#1e293b',
    marginBottom: '10px',
  },
  roomDesc: {
    color: '#64748b',
    marginBottom: '15px',
    lineHeight: '1.6',
    fontSize: '0.95rem',
  },
  priceContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: '1.3rem',
    color: '#0d9488',
    fontWeight: 'bold',
  },

  // Gallery Preview
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginBottom: '40px',
  },
  galleryItem: {
    position: 'relative',
    borderRadius: '10px',
    overflow: 'hidden',
    height: '200px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
  },
  galleryImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s',
    ':hover': {
      transform: 'scale(1.05)',
    },
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
    padding: '10px',
    transform: 'translateY(100%)',
    transition: 'transform 0.3s',
  },
  imageCaption: {
    margin: 0,
    fontSize: '0.9rem',
    fontWeight: '500',
  },
  imageCategory: {
    margin: '5px 0 0 0',
    fontSize: '0.8rem',
    color: '#ccc',
  },

  // CTA Section
  ctaContainer: {
    textAlign: 'center',
  },
  ctaContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  ctaTitle: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    '@media (max-width: 768px)': {
      fontSize: '2rem',
    },
  },
  ctaText: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    lineHeight: '1.6',
    opacity: 0.9,
  },
  ctaButtons: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  ctaPrimaryBtn: {
    backgroundColor: 'white',
    color: '#0f766e',
    border: '2px solid white',
    textDecoration: 'none',
    ':hover': {
      backgroundColor: 'transparent',
      color: 'white',
    },
  },
  ctaSecondaryBtn: {
    backgroundColor: 'transparent',
    border: '2px solid white',
    textDecoration: 'none',
    ':hover': {
      backgroundColor: 'white',
      color: '#0f766e',
    },
  },

  // Common Button Style
  seeMoreBtn: {
    display: 'inline-block',
    backgroundColor: 'transparent',
    color: '#0d9488',
    border: '2px solid #0d9488',
    textDecoration: 'none',
    padding: '12px 30px',
    borderRadius: '4px',
    fontWeight: '600',
    transition: 'all 0.3s',
    ':hover': {
      backgroundColor: '#0d9488',
      color: 'white',
    },
  },
  centerButton: {
    textAlign: 'center',
    marginTop: '30px',
  },

  // Hover effects for gallery
  galleryItem: {
    ':hover .imageOverlay': {
      transform: 'translateY(0)',
    },
  },
};

export default Home;