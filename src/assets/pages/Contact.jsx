import { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa';
import { MdSend, MdError } from 'react-icons/md';

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  // Coordinates for Louis Trichardt (Makhado), Limpopo
  const location = {
    name: 'Kwela Inn Resort',
    address: 'Hospitality Street, Louis Trichardt, Limpopo, South Africa',
    lat: -23.0451,
    lng: 29.9054,
    zoom: 14
  };

  // Google Maps embed URL
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.698608989227!2d29.9032333!3d-23.0451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec6c7f1cf2b9d5b%3A0x9e9bc5e0c6e5a5b5!2sLouis%20Trichardt%2C%20Limpopo!5e0!3m2!1sen!2sza!4v1710256000000!5m2!1sen!2sza`;

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone Number',
      details: ['+27 76 511 7835', '+27 11 234 5678'],
      description: 'Call us 24/7 for immediate assistance'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Address',
      details: ['info@kwelainn.co.za', 'reservations@kwelainn.co.za'],
      description: 'We respond within 2 hours'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      details: ['Kwela Inn Resort', 'Hospitality Street', 'Louis Trichardt, Limpopo'],
      description: 'Easy access from major highways'
    },
    {
      icon: <FaClock />,
      title: 'Business Hours',
      details: ['Reception: 6:00 AM - 11:00 PM', '24/7 Emergency Line'],
      description: 'Always here to help you'
    }
  ];

  const roomTypes = [
    'Presidential Suite',
    'Deluxe Garden Suite',
    'Executive Family Room',
    'Standard Superior Room',
    'Not Sure / General Inquiry'
  ];

  const subjects = [
    'Room Reservation',
    'Event Booking',
    'General Inquiry',
    'Group Booking',
    'Special Requests',
    'Compliments/Feedback'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill in all required fields'
      });
      return;
    }

    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Sending your message...'
    });

    // Simulate API call
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you! Your message has been sent successfully. We will respond within 24 hours.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        checkIn: '',
        checkOut: '',
        guests: '1',
        roomType: ''
      });

      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          error: false,
          message: ''
        });
      }, 5000);
    }, 1500);
  };

  const handleGetDirections = () => {
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`;
    window.open(directionsUrl, '_blank');
  };

  return (
    <div style={styles.container}>
      {/* Hero Section - Adjusted to not interfere with header */}
      <section style={styles.heroSection}>
        <div style={styles.containerInner}>
          <div style={styles.heroContent}>
            <h1 style={{
              ...styles.heroTitle,
              fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
            }}>
              Get In Touch
            </h1>
            <p style={{
              ...styles.heroSubtitle,
              fontSize: isMobile ? '0.95rem' : isTablet ? '1.1rem' : '1.2rem',
              padding: isMobile ? '0 10px' : '0'
            }}>
              We're here to help you plan your perfect stay at Kwela Inn. Contact us for 
              reservations, inquiries, or any special requests.
            </p>
          </div>
        </div>
      </section>

      <div style={styles.mainContent}>
        <div style={{
          ...styles.contentWrapper,
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : '1fr 1.5fr',
          gap: isMobile ? '30px' : isTablet ? '40px' : '50px',
        }}>
          {/* Contact Information Cards */}
          <div style={styles.infoSection}>
            <h2 style={{
              ...styles.sectionTitle,
              fontSize: isMobile ? '1.5rem' : isTablet ? '1.8rem' : '2.2rem',
            }}>
              Contact Information
            </h2>
            <p style={{
              ...styles.sectionDescription,
              fontSize: isMobile ? '0.9rem' : isTablet ? '0.95rem' : '1rem',
            }}>
              Reach out to us through any of these channels. Our team is ready to assist you.
            </p>
            
            <div style={{
              ...styles.infoGrid,
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : '1fr',
              gap: isMobile ? '15px' : isTablet ? '20px' : '20px',
            }}>
              {contactInfo.map((info, index) => (
                <div key={index} style={{
                  ...styles.infoCard,
                  padding: isMobile ? '20px' : isTablet ? '22px' : '25px',
                }}>
                  <div style={{
                    ...styles.infoIcon,
                    fontSize: isMobile ? '1.8rem' : isTablet ? '1.9rem' : '2rem',
                  }}>
                    {info.icon}
                  </div>
                  <h3 style={{
                    ...styles.infoTitle,
                    fontSize: isMobile ? '1.1rem' : isTablet ? '1.2rem' : '1.3rem',
                  }}>
                    {info.title}
                  </h3>
                  <div style={styles.infoDetails}>
                    {info.details.map((detail, idx) => (
                      <p key={idx} style={{
                        ...styles.infoDetail,
                        fontSize: isMobile ? '0.85rem' : isTablet ? '0.9rem' : '0.95rem',
                      }}>
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p style={{
                    ...styles.infoDescription,
                    fontSize: isMobile ? '0.8rem' : isTablet ? '0.85rem' : '0.9rem',
                  }}>
                    {info.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Map Section */}
            <div style={styles.mapSection}>
              <div style={styles.mapHeader}>
                <h3 style={{
                  ...styles.mapTitle,
                  fontSize: isMobile ? '1.2rem' : isTablet ? '1.3rem' : '1.5rem',
                }}>
                  Find Us
                </h3>
                <button 
                  onClick={handleGetDirections}
                  style={styles.directionsButton}
                >
                  Get Directions
                </button>
              </div>
              
              <div style={{
                ...styles.mapContainer,
                height: isMobile ? '250px' : isTablet ? '300px' : '350px',
              }}>
                <iframe
                  src={mapUrl}
                  style={styles.mapIframe}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kwela Inn Resort Location Map"
                />
                
                {/* Map Overlay with Info */}
                <div style={styles.mapOverlay}>
                  <div style={styles.mapInfoCard}>
                    <FaMapMarkerAlt style={styles.mapPinIcon} />
                    <div style={styles.mapInfoContent}>
                      <h4 style={styles.mapInfoTitle}>{location.name}</h4>
                      <p style={styles.mapInfoAddress}>{location.address}</p>
                      <p style={styles.mapInfoCoordinates}>
                        📍 {location.lat.toFixed(4)}°S, {location.lng.toFixed(4)}°E
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Location Details */}
              <div style={styles.locationDetails}>
                <h4 style={styles.detailsTitle}>How to Reach Us</h4>
                <ul style={styles.detailsList}>
                  <li style={styles.detailsItem}>
                    <strong>From Johannesburg:</strong> Take N1 North, follow signs for Polokwane, continue to Louis Trichardt
                  </li>
                  <li style={styles.detailsItem}>
                    <strong>From Polokwane:</strong> Take R521 North towards Louis Trichardt
                  </li>
                  <li style={styles.detailsItem}>
                    <strong>Nearest Airport:</strong> Polokwane International Airport (approx. 2 hours drive)
                  </li>
                  <li style={styles.detailsItem}>
                    <strong>Public Transport:</strong> Regular buses and shuttles available from major cities
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            ...styles.formSection,
            padding: isMobile ? '25px 20px' : isTablet ? '30px 25px' : '40px 35px',
          }}>
            <div style={styles.formHeader}>
              <h2 style={{
                ...styles.formTitle,
                fontSize: isMobile ? '1.4rem' : isTablet ? '1.6rem' : '2rem',
              }}>
                Send Us a Message
              </h2>
              <p style={{
                ...styles.formSubtitle,
                fontSize: isMobile ? '0.9rem' : isTablet ? '0.95rem' : '1rem',
              }}>
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            {/* Form Status Message */}
            {formStatus.message && (
              <div style={{
                ...styles.statusMessage,
                ...(formStatus.error ? styles.errorMessage : styles.successMessage),
                fontSize: isMobile ? '0.85rem' : isTablet ? '0.9rem' : '0.95rem',
              }}>
                {formStatus.error ? <MdError /> : <FaCheckCircle />}
                <span>{formStatus.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={styles.form}>
              {/* Personal Information */}
              <div style={styles.formGroup}>
                <label style={{
                  ...styles.formLabel,
                  fontSize: isMobile ? '0.85rem' : isTablet ? '0.9rem' : '0.95rem',
                }}>
                  Full Name <span style={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    ...styles.formInput,
                    padding: isMobile ? '10px 12px' : isTablet ? '11px 14px' : '12px 15px',
                    fontSize: isMobile ? '0.9rem' : isTablet ? '0.95rem' : '1rem',
                  }}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div style={{
                ...styles.formRow,
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gap: isMobile ? '15px' : '20px',
              }}>
                <div style={styles.formGroup}>
                  <label style={{
                    ...styles.formLabel,
                    fontSize: isMobile ? '0.85rem' : isTablet ? '0.9rem' : '0.95rem',
                  }}>
                    Email Address <span style={styles.required}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      ...styles.formInput,
                      padding: isMobile ? '10px 12px' : isTablet ? '11px 14px' : '12px 15px',
                      fontSize: isMobile ? '0.9rem' : isTablet ? '0.95rem' : '1rem',
                    }}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={{
                    ...styles.formLabel,
                    fontSize: isMobile ? '0.85rem' : isTablet ? '0.9rem' : '0.95rem',
                  }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      ...styles.formInput,
                      padding: isMobile ? '10px 12px' : isTablet ? '11px 14px' : '12px 15px',
                      fontSize: isMobile ? '0.9rem' : isTablet ? '0.95rem' : '1rem',
                    }}
                    placeholder="+27 12 345 6789"
                  />
                </div>
              </div>

              {/* Stay Information */}
              <div style={{
                ...styles.formRow,
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gap: isMobile ? '15px' : '20px',
              }}>
                <div style={styles.formGroup}>
                  <label style={{
                    ...styles.formLabel,
                    fontSize: isMobile ? '0.85rem' : isTablet ? '0.9rem' : '0.95rem',
                  }}>
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    style={{
                      ...styles.formInput,
                      padding: isMobile ? '10px 12px' : isTablet ? '11px 14px' : '12px 15px',
                      fontSize: isMobile ? '0.9rem' : isTablet ? '0.95rem' : '1rem',
                    }}
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={{
                    ...styles.formLabel,
                    fontSize: isMobile ? '0.85rem' : isTablet ? '0.9rem' : '0.95rem',
                  }}>
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    style={{
                      ...styles.formInput,
                      padding: isMobile ? '10px 12px' : isTablet ? '11px 14px' : '12px 15px',
                      fontSize: isMobile ? '0.9rem' : isTablet ? '0.95rem' : '1rem',
                    }}
                  />
                </div>
              </div>

              <div style={{
                ...styles.formRow,
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gap: isMobile ? '15px' : '20px',
              }}>
                <div style={styles.formGroup}>
                  <label style={{
                    ...styles.formLabel,
                    fontSize: isMobile ? '0.85rem' : isTablet ? '0.9rem' : '0.95rem',
                  }}>
                    Number of Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    style={{
                      ...styles.formSelect,
                      padding: isMobile ? '10px 12px' : isTablet ? '11px 14px' : '12px 15px',
                      fontSize: isMobile ? '0.9rem' : isTablet ? '0.95rem' : '1rem',
                    }}
                  >
                    {[1, 2, 3, 4, 5, 6, '7+'].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'guest' : 'guests'}</option>
                    ))}
                  </select>
                </div>

                <div style={styles.formGroup}>
                  <label style={{
                    ...styles.formLabel,
                    fontSize: isMobile ? '0.85rem' : isTablet ? '0.9rem' : '0.95rem',
                  }}>
                    Room Type
                  </label>
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    style={{
                      ...styles.formSelect,
                      padding: isMobile ? '10px 12px' : isTablet ? '11px 14px' : '12px 15px',
                      fontSize: isMobile ? '0.9rem' : isTablet ? '0.95rem' : '1rem',
                    }}
                  >
                    <option value="">Select room type</option>
                    {roomTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Subject and Message */}
              <div style={styles.formGroup}>
                <label style={{
                  ...styles.formLabel,
                  fontSize: isMobile ? '0.85rem' : isTablet ? '0.9rem' : '0.95rem',
                }}>
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  style={{
                    ...styles.formSelect,
                    padding: isMobile ? '10px 12px' : isTablet ? '11px 14px' : '12px 15px',
                    fontSize: isMobile ? '0.9rem' : isTablet ? '0.95rem' : '1rem',
                  }}
                >
                  <option value="">Select a subject</option>
                  {subjects.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>

              <div style={styles.formGroup}>
                <label style={{
                  ...styles.formLabel,
                  fontSize: isMobile ? '0.85rem' : isTablet ? '0.9rem' : '0.95rem',
                }}>
                  Your Message <span style={styles.required}>*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    ...styles.formTextarea,
                    padding: isMobile ? '10px 12px' : isTablet ? '11px 14px' : '12px 15px',
                    fontSize: isMobile ? '0.9rem' : isTablet ? '0.95rem' : '1rem',
                    minHeight: isMobile ? '100px' : '120px',
                  }}
                  rows={isMobile ? 4 : 6}
                  placeholder="Tell us about your inquiry, special requests, or anything else we should know..."
                  required
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                style={{
                  ...styles.submitButton,
                  padding: isMobile ? '14px' : isTablet ? '15px' : '16px',
                  fontSize: isMobile ? '0.95rem' : isTablet ? '1rem' : '1.1rem',
                }}
                disabled={formStatus.submitted}
              >
                <MdSend style={{
                  ...styles.buttonIcon,
                  fontSize: isMobile ? '1rem' : isTablet ? '1.1rem' : '1.2rem',
                }} />
                {formStatus.submitted ? 'Sending...' : 'Send Message'}
              </button>

              <p style={{
                ...styles.formNote,
                fontSize: isMobile ? '0.8rem' : isTablet ? '0.85rem' : '0.9rem',
              }}>
                <span style={styles.required}>*</span> Required fields
              </p>
            </form>

            {/* Quick Contact Options */}
            <div style={styles.quickContact}>
              <h3 style={{
                ...styles.quickContactTitle,
                fontSize: isMobile ? '1rem' : isTablet ? '1.1rem' : '1.3rem',
              }}>
                Prefer to contact directly?
              </h3>
              <div style={{
                ...styles.quickContactButtons,
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? '10px' : '15px',
              }}>
                <a href="tel:+27765117835" style={{
                  ...styles.quickButton,
                  padding: isMobile ? '12px' : isTablet ? '13px' : '14px',
                  fontSize: isMobile ? '0.9rem' : isTablet ? '0.95rem' : '1rem',
                }}>
                  <FaPhone /> Call Now
                </a>
                <a href="mailto:info@kwelainn.co.za" style={{
                  ...styles.quickButton,
                  padding: isMobile ? '12px' : isTablet ? '13px' : '14px',
                  fontSize: isMobile ? '0.9rem' : isTablet ? '0.95rem' : '1rem',
                }}>
                  <FaEnvelope /> Email Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div style={{
          ...styles.faqSection,
          padding: isMobile ? '30px 20px' : isTablet ? '40px 30px' : '50px 40px',
        }}>
          <h2 style={{
            ...styles.faqTitle,
            fontSize: isMobile ? '1.4rem' : isTablet ? '1.6rem' : '2rem',
            marginBottom: isMobile ? '25px' : isTablet ? '30px' : '40px',
          }}>
            Frequently Asked Questions
          </h2>
          <div style={{
            ...styles.faqGrid,
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: isMobile ? '20px' : isTablet ? '25px' : '30px',
          }}>
            <div style={{
              ...styles.faqItem,
              padding: isMobile ? '20px' : isTablet ? '22px' : '25px',
            }}>
              <h3 style={{
                ...styles.faqQuestion,
                fontSize: isMobile ? '1rem' : isTablet ? '1.1rem' : '1.2rem',
              }}>
                What's your cancellation policy?
              </h3>
              <p style={{
                ...styles.faqAnswer,
                fontSize: isMobile ? '0.85rem' : isTablet ? '0.9rem' : '0.95rem',
              }}>
                Cancellations made 48 hours before check-in receive a full refund. 
                Late cancellations may incur a one-night charge.
              </p>
            </div>
            <div style={{
              ...styles.faqItem,
              padding: isMobile ? '20px' : isTablet ? '22px' : '25px',
            }}>
              <h3 style={{
                ...styles.faqQuestion,
                fontSize: isMobile ? '1rem' : isTablet ? '1.1rem' : '1.2rem',
              }}>
                Do you offer airport transfers?
              </h3>
              <p style={{
                ...styles.faqAnswer,
                fontSize: isMobile ? '0.85rem' : isTablet ? '0.9rem' : '0.95rem',
              }}>
                Yes, we provide airport transfer services from major airports. 
                Please arrange at least 24 hours in advance.
              </p>
            </div>
            <div style={{
              ...styles.faqItem,
              padding: isMobile ? '20px' : isTablet ? '22px' : '25px',
            }}>
              <h3 style={{
                ...styles.faqQuestion,
                fontSize: isMobile ? '1rem' : isTablet ? '1.1rem' : '1.2rem',
              }}>
                Is early check-in available?
              </h3>
              <p style={{
                ...styles.faqAnswer,
                fontSize: isMobile ? '0.85rem' : isTablet ? '0.9rem' : '0.95rem',
              }}>
                Early check-in is subject to availability. We'll do our best to 
                accommodate your request.
              </p>
            </div>
            <div style={{
              ...styles.faqItem,
              padding: isMobile ? '20px' : isTablet ? '22px' : '25px',
            }}>
              <h3 style={{
                ...styles.faqQuestion,
                fontSize: isMobile ? '1rem' : isTablet ? '1.1rem' : '1.2rem',
              }}>
                Do you have wheelchair accessibility?
              </h3>
              <p style={{
                ...styles.faqAnswer,
                fontSize: isMobile ? '0.85rem' : isTablet ? '0.9rem' : '0.95rem',
              }}>
                Yes, we have accessible rooms and facilities. Please mention any 
                special requirements when booking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f8fafc',
    minHeight: '100vh',
    paddingTop: '80px',
    '@media (max-width: 768px)': {
      paddingTop: '70px',
    },
    '@media (max-width: 480px)': {
      paddingTop: '60px',
    },
  },
  
  containerInner: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    '@media (max-width: 768px)': {
      padding: '0 15px',
    },
  },
  
  mainContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    '@media (max-width: 768px)': {
      padding: '0 15px',
    },
  },
  
  // Hero Section
  heroSection: {
    background: 'linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)',
    color: 'white',
    padding: '60px 0',
    marginBottom: '40px',
    '@media (max-width: 768px)': {
      padding: '40px 0',
      marginBottom: '30px',
    },
    '@media (max-width: 480px)': {
      padding: '30px 0',
      marginBottom: '25px',
    },
  },
  heroContent: {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
  },
  heroTitle: {
    fontWeight: '700',
    marginBottom: '20px',
    lineHeight: '1.2',
  },
  heroSubtitle: {
    opacity: '0.9',
    lineHeight: '1.6',
  },
  
  // Content Wrapper
  contentWrapper: {
    display: 'grid',
    marginBottom: '60px',
    '@media (max-width: 768px)': {
      marginBottom: '40px',
    },
  },
  
  // Info Section
  infoSection: {},
  sectionTitle: {
    color: '#1e293b',
    marginBottom: '15px',
    fontWeight: '600',
  },
  sectionDescription: {
    color: '#64748b',
    marginBottom: '30px',
    lineHeight: '1.6',
  },
  infoGrid: {
    display: 'grid',
  },
  infoCard: {
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
    },
  },
  infoIcon: {
    color: '#0d9488',
    marginBottom: '15px',
  },
  infoTitle: {
    color: '#1e293b',
    marginBottom: '10px',
    fontWeight: '600',
  },
  infoDetails: {
    marginBottom: '10px',
  },
  infoDetail: {
    color: '#475569',
    margin: '5px 0',
  },
  infoDescription: {
    color: '#64748b',
    fontStyle: 'italic',
  },
  
  // Map Section
  mapSection: {
    marginTop: '30px',
  },
  mapHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
    flexWrap: 'wrap',
    gap: '10px',
  },
  mapTitle: {
    color: '#1e293b',
    fontWeight: '600',
    margin: 0,
  },
  directionsButton: {
    padding: '8px 16px',
    backgroundColor: '#0d9488',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '0.9rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    '&:hover': {
      backgroundColor: '#0f766e',
      transform: 'translateY(-2px)',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.85rem',
      padding: '6px 12px',
    },
  },
  mapContainer: {
    position: 'relative',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  mapIframe: {
    width: '100%',
    height: '100%',
    border: 'none',
    display: 'block',
  },
  mapOverlay: {
    position: 'absolute',
    top: '15px',
    left: '15px',
    right: '15px',
    pointerEvents: 'none',
  },
  mapInfoCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    maxWidth: '300px',
    backdropFilter: 'blur(5px)',
    pointerEvents: 'auto',
  },
  mapPinIcon: {
    color: '#ef4444',
    fontSize: '1.8rem',
    flexShrink: 0,
  },
  mapInfoContent: {
    flex: 1,
  },
  mapInfoTitle: {
    color: '#1e293b',
    fontSize: '1rem',
    fontWeight: '600',
    margin: '0 0 5px 0',
  },
  mapInfoAddress: {
    color: '#475569',
    fontSize: '0.85rem',
    margin: '0 0 5px 0',
    lineHeight: '1.4',
  },
  mapInfoCoordinates: {
    color: '#64748b',
    fontSize: '0.8rem',
    margin: 0,
  },
  locationDetails: {
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.08)',
  },
  detailsTitle: {
    color: '#1e293b',
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '15px',
  },
  detailsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  detailsItem: {
    color: '#475569',
    fontSize: '0.9rem',
    lineHeight: '1.5',
    paddingLeft: '20px',
    position: 'relative',
    '&:before': {
      content: '"📍"',
      position: 'absolute',
      left: '0',
      fontSize: '0.9rem',
    },
  },
  
  // Form Section
  formSection: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
  },
  formHeader: {
    marginBottom: '25px',
  },
  formTitle: {
    color: '#1e293b',
    marginBottom: '10px',
    fontWeight: '600',
  },
  formSubtitle: {
    color: '#64748b',
    lineHeight: '1.6',
  },
  
  // Status Message
  statusMessage: {
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  successMessage: {
    backgroundColor: '#d1fae5',
    color: '#065f46',
    border: '1px solid #a7f3d0',
  },
  errorMessage: {
    backgroundColor: '#fee2e2',
    color: '#991b1b',
    border: '1px solid #fecaca',
  },
  
  // Form Styles
  form: {
    marginBottom: '25px',
  },
  formGroup: {
    marginBottom: '20px',
  },
  formRow: {
    display: 'grid',
  },
  formLabel: {
    display: 'block',
    marginBottom: '8px',
    color: '#475569',
    fontWeight: '500',
  },
  required: {
    color: '#ef4444',
  },
  formInput: {
    width: '100%',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    color: '#1e293b',
    backgroundColor: 'white',
    transition: 'all 0.3s',
    '&:focus': {
      outline: 'none',
      borderColor: '#0d9488',
      boxShadow: '0 0 0 3px rgba(13, 148, 136, 0.1)',
    },
  },
  formSelect: {
    width: '100%',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    color: '#1e293b',
    backgroundColor: 'white',
    cursor: 'pointer',
    '&:focus': {
      outline: 'none',
      borderColor: '#0d9488',
      boxShadow: '0 0 0 3px rgba(13, 148, 136, 0.1)',
    },
  },
  formTextarea: {
    width: '100%',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    color: '#1e293b',
    backgroundColor: 'white',
    resize: 'vertical',
    fontFamily: 'inherit',
    '&:focus': {
      outline: 'none',
      borderColor: '#0d9488',
      boxShadow: '0 0 0 3px rgba(13, 148, 136, 0.1)',
    },
  },
  
  // Submit Button
  submitButton: {
    width: '100%',
    backgroundColor: '#0d9488',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    '&:hover': {
      backgroundColor: '#0f766e',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(13, 148, 136, 0.3)',
    },
    '&:disabled': {
      backgroundColor: '#94a3b8',
      cursor: 'not-allowed',
      transform: 'none',
      boxShadow: 'none',
    },
  },
  buttonIcon: {},
  formNote: {
    textAlign: 'center',
    color: '#94a3b8',
    marginTop: '15px',
  },
  
  // Quick Contact
  quickContact: {
    paddingTop: '25px',
    borderTop: '1px solid #e2e8f0',
  },
  quickContactTitle: {
    color: '#1e293b',
    marginBottom: '15px',
    textAlign: 'center',
    fontWeight: '600',
  },
  quickContactButtons: {
    display: 'flex',
  },
  quickButton: {
    flex: '1',
    backgroundColor: '#f1f5f9',
    color: '#475569',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    fontWeight: '500',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    transition: 'all 0.3s',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: '#0d9488',
      color: 'white',
      borderColor: '#0d9488',
    },
  },
  
  // FAQ Section
  faqSection: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
    marginBottom: '60px',
  },
  faqTitle: {
    color: '#1e293b',
    textAlign: 'center',
    fontWeight: '600',
  },
  faqGrid: {
    display: 'grid',
  },
  faqItem: {
    backgroundColor: '#f8fafc',
    borderRadius: '8px',
  },
  faqQuestion: {
    color: '#1e293b',
    marginBottom: '15px',
    fontWeight: '600',
  },
  faqAnswer: {
    color: '#64748b',
    lineHeight: '1.6',
  },
};

export default Contact;
