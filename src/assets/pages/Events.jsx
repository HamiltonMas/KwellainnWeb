import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendar, FaMapMarkerAlt, FaUsers, FaTag, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Sample event images
import event1 from '../pictures/kwela-inn-poster.jpeg';
import event2 from '../pictures/event-1.jpeg';
import event3 from '../images/room-1.jpg';

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const eventCategories = [
    { id: 'all', name: 'All Events', count: 6 },
    { id: 'wedding', name: 'Weddings', count: 2 },
    { id: 'conference', name: 'Conferences', count: 1 },
    { id: 'corporate', name: 'Corporate', count: 1 },
    { id: 'social', name: 'Social', count: 2 },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Day visits',
      date: '2024-03-15',
      time: '10:00 AM - 4:00 PM',
      category: 'wedding',
      location: 'Main Garden Pavilion',
      description: 'Discover the perfect wedding venue and meet top vendors. Free entry with registration.',
      detailedDescription: 'Join us for our annual Summer Wedding Fair, where we showcase the best wedding venues and services in the region. Meet top-rated vendors including florists, photographers, caterers, and wedding planners. This event features live demonstrations, fashion shows, and expert panels on wedding planning.',
      price: 'R100 pp and R70 pk',
      image: event1,
      featured: true,
      seats: '120/150 seats booked',
      tags: ['Wedding', 'Planning', 'Vendors'],
      gallery: [event1, event2, event3],
      amenities: ['Free Parking', 'Welcome Drinks', 'Goodie Bags', 'Vendor Directory'],
      contactPerson: 'Sarah Johnson',
      contactEmail: 'events@kwelainn.co.za',
      contactPhone: '+27 76 511 7835',
      requirements: 'Registration required 24 hours before event',
      terms: 'Cancellation policy: 48 hours notice for full refund'
    },
    {
      id: 2,
      title: 'Music Festival',
      date: '2025-12-30',
      time: '9:00 AM - 5:00 PM',
      category: 'conference',
      location: 'Conference Center',
      description: 'Annual gathering of industry leaders discussing innovation and digital transformation.',
      detailedDescription: 'The Business Innovation Summit brings together thought leaders, entrepreneurs, and executives to explore the latest trends in technology and business transformation.',
      price: 'ZAR 1,500',
      image: event2,
      featured: true,
      seats: '85/120 seats available',
      tags: ['Business', 'Technology', 'Networking'],
      gallery: [event2, event1, event3],
      amenities: ['WiFi', 'Lunch Included', 'Conference Materials', 'Networking Reception'],
      contactPerson: 'David Chen',
      contactEmail: 'conferences@kwelainn.co.za',
      contactPhone: '+27 76 511 7834',
      requirements: 'Business attire recommended',
      terms: 'Group discounts available for 5+ attendees'
    },
    {
      id: 3,
      title: 'Sunset Music Festival',
      date: '2024-04-05',
      time: '6:00 PM - 11:00 PM',
      category: 'social',
      location: 'Poolside Lawn',
      description: 'Live music, food trucks, and cocktails under the stars. Local bands performing.',
      detailedDescription: 'Experience an unforgettable evening of music and entertainment at our Sunset Music Festival.',
      price: 'ZAR 350',
      image: event3,
      featured: false,
      seats: 'Limited tickets',
      tags: ['Music', 'Food', 'Entertainment'],
      gallery: [event3, event1, event2],
      amenities: ['Live Music', 'Food Trucks', 'Cocktail Bar', 'Outdoor Seating'],
      contactPerson: 'Mike Wilson',
      contactEmail: 'entertainment@kwelainn.co.za',
      contactPhone: '+27 76 511 7833',
      requirements: '21+ event, ID required',
      terms: 'No refunds within 7 days of event'
    },
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === selectedCategory);

  const formatDate = (dateString) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getMonth = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
  };

  const handleViewDetails = (event) => {
    setSelectedEvent(event);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
    document.body.style.overflow = 'auto';
  };

  const handleNextImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) => 
        prev === selectedEvent.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedEvent.gallery.length - 1 : prev - 1
      );
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedEvent) return;
      
      if (e.key === 'Escape') {
        handleCloseModal();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedEvent]);

  return (
    <>
      <div className="events-container">
        <section className="events-page" style={{ 
          padding: isMobile ? '100px 0 40px' : '130px 0 60px',
          minHeight: '100vh',
        }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            {/* Hero Header */}
            <div className="hero-header">
              <h1 className="main-title">Events at Kwela Inn</h1>
              <p className="subtitle">
                Discover unforgettable events in our stunning venues. From weddings to corporate gatherings, 
                we create memorable experiences.
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <h3 className="stat-number">15+</h3>
                  <p className="stat-label">Event Spaces</p>
                </div>
                <div className="stat-item">
                  <h3 className="stat-number">500+</h3>
                  <p className="stat-label">Events Hosted</p>
                </div>
                <div className="stat-item">
                  <h3 className="stat-number">98%</h3>
                  <p className="stat-label">Client Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="category-section">
              <h3 className="section-title">Browse by Category</h3>
              <div className="category-filters">
                {eventCategories.map((category) => (
                  <button
                    key={category.id}
                    className={`category-button ${selectedCategory === category.id ? 'active-category' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <span className="category-name">{category.name}</span>
                    <span className="category-count">{category.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Events Banner */}
            <div className="featured-banner">
              <div className="featured-content">
                <h3 className="featured-title">🎉 Featured Event</h3>
                <p className="featured-text">Book 3 months in advance and get 15% off venue rental!</p>
                <Link to="/contact" className="featured-button">
                  Book Now →
                </Link>
              </div>
            </div>

            {/* Events Grid */}
            <div className="events-section">
              <div className="events-header">
                <h2 className="section-title">Upcoming Events</h2>
                <p className="events-count">{filteredEvents.length} events found</p>
              </div>

              {filteredEvents.length === 0 ? (
                <div className="no-events">
                  <p>No events found in this category. Check back soon!</p>
                </div>
              ) : (
                <div className="events-grid">
                  {filteredEvents.map((event) => (
                    <div key={event.id} className="event-card">
                      {event.featured && (
                        <div className="featured-badge">FEATURED</div>
                      )}
                      
                      {/* Event Image with Date Overlay */}
                      <div className="event-image-container">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="event-image"
                        />
                        <div className="date-badge">
                          <div className="date-month">{getMonth(event.date)}</div>
                          <div className="date-day">
                            {new Date(event.date).getDate()}
                          </div>
                        </div>
                      </div>

                      {/* Event Content */}
                      <div className="event-content">
                        <div className="event-header">
                          <h3 className="event-title">{event.title}</h3>
                          <div className="event-price">{event.price}</div>
                        </div>
                        
                        <div className="event-meta">
                          <div className="meta-item">
                            <span className="meta-icon"><FaCalendar /></span>
                            <span>{formatDate(event.date)} • {event.time}</span>
                          </div>
                          <div className="meta-item">
                            <span className="meta-icon"><FaMapMarkerAlt /></span>
                            <span>{event.location}</span>
                          </div>
                          <div className="meta-item">
                            <span className="meta-icon"><FaUsers /></span>
                            <span>{event.seats}</span>
                          </div>
                        </div>

                        <p className="event-description">{event.description}</p>

                        {/* Tags */}
                        <div className="event-tags">
                          {event.tags.map((tag, index) => (
                            <span key={index} className="tag">
                              <FaTag style={{ marginRight: '5px', fontSize: '10px' }} />
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="event-actions">
                          <button 
                            className="details-button"
                            onClick={() => handleViewDetails(event)}
                          >
                            View Details
                          </button>
                          <button className="book-button">
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Section */}
            <div className="cta-section">
              <div className="cta-content">
                <h2 className="cta-title">Host Your Event With Us</h2>
                <p className="cta-text">
                  Let our event specialists help you create an unforgettable experience. 
                  Contact us for a personalized quote and venue tour.
                </p>
                <div className="cta-buttons">
                  <Link to="/contact" className="cta-primary">
                    Get a Quote
                  </Link>
                  <a href="tel:+27765117835" className="cta-secondary">
                    Call: +27 76 511 7835
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Details Modal */}
        {selectedEvent && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              {/* Modal Header with Close Button */}
              <div className="modal-header">
                <h2 className="modal-title">{selectedEvent.title}</h2>
                <button className="close-button" onClick={handleCloseModal}>
                  <FaTimes />
                </button>
              </div>

              <div className="modal-body">
                {/* Image Gallery Section */}
                <div className="gallery-section">
                  <div className="main-image-container">
                    <img 
                      src={selectedEvent.gallery[currentImageIndex]} 
                      alt={`${selectedEvent.title} - Image ${currentImageIndex + 1}`}
                      className="main-image"
                    />
                    
                    {/* Navigation Arrows */}
                    {selectedEvent.gallery.length > 1 && (
                      <>
                        <button className="nav-button left" onClick={handlePrevImage}>
                          <FaChevronLeft />
                        </button>
                        <button className="nav-button right" onClick={handleNextImage}>
                          <FaChevronRight />
                        </button>
                      </>
                    )}
                    
                    {/* Image Counter */}
                    <div className="image-counter">
                      {currentImageIndex + 1} / {selectedEvent.gallery.length}
                    </div>
                  </div>

                  {/* Thumbnail Gallery */}
                  {selectedEvent.gallery.length > 1 && (
                    <div className="thumbnail-gallery">
                      {selectedEvent.gallery.map((img, index) => (
                        <button
                          key={index}
                          className={`thumbnail ${index === currentImageIndex ? 'active-thumbnail' : ''}`}
                          onClick={() => setCurrentImageIndex(index)}
                        >
                          <img 
                            src={img} 
                            alt={`Thumbnail ${index + 1}`}
                            className="thumbnail-image"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Event Details Section */}
                <div className="details-section">
                  <div className="details-grid">
                    {/* Left Column - Event Information */}
                    <div className="event-info-column">
                      <div className="price-section">
                        <span className="event-price-modal">{selectedEvent.price}</span>
                        <span className="price-label">per person</span>
                      </div>

                      <div className="info-card">
                        <h3 className="info-card-title">Event Details</h3>
                        <div className="detail-row">
                          <span className="detail-label"><FaCalendar /> Date & Time</span>
                          <span className="detail-value">
                            {formatDate(selectedEvent.date)} • {selectedEvent.time}
                          </span>
                        </div>
                        <div className="detail-row">
                          <span className="detail-label"><FaMapMarkerAlt /> Location</span>
                          <span className="detail-value">{selectedEvent.location}</span>
                        </div>
                        <div className="detail-row">
                          <span className="detail-label"><FaUsers /> Availability</span>
                          <span className="detail-value">{selectedEvent.seats}</span>
                        </div>
                      </div>

                      <div className="info-card">
                        <h3 className="info-card-title">Amenities Included</h3>
                        <div className="amenities-list">
                          {selectedEvent.amenities.map((amenity, index) => (
                            <div key={index} className="amenity-item">
                              <span className="amenity-icon">✓</span>
                              <span>{amenity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Description and Booking */}
                    <div className="description-column">
                      <div className="description-card">
                        <h3 className="info-card-title">Description</h3>
                        <p className="detailed-description">
                          {selectedEvent.detailedDescription}
                        </p>
                      </div>

                      <div className="tags-section">
                        <h4 className="tags-title">Event Tags</h4>
                        <div className="tags-list">
                          {selectedEvent.tags.map((tag, index) => (
                            <span key={index} className="modal-tag">
                              <FaTag style={{ marginRight: '5px' }} />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="contact-card">
                        <h3 className="info-card-title">Contact for Booking</h3>
                        <div className="contact-details">
                          <p><strong>Contact Person:</strong> {selectedEvent.contactPerson}</p>
                          <p><strong>Email:</strong> {selectedEvent.contactEmail}</p>
                          <p><strong>Phone:</strong> {selectedEvent.contactPhone}</p>
                        </div>
                      </div>

                      {/* Booking Buttons */}
                      <div className="booking-actions">
                        <button className="modal-book-button">
                          Book Now
                        </button>
                        <button className="modal-inquire-button">
                          Send Inquiry
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        /* Global Styles */
        .events-container {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
        }

        /* Hero Header */
        .hero-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .main-title {
          font-size: 2.5rem;
          color: #1e293b;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .subtitle {
          font-size: 1rem;
          color: #64748b;
          max-width: 700px;
          margin: 0 auto 30px;
          line-height: 1.6;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 2rem;
          color: #0d9488;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .stat-label {
          color: #64748b;
          font-size: 0.9rem;
        }

        /* Category Section */
        .category-section {
          margin-bottom: 40px;
        }

        .section-title {
          font-size: 1.8rem;
          color: #1e293b;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .category-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
        }

        .category-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background-color: #f1f5f9;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s;
          color: #475569;
        }

        .category-button:hover {
          background-color: #e2e8f0;
        }

        .active-category {
          background-color: #0d9488;
          color: white;
        }

        .category-name {
          font-size: 0.9rem;
        }

        .category-count {
          background-color: rgba(255,255,255,0.2);
          padding: 2px 6px;
          border-radius: 10px;
          font-size: 0.75rem;
        }

        /* Featured Banner */
        .featured-banner {
          background: linear-gradient(135deg, #0d9488 0%, #14b8a6 100%);
          border-radius: 12px;
          padding: 25px;
          margin-bottom: 40px;
          color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 15px;
        }

        .featured-content {
          display: flex;
          align-items: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        .featured-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0;
        }

        .featured-text {
          font-size: 1rem;
          opacity: 0.9;
          margin: 0;
        }

        .featured-button {
          background-color: white;
          color: #0d9488;
          padding: 10px 25px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s;
          font-size: 0.95rem;
        }

        .featured-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        /* Events Section */
        .events-section {
          margin-bottom: 60px;
        }

        .events-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          flex-wrap: wrap;
          gap: 10px;
        }

        .events-count {
          color: #64748b;
          font-size: 1rem;
        }

        .events-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 25px;
        }

        /* Event Card */
        .event-card {
          background-color: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          position: relative;
        }

        .event-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
        }

        .featured-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background-color: #f59e0b;
          color: white;
          padding: 4px 12px;
          border-radius: 15px;
          font-size: 0.75rem;
          font-weight: 600;
          z-index: 2;
        }

        .event-image-container {
          position: relative;
          height: 180px;
          overflow: hidden;
        }

        .event-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }

        .date-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background-color: white;
          border-radius: 8px;
          text-align: center;
          box-shadow: 0 3px 8px rgba(0,0,0,0.1);
          overflow: hidden;
          min-width: 45px;
        }

        .date-month {
          background-color: #0d9488;
          color: white;
          padding: 4px 8px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .date-day {
          padding: 6px 8px;
          font-size: 1rem;
          font-weight: bold;
          color: #1e293b;
        }

        .event-content {
          padding: 20px;
        }

        .event-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
          flex-wrap: wrap;
          gap: 10px;
        }

        .event-title {
          font-size: 1.3rem;
          color: #1e293b;
          margin: 0;
          flex: 1;
        }

        .event-price {
          font-size: 1.1rem;
          color: #0d9488;
          font-weight: bold;
          margin-left: 10px;
        }

        .event-meta {
          margin-bottom: 12px;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #64748b;
          font-size: 0.85rem;
          margin-bottom: 6px;
        }

        .meta-icon {
          font-size: 0.9rem;
        }

        .event-description {
          color: #475569;
          line-height: 1.6;
          margin-bottom: 15px;
          font-size: 0.9rem;
        }

        .event-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 15px;
        }

        .tag {
          background-color: #f1f5f9;
          color: #475569;
          padding: 3px 10px;
          border-radius: 12px;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
        }

        .event-actions {
          display: flex;
          gap: 10px;
        }

        .details-button {
          flex: 1;
          padding: 8px 16px;
          background-color: transparent;
          border: 2px solid #0d9488;
          color: #0d9488;
          border-radius: 5px;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.85rem;
          transition: all 0.3s;
        }

        .details-button:hover {
          background-color: #0d9488;
          color: white;
        }

        .book-button {
          flex: 1;
          padding: 8px 16px;
          background-color: #0d9488;
          border: 2px solid #0d9488;
          color: white;
          border-radius: 5px;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.85rem;
          transition: all 0.3s;
        }

        .book-button:hover {
          background-color: #0f766e;
        }

        /* CTA Section */
        .cta-section {
          background-color: #1e293b;
          color: white;
          padding: 40px 20px;
          border-radius: 12px;
          text-align: center;
          margin-bottom: 60px;
        }

        .cta-title {
          font-size: 2rem;
          margin-bottom: 15px;
        }

        .cta-text {
          font-size: 1rem;
          opacity: 0.9;
          max-width: 700px;
          margin: 0 auto 30px;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-primary {
          background-color: #0d9488;
          color: white;
          padding: 12px 30px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s;
        }

        .cta-primary:hover {
          background-color: #0f766e;
          transform: translateY(-2px);
        }

        .cta-secondary {
          background-color: transparent;
          color: white;
          padding: 12px 30px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          border: 2px solid white;
          transition: all 0.3s;
        }

        .cta-secondary:hover {
          background-color: white;
          color: #1e293b;
        }

        /* No Events */
        .no-events {
          text-align: center;
          padding: 40px 20px;
          color: #64748b;
          font-size: 1.1rem;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(5px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          overflow-y: auto;
        }

        .modal-content {
          background-color: white;
          border-radius: 15px;
          width: 100%;
          max-width: 1200px;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          animation: fadeIn 0.3s ease;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 25px 30px;
          border-bottom: 1px solid #e2e8f0;
          position: sticky;
          top: 0;
          background-color: white;
          z-index: 10;
          border-top-left-radius: 15px;
          border-top-right-radius: 15px;
        }

        .modal-title {
          font-size: 1.8rem;
          color: #1e293b;
          margin: 0;
          font-weight: 600;
        }

        .close-button {
          background-color: transparent;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #64748b;
          padding: 5px;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }

        .close-button:hover {
          background-color: #f1f5f9;
          color: #ef4444;
        }

        /* Gallery Section */
        .gallery-section {
          padding: 30px;
          border-bottom: 1px solid #e2e8f0;
          background-color: #f8fafc;
        }

        .main-image-container {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          height: 400px;
          margin-bottom: 20px;
        }

        .main-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
        }

        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(255, 255, 255, 0.9);
          border: none;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.2rem;
          color: #1e293b;
          transition: all 0.3s;
          box-shadow: 0 3px 10px rgba(0,0,0,0.2);
        }

        .nav-button:hover {
          background-color: white;
          transform: translateY(-50%) scale(1.1);
        }

        .nav-button.left {
          left: 15px;
        }

        .nav-button.right {
          right: 15px;
        }

        .image-counter {
          position: absolute;
          bottom: 15px;
          right: 15px;
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 0.85rem;
        }

        .thumbnail-gallery {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding: 10px 0;
          scrollbar-width: thin;
        }

        .thumbnail {
          flex: 0 0 auto;
          width: 80px;
          height: 60px;
          border: none;
          border-radius: 5px;
          overflow: hidden;
          cursor: pointer;
          padding: 0;
          opacity: 0.7;
          transition: all 0.3s;
        }

        .thumbnail:hover {
          opacity: 0.9;
        }

        .active-thumbnail {
          opacity: 1;
          border: 3px solid #0d9488;
          transform: scale(1.05);
        }

        .thumbnail-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Details Section */
        .details-section {
          padding: 30px;
        }

        .details-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 30px;
        }

        .price-section {
          background-color: #f0fdfa;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
          margin-bottom: 20px;
        }

        .event-price-modal {
          font-size: 2.5rem;
          color: #0d9488;
          font-weight: bold;
          display: block;
          line-height: 1;
        }

        .price-label {
          color: #64748b;
          font-size: 0.9rem;
        }

        .info-card {
          background-color: white;
          padding: 20px;
          border-radius: 10px;
          margin-bottom: 20px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 3px 10px rgba(0,0,0,0.05);
        }

        .info-card-title {
          font-size: 1.1rem;
          color: #1e293b;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .detail-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid #f1f5f9;
        }

        .detail-label {
          color: #64748b;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .detail-value {
          color: #1e293b;
          font-weight: 500;
          font-size: 0.95rem;
          text-align: right;
        }

        .amenities-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .amenity-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 0;
        }

        .amenity-icon {
          color: #0d9488;
          font-weight: bold;
        }

        .detailed-description {
          color: #475569;
          line-height: 1.7;
          margin: 0;
          font-size: 0.95rem;
        }

        .tags-section {
          background-color: #f8fafc;
          padding: 20px;
          border-radius: 10px;
          margin-bottom: 20px;
        }

        .tags-title {
          font-size: 1rem;
          color: #1e293b;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .tags-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .modal-tag {
          background-color: #e0f2f1;
          color: #0d9488;
          padding: 5px 12px;
          border-radius: 15px;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
        }

        .contact-card {
          background-color: #eff6ff;
          padding: 20px;
          border-radius: 10px;
          margin-bottom: 20px;
          border: 1px solid #bfdbfe;
        }

        .contact-details {
          color: #1e40af;
          font-size: 0.9rem;
        }

        .booking-actions {
          display: flex;
          gap: 15px;
          margin-top: 20px;
        }

        .modal-book-button {
          flex: 1;
          padding: 15px 20px;
          background-color: #0d9488;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .modal-book-button:hover {
          background-color: #0f766e;
          transform: translateY(-2px);
        }

        .modal-inquire-button {
          flex: 1;
          padding: 15px 20px;
          background-color: transparent;
          color: #0d9488;
          border: 2px solid #0d9488;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .modal-inquire-button:hover {
          background-color: #f0fdfa;
        }

        /* Animation */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Styles */
        @media (max-width: 992px) {
          .details-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .main-title {
            font-size: 2rem;
          }
          
          .section-title {
            font-size: 1.5rem;
          }
          
          .modal-title {
            font-size: 1.4rem;
          }
          
          .main-image-container {
            height: 300px;
          }
          
          .gallery-section {
            padding: 20px;
          }
          
          .details-section {
            padding: 20px;
          }
          
          .amenities-list {
            grid-template-columns: 1fr;
          }
          
          .booking-actions {
            flex-direction: column;
          }
        }

        @media (max-width: 480px) {
          .events-grid {
            grid-template-columns: 1fr;
          }
          
          .events-header {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .hero-stats {
            gap: 20px;
          }
          
          .stat-number {
            font-size: 1.5rem;
          }
          
          .featured-banner {
            flex-direction: column;
            text-align: center;
            padding: 20px 15px;
          }
          
          .featured-content {
            flex-direction: column;
            text-align: center;
          }
          
          .cta-buttons {
            flex-direction: column;
          }
          
          .cta-primary,
          .cta-secondary {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Events;