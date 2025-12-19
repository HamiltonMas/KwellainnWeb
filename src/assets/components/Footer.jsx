import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div className="container">
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <h3 style={styles.footerLogo}>
              <Link to="/" style={styles.logoLink}>Kwela Inn</Link>
            </h3>
            <p style={styles.footerText}>
              Your premier destination for luxury accommodation 
              and memorable events in South Africa.
            </p>
          </div>
          
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Quick Links</h4>
            <ul style={styles.footerLinks}>
              <li><Link to="/" style={styles.footerLink}>Home</Link></li>
              <li><Link to="/about" style={styles.footerLink}>About</Link></li>
              <li><Link to="/rooms" style={styles.footerLink}>Rooms</Link></li>
              <li><Link to="/gallery" style={styles.footerLink}>Gallery</Link></li>
              <li><Link to="/contact" style={styles.footerLink}>Contact</Link></li>
            </ul>
          </div>
          
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Contact Info</h4>
            <ul style={styles.footerLinks}>
              <li style={styles.footerContact}>
                <span style={styles.icon}>📍</span> Kwela Inn Resort, South Africa
              </li>
              <li style={styles.footerContact}>
                <span style={styles.icon}>📞</span> +27 76 511 7835
              </li>
              <li style={styles.footerContact}>
                <span style={styles.icon}>✉️</span> info@kwelainn.co.za
              </li>
            </ul>
          </div>
          
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Follow Us</h4>
            <div style={styles.socialIcons}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
                <span style={styles.socialText}>Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
                <span style={styles.socialText}>Instagram</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
                <span style={styles.socialText}>Twitter</span>
              </a>
            </div>
          </div>
        </div>
        
        <div style={styles.footerBottom}>
          <p style={styles.copyright}>
            © {currentYear} Kwela Inn. All rights reserved.
          </p>
          <div style={styles.legalLinks}>
            <Link to="/privacy" style={styles.legalLink}>Privacy Policy</Link>
            <span style={styles.separator}>|</span>
            <Link to="/terms" style={styles.legalLink}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#1e293b',
    color: 'white',
    padding: '60px 0 30px',
  },
  footerContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '40px',
    marginBottom: '50px',
  },
  footerSection: {
    marginBottom: '30px',
  },
  footerLogo: {
    fontSize: '2rem',
    color: '#0d9488',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  logoLink: {
    textDecoration: 'none',
    color: 'inherit',
    transition: 'color 0.3s',
    ':hover': {
      color: '#14b8a6',
    },
  },
  footerText: {
    color: '#cbd5e1',
    lineHeight: '1.6',
    maxWidth: '300px',
    fontSize: '0.95rem',
  },
  footerTitle: {
    fontSize: '1.3rem',
    marginBottom: '20px',
    color: '#f8fafc',
    fontWeight: '600',
  },
  footerLinks: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  footerLink: {
    color: '#cbd5e1',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '10px',
    transition: 'color 0.3s',
    fontSize: '0.95rem',
    ':hover': {
      color: '#0d9488',
      paddingLeft: '5px',
    },
  },
  footerContact: {
    color: '#cbd5e1',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '0.95rem',
    lineHeight: '1.5',
  },
  icon: {
    fontSize: '1.1rem',
    minWidth: '24px',
  },
  socialIcons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  socialIcon: {
    color: '#cbd5e1',
    textDecoration: 'none',
    transition: 'all 0.3s',
    display: 'inline-block',
    ':hover': {
      color: '#0d9488',
      transform: 'translateX(5px)',
    },
  },
  socialText: {
    fontSize: '0.95rem',
  },
  footerBottom: {
    borderTop: '1px solid #334155',
    paddingTop: '30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  },
  copyright: {
    color: '#94a3b8',
    fontSize: '0.9rem',
    margin: 0,
  },
  legalLinks: {
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
  },
  legalLink: {
    color: '#94a3b8',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.3s',
    ':hover': {
      color: '#0d9488',
    },
  },
  separator: {
    color: '#475569',
  },
  
  // Responsive styles
  '@media (max-width: 768px)': {
    footerContent: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '30px',
    },
    footerBottom: {
      flexDirection: 'column',
      textAlign: 'center',
      gap: '15px',
    },
    legalLinks: {
      justifyContent: 'center',
    },
  },
  
  '@media (max-width: 480px)': {
    footer: {
      padding: '40px 0 20px',
    },
    footerContent: {
      gridTemplateColumns: '1fr',
      gap: '25px',
    },
    footerSection: {
      textAlign: 'center',
      marginBottom: '25px',
    },
    footerText: {
      maxWidth: '100%',
      margin: '0 auto',
    },
    footerContact: {
      justifyContent: 'center',
    },
    socialIcons: {
      alignItems: 'center',
    },
  },
};

export default Footer;