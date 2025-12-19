import { useState, useEffect } from 'react';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const features = [
    { title: 'Luxury Accommodation', desc: 'Spacious rooms with modern amenities' },
    { title: 'Event Hosting', desc: 'Perfect venues for weddings & conferences' },
    { title: 'Day Visits', desc: 'Enjoy our facilities for a daily getaway' },
    { title: 'Prime Location', desc: 'Beautiful surroundings with easy access' },
  ];

  const coreValues = [
    { title: 'Hospitality', desc: 'Warm, caring, and professional service' },
    { title: 'Excellence', desc: 'Commitment to top-quality experiences' },
    { title: 'Community', desc: 'Bringing people together to connect and celebrate' },
    { title: 'Integrity', desc: 'Honesty, transparency, and respect in all we do' },
  ];

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <section className="about-section" style={{
      padding: isMobile ? '130px 0 40px' : '120px 0 80px'
    }}>
      <div className="container">
        {/* Main Title */}
        <div className="section-title">
          <h1 style={{
            fontSize: isMobile ? '2.2rem' : isTablet ? '2.5rem' : '3rem',
            marginBottom: '20px',
            color: '#1e293b',
            textAlign: 'center'
          }}>
            About Kwela Inn
          </h1>
          <p style={{
            fontSize: isMobile ? '1rem' : '1.2rem',
            color: '#64748b',
            maxWidth: '800px',
            margin: '0 auto 40px',
            lineHeight: '1.8',
            textAlign: 'center',
            padding: isMobile ? '0 15px' : '0'
          }}>
            Nestled in a serene environment, Kwela Inn offers an all-in-one 
            hospitality experience combining luxury, comfort, and exceptional service.
          </p>
        </div>

        {/* Vision & Mission Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: isMobile ? '25px' : '40px',
          margin: isMobile ? '40px 0' : '60px 0'
        }}>
          <div style={{
            backgroundColor: '#f0f9ff',
            padding: isMobile ? '25px 20px' : '40px',
            borderRadius: '15px',
            textAlign: 'center',
            borderLeft: '5px solid #0d9488',
            boxShadow: '0 5px 20px rgba(13, 148, 136, 0.1)',
          }}>
            <div style={{ marginBottom: '20px' }}>
              <span style={{ fontSize: isMobile ? '2.5rem' : '3rem' }}>👁️</span>
            </div>
            <h3 style={{
              fontSize: isMobile ? '1.5rem' : '1.8rem',
              color: '#1e293b',
              marginBottom: '20px',
              fontWeight: '600',
            }}>
              Our Vision
            </h3>
            <p style={{
              color: '#475569',
              lineHeight: '1.7',
              fontSize: isMobile ? '1rem' : '1.1rem',
              margin: 0,
            }}>
              To be Limpopo's top hospitality and events destination, recognized for natural beauty, 
              excellent service, safety, and memorable experiences.
            </p>
          </div>
          
          <div style={{
            backgroundColor: '#fef7cd',
            padding: isMobile ? '25px 20px' : '40px',
            borderRadius: '15px',
            textAlign: 'center',
            borderLeft: '5px solid #f59e0b',
            boxShadow: '0 5px 20px rgba(245, 158, 11, 0.1)',
          }}>
            <div style={{ marginBottom: '20px' }}>
              <span style={{ fontSize: isMobile ? '2.5rem' : '3rem' }}>🎯</span>
            </div>
            <h3 style={{
              fontSize: isMobile ? '1.5rem' : '1.8rem',
              color: '#1e293b',
              marginBottom: '20px',
              fontWeight: '600',
            }}>
              Our Mission
            </h3>
            <p style={{
              color: '#475569',
              lineHeight: '1.7',
              fontSize: isMobile ? '1rem' : '1.1rem',
              margin: 0,
            }}>
              Our mission is to offer a welcoming space for guests to relax, connect, and celebrate, 
              with exceptional hospitality that blends comfort, elegance, and nature.
            </p>
          </div>
        </div>

        {/* Safety & Security Section */}
        <div style={{
          backgroundColor: '#f8fafc',
          padding: isMobile ? '30px 20px' : '50px',
          borderRadius: '15px',
          margin: isMobile ? '40px 0' : '60px 0',
          border: '2px solid #e2e8f0',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '20px' : '30px',
            flexDirection: isMobile ? 'column' : 'row',
            textAlign: isMobile ? 'center' : 'left'
          }}>
            <div style={{ flexShrink: 0 }}>
              <span style={{ 
                fontSize: isMobile ? '2.5rem' : '4rem',
                color: '#0d9488' 
              }}>
                🛡️
              </span>
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{
                fontSize: isMobile ? '1.5rem' : '1.8rem',
                color: '#1e293b',
                marginBottom: '20px',
                fontWeight: '600',
              }}>
                Safety & Security
              </h3>
              <p style={{
                color: '#475569',
                lineHeight: '1.7',
                fontSize: isMobile ? '1rem' : '1.1rem',
                maxWidth: '800px',
                margin: 0,
              }}>
                Your safety is our priority. With secure access, reliable facilities, and attentive staff, 
                we ensure a safe, welcoming environment for every stay, event, or visit.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div style={{ margin: isMobile ? '60px 0' : '80px 0' }}>
          <div className="section-title">
            <h2 style={{
              fontSize: isMobile ? '2rem' : '2.5rem',
              textAlign: 'center'
            }}>
              Our Core Values
            </h2>
            <p style={{
              color: '#64748b',
              fontSize: isMobile ? '1rem' : '1.1rem',
              marginTop: '10px',
              textAlign: 'center',
              padding: isMobile ? '0 15px' : '0'
            }}>
              The principles that guide everything we do at Kwela Inn
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: isMobile ? '20px' : '30px',
            marginTop: '40px',
          }}>
            {coreValues.map((value, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                padding: isMobile ? '25px 20px' : '30px',
                borderRadius: '10px',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                borderTop: '4px solid #0d9488',
              }}>
                <h4 style={{
                  fontSize: isMobile ? '1.3rem' : '1.5rem',
                  color: '#1e293b',
                  marginBottom: '15px',
                  fontWeight: '600',
                  marginTop: 0,
                }}>
                  {value.title}
                </h4>
                <p style={{
                  color: '#64748b',
                  lineHeight: '1.6',
                  fontSize: isMobile ? '0.95rem' : '1rem',
                  margin: 0,
                }}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features Section */}
        <div style={{ margin: isMobile ? '60px 0 40px' : '80px 0 60px' }}>
          <div className="section-title">
            <h2 style={{
              fontSize: isMobile ? '2rem' : '2.5rem',
              textAlign: 'center'
            }}>
              What We Offer
            </h2>
            <p style={{
              color: '#64748b',
              fontSize: isMobile ? '1rem' : '1.1rem',
              marginTop: '10px',
              textAlign: 'center',
              padding: isMobile ? '0 15px' : '0'
            }}>
              Discover the exceptional amenities and services at Kwela Inn
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: isMobile ? '20px' : '30px',
            marginTop: '40px',
          }}>
            {features.map((feature, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                padding: isMobile ? '25px 20px' : '30px',
                borderRadius: '10px',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
                textAlign: 'center',
              }}>
                <h3 style={{
                  fontSize: isMobile ? '1.3rem' : '1.5rem',
                  color: '#1e293b',
                  marginBottom: '15px',
                  marginTop: 0,
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  color: '#64748b',
                  lineHeight: '1.6',
                  margin: 0,
                  fontSize: isMobile ? '0.95rem' : '1rem',
                }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div style={{
          margin: isMobile ? '60px 0' : '80px 0',
          padding: isMobile ? '40px 20px' : '50px 0',
          backgroundColor: '#0f766e',
          borderRadius: '15px',
          color: 'white',
          boxShadow: '0 10px 30px rgba(15, 118, 110, 0.2)',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: isMobile ? '30px' : '60px',
            textAlign: 'center',
          }}>
            <div>
              <h3 style={{
                fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
                fontWeight: 'bold',
                marginBottom: '10px',
                color: 'white',
                marginTop: 0,
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
              }}>
                50+
              </h3>
              <p style={{
                fontSize: isMobile ? '1rem' : '1.1rem',
                opacity: 0.9,
                margin: 0,
              }}>
                Rooms & Suites
              </p>
            </div>
            <div>
              <h3 style={{
                fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
                fontWeight: 'bold',
                marginBottom: '10px',
                color: 'white',
                marginTop: 0,
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
              }}>
                1000+
              </h3>
              <p style={{
                fontSize: isMobile ? '1rem' : '1.1rem',
                opacity: 0.9,
                margin: 0,
              }}>
                Happy Guests
              </p>
            </div>
            <div>
              <h3 style={{
                fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
                fontWeight: 'bold',
                marginBottom: '10px',
                color: 'white',
                marginTop: 0,
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
              }}>
                15+
              </h3>
              <p style={{
                fontSize: isMobile ? '1rem' : '1.1rem',
                opacity: 0.9,
                margin: 0,
              }}>
                Event Spaces
              </p>
            </div>
            <div>
              <h3 style={{
                fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
                fontWeight: 'bold',
                marginBottom: '10px',
                color: 'white',
                marginTop: 0,
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
              }}>
                24/7
              </h3>
              <p style={{
                fontSize: isMobile ? '1rem' : '1.1rem',
                opacity: 0.9,
                margin: 0,
              }}>
                Safety & Support
              </p>
            </div>
          </div>
        </div>

        {/* Closing CTA */}
        <div style={{
          textAlign: 'center',
          padding: isMobile ? '30px 20px' : '40px',
          backgroundColor: '#f1f5f9',
          borderRadius: '15px',
          marginTop: isMobile ? '40px' : '60px',
          border: '1px solid #e2e8f0',
        }}>
          <p style={{
            fontSize: isMobile ? '1.1rem' : '1.3rem',
            color: '#1e293b',
            fontWeight: '500',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
          }}>
            Experience the Kwela Inn difference. Book your stay or event with us today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;