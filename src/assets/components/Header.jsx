import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  // Check if screen is mobile size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Check on mount
    checkIfMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header style={styles.header}>
      <div className="container" style={styles.container}>
        {/* Logo */}
        <div style={styles.logo}>
          <NavLink 
            to="/" 
            style={styles.logoLink}
            onClick={handleNavClick}
          >
            <h1 style={styles.logoText}>Kwela Inn</h1>
          </NavLink>
        </div>

        {/* Desktop Navigation - Only show on desktop */}
        {!isMobile && (
          <nav style={styles.desktopNav}>
            {navItems.map((item) => (
              <NavLink 
                key={item.name} 
                to={item.path}
                style={({ isActive }) => ({
                  ...styles.navLink,
                  ...(isActive ? styles.activeNavLink : {})
                })}
              >
                {item.name}
              </NavLink>
            ))}
            <button style={styles.bookBtn}>Book Now</button>
          </nav>
        )}

        {/* Mobile Menu Button - Only show on mobile */}
        {isMobile && (
          <>
            <button 
              style={styles.menuButton}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <span style={styles.menuIcon}>
                {isMenuOpen ? '✕' : '☰'}
              </span>
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div style={styles.mobileMenu}>
                {navItems.map((item) => (
                  <NavLink 
                    key={item.name} 
                    to={item.path} 
                    style={({ isActive }) => ({
                      ...styles.mobileLink,
                      ...(isActive ? styles.activeMobileLink : {})
                    })}
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </NavLink>
                ))}
                <button style={styles.mobileBookBtn}>Book Now</button>
              </div>
            )}
          </>
        )}
      </div>
    </header>
  );
};

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: 'white',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
    padding: '1rem 0',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
  },
  logo: {
    flexShrink: 0,
  },
  logoLink: {
    textDecoration: 'none',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#0d9488',
    margin: 0,
  },
  
  // Desktop Navigation
  desktopNav: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  navLink: {
    textDecoration: 'none',
    color: '#475569',
    fontWeight: '500',
    fontSize: '1rem',
    padding: '0.5rem',
    transition: 'color 0.3s',
  },
  activeNavLink: {
    color: '#0d9488',
    fontWeight: '600',
    borderBottom: '2px solid #0d9488',
  },
  bookBtn: {
    padding: '0.5rem 1.5rem',
    backgroundColor: '#0d9488',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontWeight: '600',
    cursor: 'pointer',
    marginLeft: '0.5rem',
  },
  
  // Mobile Menu Button
  menuButton: {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    color: '#1e293b',
    cursor: 'pointer',
    padding: '0.5rem',
  },
  menuIcon: {
    display: 'block',
  },
  
  // Mobile Menu
  mobileMenu: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: 'white',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    zIndex: 999,
  },
  mobileLink: {
    textDecoration: 'none',
    color: '#475569',
    padding: '1rem',
    fontSize: '1.1rem',
    fontWeight: '500',
    display: 'block',
    borderBottom: '1px solid #f1f5f9',
  },
  activeMobileLink: {
    color: '#0d9488',
    fontWeight: '600',
    backgroundColor: '#f0f9ff',
  },
  mobileBookBtn: {
    width: '100%',
    padding: '1rem',
    backgroundColor: '#0d9488',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '0.5rem',
  },
};

export default Header;