import { useState } from 'react';
import room1 from '../pictures/room-inside-2.jpeg';
import room2 from '../pictures/room-inside-3.jpeg';
import room3 from '../pictures/room-kitchen.jpeg';
import room4 from '../pictures/room-outside.jpeg';
import { FaWifi, FaTv, FaCoffee, FaSnowflake, FaShower, FaBed, FaSwimmingPool, FaCar, FaUtensils, FaConciergeBell } from 'react-icons/fa';
import { MdLocalBar, MdRoomService, MdAcUnit, MdSecurity } from 'react-icons/md';

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const roomTypes = [
    {
      id: 1,
      name: 'Presidential Suite',
      category: 'Luxury',
      description: 'Ultimate luxury with panoramic mountain views, private jacuzzi, and personalized butler service.',
      detailedDescription: 'Our most exclusive suite features a separate living area, dining room, private study, and expansive balcony with breathtaking views. Includes 24/7 butler service and complimentary champagne on arrival.',
      price: 'From ZAR 4,500/night',
      originalPrice: 'ZAR 5,200',
      discount: '15% off',
      image: room1,
      size: '120 m²',
      capacity: '4 guests',
      bedType: 'King & Queen',
      amenities: [
        { icon: <FaWifi />, text: 'High-speed Wi-Fi' },
        { icon: <FaTv />, text: '65" Smart TV' },
        { icon: <FaSnowflake />, text: 'Air Conditioning' },
        { icon: <MdLocalBar />, text: 'Premium Minibar' },
        { icon: <FaShower />, text: 'Rainfall Shower + Jacuzzi' },
        { icon: <FaConciergeBell />, text: '24/7 Butler Service' },
        { icon: <MdRoomService />, text: '24-hour Room Service' },
        { icon: <FaSwimmingPool />, text: 'Private Pool Access' }
      ],
      features: ['Private Balcony', 'Fireplace', 'Study Room', 'Wine Cellar', 'Bose Sound System'],
      rating: 4.9,
      reviews: 128,
      popular: true
    },
    {
      id: 2,
      name: 'Deluxe Garden Suite',
      category: 'Premium',
      description: 'Spacious suite opening to private garden, perfect for couples seeking romance.',
      detailedDescription: 'Wake up to garden views in this beautifully appointed suite. Features a four-poster bed, sitting area with fireplace, and French doors opening to a private garden patio.',
      price: 'From ZAR 2,800/night',
      originalPrice: 'ZAR 3,200',
      discount: '12% off',
      image: room2,
      size: '85 m²',
      capacity: '2 guests',
      bedType: 'King Bed',
      amenities: [
        { icon: <FaWifi />, text: 'High-speed Wi-Fi' },
        { icon: <FaTv />, text: '55" Smart TV' },
        { icon: <FaCoffee />, text: 'Nespresso Machine' },
        { icon: <FaShower />, text: 'Rainfall Shower' },
        { icon: <FaBed />, text: 'Premium Bedding' },
        { icon: <MdAcUnit />, text: 'Climate Control' },
        { icon: <MdSecurity />, text: 'In-room Safe' },
        { icon: <FaUtensils />, text: 'Kitchenette' }
      ],
      features: ['Garden Access', 'Fireplace', 'Private Patio', 'Bathrobes & Slippers'],
      rating: 4.7,
      reviews: 94,
      popular: true
    },
    {
      id: 3,
      name: 'Executive Family Room',
      category: 'Family',
      description: 'Perfect for families with interconnected rooms and child-friendly amenities.',
      detailedDescription: 'Two interconnected rooms with separate sleeping areas for parents and children. Includes gaming console, children\'s entertainment package, and baby amenities on request.',
      price: 'From ZAR 2,200/night',
      image: room3,
      size: '75 m²',
      capacity: '4 guests',
      bedType: 'Queen + Twin Beds',
      amenities: [
        { icon: <FaWifi />, text: 'High-speed Wi-Fi' },
        { icon: <FaTv />, text: 'Dual Smart TVs' },
        { icon: <FaCoffee />, text: 'Coffee Station' },
        { icon: <FaBed />, text: 'Interconnected Rooms' },
        { icon: <MdSecurity />, text: 'Child Safety Features' },
        { icon: <FaUtensils />, text: 'Microwave & Fridge' },
        { icon: <FaCar />, text: 'Free Parking' },
        { icon: <FaConciergeBell />, text: 'Family Concierge' }
      ],
      features: ['Interconnected Rooms', 'Game Console', 'Baby Amenities', 'Extra Beds Available'],
      rating: 4.6,
      reviews: 156,
      familyFriendly: true
    },
    {
      id: 4,
      name: 'Standard Superior Room',
      category: 'Standard',
      description: 'Comfortable and elegant room with all essential amenities for a pleasant stay.',
      detailedDescription: 'Well-appointed room with modern comforts, work desk, and garden views. Perfect for business travelers or couples on a weekend getaway.',
      price: 'From ZAR 1,500/night',
      image: room4,
      size: '45 m²',
      capacity: '2 guests',
      bedType: 'Queen Bed',
      amenities: [
        { icon: <FaWifi />, text: 'High-speed Wi-Fi' },
        { icon: <FaTv />, text: '43" Smart TV' },
        { icon: <FaCoffee />, text: 'Tea/Coffee Maker' },
        { icon: <FaSnowflake />, text: 'Air Conditioning' },
        { icon: <FaShower />, text: 'Modern Bathroom' },
        { icon: <MdSecurity />, text: 'Electronic Safe' },
        { icon: <FaCar />, text: 'Free Parking' },
        { icon: <FaConciergeBell />, text: 'Daily Housekeeping' }
      ],
      features: ['Work Desk', 'Garden View', 'Blackout Curtains', 'Ironing Facilities'],
      rating: 4.4,
      reviews: 203,
      bestValue: true
    }
  ];

  const roomFilters = ['All', 'Luxury', 'Premium', 'Family', 'Standard'];
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredRooms = activeFilter === 'All' 
    ? roomTypes 
    : roomTypes.filter(room => room.category === activeFilter);

  const handleViewDetails = (room) => {
    setSelectedRoom(room);
  };

  const closeDetails = () => {
    setSelectedRoom(null);
  };

  return (
    <>
      <section style={styles.heroSection}>
        <div className="container">
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>Luxury Accommodations</h1>
            <p style={styles.heroSubtitle}>
              Discover our exquisite collection of rooms and suites, each designed to provide 
              exceptional comfort and unforgettable experiences.
            </p>
            <div style={styles.heroStats}>
              <div style={styles.statItem}>
                <div style={styles.statNumber}>4.7</div>
                <div style={styles.statLabel}>Average Rating</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statNumber}>24/7</div>
                <div style={styles.statLabel}>Room Service</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statNumber}>50+</div>
                <div style={styles.statLabel}>Amenities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div className="container">
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Our Room Collection</h2>
            <p style={styles.sectionSubtitle}>
              From luxurious suites to comfortable family rooms, find your perfect retreat
            </p>
          </div>

          {/* Room Filters */}
          <div style={styles.filterContainer}>
            <div style={styles.filterButtons}>
              {roomFilters.map(filter => (
                <button
                  key={filter}
                  style={{
                    ...styles.filterButton,
                    ...(activeFilter === filter ? styles.activeFilter : {})
                  }}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                  {filter !== 'All' && (
                    <span style={styles.filterCount}>
                      {roomTypes.filter(r => r.category === filter).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Rooms Grid */}
          <div style={styles.roomsGrid}>
            {filteredRooms.map((room) => (
              <div key={room.id} style={styles.roomCard}>
                {/* Room Badges */}
                <div style={styles.cardBadges}>
                  {room.popular && (
                    <span style={styles.popularBadge}>Most Popular</span>
                  )}
                  {room.familyFriendly && (
                    <span style={styles.familyBadge}>Family Friendly</span>
                  )}
                  {room.bestValue && (
                    <span style={styles.valueBadge}>Best Value</span>
                  )}
                  {room.discount && (
                    <span style={styles.discountBadge}>{room.discount}</span>
                  )}
                </div>

                {/* Room Image */}
                <div style={styles.imageContainer}>
                  <img 
                    src={room.image} 
                    alt={room.name}
                    style={styles.roomImage}
                  />
                  <div style={styles.imageOverlay}>
                    <span style={styles.roomCategory}>{room.category}</span>
                    <div style={styles.roomRating}>
                      <span style={styles.ratingStars}>★★★★★</span>
                      <span style={styles.ratingText}>{room.rating} ({room.reviews} reviews)</span>
                    </div>
                  </div>
                </div>

                {/* Room Content */}
                <div style={styles.roomContent}>
                  <div style={styles.roomHeader}>
                    <h3 style={styles.roomName}>{room.name}</h3>
                    <div style={styles.roomMeta}>
                      <span style={styles.metaItem}>
                        <span style={styles.metaIcon}>📏</span>
                        {room.size}
                      </span>
                      <span style={styles.metaItem}>
                        <span style={styles.metaIcon}>👥</span>
                        {room.capacity}
                      </span>
                      <span style={styles.metaItem}>
                        <span style={styles.metaIcon}>🛏️</span>
                        {room.bedType}
                      </span>
                    </div>
                  </div>

                  <p style={styles.roomDescription}>{room.description}</p>

                  {/* Amenities */}
                  <div style={styles.amenitiesGrid}>
                    {room.amenities.slice(0, 4).map((amenity, index) => (
                      <div key={index} style={styles.amenityItem}>
                        <span style={styles.amenityIcon}>{amenity.icon}</span>
                        <span style={styles.amenityText}>{amenity.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div style={styles.features}>
                    {room.features.slice(0, 3).map((feature, index) => (
                      <span key={index} style={styles.featureTag}>
                        {feature}
                      </span>
                    ))}
                    {room.features.length > 3 && (
                      <span style={styles.moreFeatures}>+{room.features.length - 3} more</span>
                    )}
                  </div>

                  {/* Price & Action */}
                  <div style={styles.actionSection}>
                    <div style={styles.priceSection}>
                      {room.originalPrice && (
                        <div style={styles.originalPrice}>{room.originalPrice}</div>
                      )}
                      <div style={styles.price}>{room.price}</div>
                      <div style={styles.priceNote}>Including taxes & fees</div>
                    </div>
                    <div style={styles.actionButtons}>
                      <button 
                        style={styles.detailsButton}
                        onClick={() => handleViewDetails(room)}
                      >
                        View Details
                      </button>
                      <button style={styles.bookButton}>
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* All Amenities Section */}
          <div style={styles.allAmenities}>
            <h3 style={styles.amenitiesTitle}>All Room Amenities</h3>
            <div style={styles.amenitiesGridFull}>
              <div style={styles.amenityCategory}>
                <h4 style={styles.amenityCategoryTitle}>Technology</h4>
                <ul style={styles.amenityList}>
                  <li style={styles.amenityListItem}>High-speed Wi-Fi throughout</li>
                  <li style={styles.amenityListItem}>Smart TVs with streaming</li>
                  <li style={styles.amenityListItem}>USB charging ports</li>
                  <li style={styles.amenityListItem}>Bluetooth speakers</li>
                </ul>
              </div>
              <div style={styles.amenityCategory}>
                <h4 style={styles.amenityCategoryTitle}>Comfort</h4>
                <ul style={styles.amenityList}>
                  <li style={styles.amenityListItem}>Premium bedding & pillows</li>
                  <li style={styles.amenityListItem}>Blackout curtains</li>
                  <li style={styles.amenityListItem}>Individual climate control</li>
                  <li style={styles.amenityListItem}>Soundproof windows</li>
                </ul>
              </div>
              <div style={styles.amenityCategory}>
                <h4 style={styles.amenityCategoryTitle}>Bathroom</h4>
                <ul style={styles.amenityList}>
                  <li style={styles.amenityListItem}>Rainfall showers</li>
                  <li style={styles.amenityListItem}>Luxury toiletries</li>
                  <li style={styles.amenityListItem}>Hairdryers</li>
                  <li style={styles.amenityListItem}>Bathrobes & slippers</li>
                </ul>
              </div>
              <div style={styles.amenityCategory}>
                <h4 style={styles.amenityCategoryTitle}>Services</h4>
                <ul style={styles.amenityList}>
                  <li style={styles.amenityListItem}>24-hour room service</li>
                  <li style={styles.amenityListItem}>Daily housekeeping</li>
                  <li style={styles.amenityListItem}>Turndown service</li>
                  <li style={styles.amenityListItem}>Laundry & dry cleaning</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div style={styles.ctaSection}>
            <div style={styles.ctaContent}>
              <h3 style={styles.ctaTitle}>Need Help Choosing?</h3>
              <p style={styles.ctaText}>
                Our concierge team is available 24/7 to help you select the perfect room 
                and arrange any special requests.
              </p>
              <div style={styles.ctaButtons}>
                <button style={styles.ctaButtonPrimary}>
                  Contact Concierge
                </button>
                <a href="tel:+27765117835" style={styles.ctaButtonSecondary}>
                  Call: +27 76 511 7835
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Details Modal */}
      {selectedRoom && (
        <div style={styles.modalOverlay} onClick={closeDetails}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.modalClose} onClick={closeDetails}>✕</button>
            
            <div style={styles.modalGrid}>
              <div style={styles.modalImage}>
                <img src={selectedRoom.image} alt={selectedRoom.name} style={styles.modalImg} />
              </div>
              
              <div style={styles.modalInfo}>
                <h2 style={styles.modalTitle}>{selectedRoom.name}</h2>
                <p style={styles.modalCategory}>{selectedRoom.category} Suite</p>
                
                <div style={styles.modalStats}>
                  <div style={styles.modalStat}>
                    <strong>Size:</strong> {selectedRoom.size}
                  </div>
                  <div style={styles.modalStat}>
                    <strong>Capacity:</strong> {selectedRoom.capacity}
                  </div>
                  <div style={styles.modalStat}>
                    <strong>Bed Type:</strong> {selectedRoom.bedType}
                  </div>
                  <div style={styles.modalStat}>
                    <strong>Rating:</strong> {selectedRoom.rating}/5 ({selectedRoom.reviews} reviews)
                  </div>
                </div>
                
                <p style={styles.modalDescription}>{selectedRoom.detailedDescription}</p>
                
                <div style={styles.modalAmenities}>
                  <h4>All Amenities</h4>
                  <div style={styles.modalAmenitiesGrid}>
                    {selectedRoom.amenities.map((amenity, index) => (
                      <div key={index} style={styles.modalAmenity}>
                        {amenity.icon}
                        <span>{amenity.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div style={styles.modalFeatures}>
                  <h4>Special Features</h4>
                  <div style={styles.modalFeaturesList}>
                    {selectedRoom.features.map((feature, index) => (
                      <span key={index} style={styles.modalFeatureTag}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div style={styles.modalAction}>
                  <div style={styles.modalPrice}>
                    <div style={styles.modalPriceMain}>{selectedRoom.price}</div>
                    {selectedRoom.originalPrice && (
                      <div style={styles.modalPriceOld}>{selectedRoom.originalPrice}</div>
                    )}
                  </div>
                  <button style={styles.modalBookButton}>Book This Room</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  // Hero Section
  heroSection: {
    background: 'linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)',
    color: 'white',
    padding: '80px 0 60px',
    marginTop: '70px',
    '@media (max-width: 768px)': {
      padding: '60px 0 40px',
    },
    '@media (max-width: 480px)': {
      padding: '40px 0 30px',
      marginTop: '60px',
    },
  },
  heroContent: {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 20px',
  },
  heroTitle: {
    fontSize: '2.8rem',
    fontWeight: '700',
    marginBottom: '15px',
    '@media (max-width: 768px)': {
      fontSize: '2.2rem',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.8rem',
    },
  },
  heroSubtitle: {
    fontSize: '1.1rem',
    opacity: '0.9',
    marginBottom: '30px',
    lineHeight: '1.6',
    '@media (max-width: 768px)': {
      fontSize: '1rem',
      padding: '0 10px',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9rem',
    },
  },
  heroStats: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    flexWrap: 'wrap',
    '@media (max-width: 768px)': {
      gap: '30px',
    },
    '@media (max-width: 480px)': {
      gap: '20px',
    },
  },
  statItem: {
    textAlign: 'center',
  },
  statNumber: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '5px',
    '@media (max-width: 768px)': {
      fontSize: '1.8rem',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.5rem',
    },
  },
  statLabel: {
    fontSize: '0.9rem',
    opacity: '0.8',
    '@media (max-width: 480px)': {
      fontSize: '0.8rem',
    },
  },

  // Main Section
  section: {
    padding: '60px 0',
    '@media (max-width: 768px)': {
      padding: '40px 0',
    },
    '@media (max-width: 480px)': {
      padding: '30px 0',
    },
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '40px',
    padding: '0 20px',
  },
  sectionTitle: {
    fontSize: '2.3rem',
    color: '#1e293b',
    marginBottom: '15px',
    fontWeight: '700',
    '@media (max-width: 768px)': {
      fontSize: '1.8rem',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.5rem',
    },
  },
  sectionSubtitle: {
    color: '#64748b',
    fontSize: '1rem',
    maxWidth: '600px',
    margin: '0 auto',
    '@media (max-width: 480px)': {
      fontSize: '0.9rem',
    },
  },

  // Filters
  filterContainer: {
    marginBottom: '30px',
    padding: '0 20px',
  },
  filterButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
    flexWrap: 'wrap',
  },
  filterButton: {
    padding: '8px 20px',
    backgroundColor: '#f1f5f9',
    border: 'none',
    borderRadius: '30px',
    color: '#475569',
    cursor: 'pointer',
    fontWeight: '500',
    fontSize: '0.9rem',
    transition: 'all 0.3s',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    '@media (max-width: 480px)': {
      padding: '6px 16px',
      fontSize: '0.85rem',
    },
  },
  activeFilter: {
    backgroundColor: '#0d9488',
    color: 'white',
  },
  filterCount: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: '2px 6px',
    borderRadius: '10px',
    fontSize: '0.75rem',
  },

  // Rooms Grid
  roomsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '30px',
    marginBottom: '60px',
    padding: '0 20px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '25px',
    },
    '@media (max-width: 480px)': {
      gridTemplateColumns: '1fr',
      gap: '20px',
    },
  },

  // Room Card
  roomCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.3s ease',
    position: 'relative',
  },
  cardBadges: {
    position: 'absolute',
    top: '12px',
    left: '12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    zIndex: '2',
    '@media (max-width: 480px)': {
      top: '8px',
      left: '8px',
    },
  },
  popularBadge: {
    backgroundColor: '#f59e0b',
    color: 'white',
    padding: '5px 12px',
    borderRadius: '15px',
    fontSize: '0.75rem',
    fontWeight: '600',
    '@media (max-width: 480px)': {
      padding: '4px 10px',
      fontSize: '0.7rem',
    },
  },
  familyBadge: {
    backgroundColor: '#3b82f6',
    color: 'white',
    padding: '5px 12px',
    borderRadius: '15px',
    fontSize: '0.75rem',
    fontWeight: '600',
  },
  valueBadge: {
    backgroundColor: '#10b981',
    color: 'white',
    padding: '5px 12px',
    borderRadius: '15px',
    fontSize: '0.75rem',
    fontWeight: '600',
  },
  discountBadge: {
    backgroundColor: '#ef4444',
    color: 'white',
    padding: '5px 12px',
    borderRadius: '15px',
    fontSize: '0.75rem',
    fontWeight: '600',
  },
  imageContainer: {
    position: 'relative',
    height: '220px',
    overflow: 'hidden',
    '@media (max-width: 480px)': {
      height: '200px',
    },
  },
  roomImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
    padding: '15px',
    color: 'white',
  },
  roomCategory: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: '500',
    backdropFilter: 'blur(5px)',
  },
  roomRating: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '8px',
  },
  ratingStars: {
    color: '#fbbf24',
    fontSize: '0.9rem',
  },
  ratingText: {
    fontSize: '0.8rem',
    opacity: '0.9',
  },
  roomContent: {
    padding: '20px',
  },
  roomHeader: {
    marginBottom: '12px',
  },
  roomName: {
    fontSize: '1.5rem',
    color: '#1e293b',
    marginBottom: '8px',
    fontWeight: '600',
    '@media (max-width: 480px)': {
      fontSize: '1.3rem',
    },
  },
  roomMeta: {
    display: 'flex',
    gap: '15px',
    color: '#64748b',
    fontSize: '0.85rem',
    flexWrap: 'wrap',
    '@media (max-width: 480px)': {
      fontSize: '0.8rem',
      gap: '12px',
    },
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  metaIcon: {
    fontSize: '0.9rem',
  },
  roomDescription: {
    color: '#64748b',
    marginBottom: '15px',
    lineHeight: '1.6',
    fontSize: '0.9rem',
    '@media (max-width: 480px)': {
      fontSize: '0.85rem',
    },
  },
  amenitiesGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
    marginBottom: '15px',
  },
  amenityItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#475569',
    fontSize: '0.85rem',
  },
  amenityIcon: {
    color: '#0d9488',
    fontSize: '0.9rem',
  },
  amenityText: {
    fontSize: '0.8rem',
  },
  features: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
    marginBottom: '20px',
  },
  featureTag: {
    backgroundColor: '#f0f9ff',
    color: '#0d9488',
    padding: '5px 10px',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: '500',
  },
  moreFeatures: {
    color: '#94a3b8',
    fontSize: '0.75rem',
    alignSelf: 'center',
  },
  actionSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '15px',
    '@media (max-width: 480px)': {
      flexDirection: 'column',
      alignItems: 'stretch',
    },
  },
  priceSection: {
    flex: '1',
    minWidth: '150px',
  },
  originalPrice: {
    color: '#94a3b8',
    textDecoration: 'line-through',
    fontSize: '0.85rem',
    marginBottom: '2px',
  },
  price: {
    fontSize: '1.5rem',
    color: '#0d9488',
    fontWeight: 'bold',
    marginBottom: '2px',
    '@media (max-width: 480px)': {
      fontSize: '1.3rem',
    },
  },
  priceNote: {
    color: '#94a3b8',
    fontSize: '0.75rem',
  },
  actionButtons: {
    display: 'flex',
    gap: '10px',
    '@media (max-width: 480px)': {
      width: '100%',
    },
  },
  detailsButton: {
    padding: '8px 16px',
    backgroundColor: 'transparent',
    border: '2px solid #0d9488',
    color: '#0d9488',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.85rem',
    transition: 'all 0.3s',
    '@media (max-width: 480px)': {
      flex: '1',
      padding: '10px',
    },
  },
  bookButton: {
    padding: '8px 20px',
    backgroundColor: '#0d9488',
    border: '2px solid #0d9488',
    color: 'white',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.85rem',
    transition: 'all 0.3s',
    '@media (max-width: 480px)': {
      flex: '1',
      padding: '10px',
    },
  },

  // All Amenities
  allAmenities: {
    backgroundColor: '#f8fafc',
    padding: '40px 20px',
    borderRadius: '12px',
    marginBottom: '40px',
    '@media (max-width: 768px)': {
      padding: '30px 20px',
    },
    '@media (max-width: 480px)': {
      padding: '20px 15px',
    },
  },
  amenitiesTitle: {
    fontSize: '1.6rem',
    color: '#1e293b',
    marginBottom: '25px',
    textAlign: 'center',
    '@media (max-width: 768px)': {
      fontSize: '1.4rem',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.2rem',
      marginBottom: '20px',
    },
  },
  amenitiesGridFull: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '30px',
    '@media (max-width: 480px)': {
      gridTemplateColumns: '1fr',
      gap: '20px',
    },
  },
  amenityCategoryTitle: {
    color: '#0d9488',
    fontSize: '1.1rem',
    marginBottom: '12px',
    fontWeight: '600',
    '@media (max-width: 480px)': {
      fontSize: '1rem',
    },
  },
  amenityList: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },
  amenityListItem: {
    color: '#475569',
    padding: '6px 0',
    borderBottom: '1px solid #e2e8f0',
    fontSize: '0.9rem',
    '@media (max-width: 480px)': {
      fontSize: '0.85rem',
    },
  },

  // CTA Section
  ctaSection: {
    textAlign: 'center',
    padding: '40px 20px',
    backgroundColor: '#1e293b',
    borderRadius: '12px',
    color: 'white',
    '@media (max-width: 480px)': {
      padding: '30px 15px',
    },
  },
  ctaContent: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  ctaTitle: {
    fontSize: '1.6rem',
    marginBottom: '15px',
    '@media (max-width: 768px)': {
      fontSize: '1.4rem',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.2rem',
    },
  },
  ctaText: {
    fontSize: '1rem',
    opacity: '0.9',
    marginBottom: '25px',
    lineHeight: '1.6',
    '@media (max-width: 480px)': {
      fontSize: '0.9rem',
    },
  },
  ctaButtons: {
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  ctaButtonPrimary: {
    padding: '10px 25px',
    backgroundColor: '#0d9488',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '0.95rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s',
    '@media (max-width: 480px)': {
      padding: '8px 20px',
      fontSize: '0.9rem',
      flex: '1',
    },
  },
  ctaButtonSecondary: {
    padding: '10px 25px',
    backgroundColor: 'transparent',
    color: 'white',
    border: '2px solid white',
    borderRadius: '6px',
    fontSize: '0.95rem',
    fontWeight: '600',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s',
    display: 'inline-block',
    '@media (max-width: 480px)': {
      padding: '8px 20px',
      fontSize: '0.9rem',
      flex: '1',
    },
  },

  // Modal
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 2000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    '@media (max-width: 768px)': {
      padding: '15px',
    },
    '@media (max-width: 480px)': {
      padding: '10px',
    },
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: '12px',
    maxWidth: '900px',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto',
    position: 'relative',
    '@media (max-width: 768px)': {
      maxWidth: '95%',
    },
  },
  modalClose: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    backgroundColor: 'rgba(0,0,0,0.1)',
    color: '#1e293b',
    border: 'none',
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    fontSize: '1rem',
    cursor: 'pointer',
    zIndex: 2001,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s',
    '@media (max-width: 480px)': {
      width: '30px',
      height: '30px',
      fontSize: '0.9rem',
    },
  },
  modalGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '0',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
  modalImage: {
    height: '450px',
    '@media (max-width: 768px)': {
      height: '300px',
    },
  },
  modalImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderTopLeftRadius: '12px',
    borderBottomLeftRadius: '12px',
    '@media (max-width: 768px)': {
      borderTopLeftRadius: '12px',
      borderTopRightRadius: '12px',
      borderBottomLeftRadius: '0',
    },
  },
  modalInfo: {
    padding: '30px',
    '@media (max-width: 768px)': {
      padding: '25px',
    },
    '@media (max-width: 480px)': {
      padding: '20px',
    },
  },
  modalTitle: {
    fontSize: '1.8rem',
    color: '#1e293b',
    marginBottom: '8px',
    '@media (max-width: 768px)': {
      fontSize: '1.6rem',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.4rem',
    },
  },
  modalCategory: {
    color: '#0d9488',
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '15px',
  },
  modalStats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px',
    marginBottom: '20px',
    padding: '15px',
    backgroundColor: '#f8fafc',
    borderRadius: '8px',
    '@media (max-width: 480px)': {
      gridTemplateColumns: '1fr',
      gap: '8px',
    },
  },
  modalStat: {
    color: '#475569',
    fontSize: '0.9rem',
  },
  modalDescription: {
    color: '#64748b',
    lineHeight: '1.6',
    marginBottom: '25px',
    fontSize: '0.95rem',
  },
  modalAmenities: {
    marginBottom: '25px',
  },
  modalAmenitiesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px',
    marginTop: '12px',
    '@media (max-width: 480px)': {
      gridTemplateColumns: '1fr',
    },
  },
  modalAmenity: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#475569',
    fontSize: '0.9rem',
  },
  modalFeatures: {
    marginBottom: '25px',
  },
  modalFeaturesList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '12px',
  },
  modalFeatureTag: {
    backgroundColor: '#f0f9ff',
    color: '#0d9488',
    padding: '6px 12px',
    borderRadius: '15px',
    fontSize: '0.85rem',
    fontWeight: '500',
  },
  modalAction: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '15px',
    borderTop: '1px solid #e2e8f0',
    flexWrap: 'wrap',
    gap: '15px',
    '@media (max-width: 480px)': {
      flexDirection: 'column',
      alignItems: 'stretch',
    },
  },
  modalPrice: {
    flex: '1',
  },
  modalPriceMain: {
    fontSize: '1.8rem',
    color: '#0d9488',
    fontWeight: 'bold',
    '@media (max-width: 480px)': {
      fontSize: '1.5rem',
    },
  },
  modalPriceOld: {
    color: '#94a3b8',
    textDecoration: 'line-through',
    fontSize: '1rem',
  },
  modalBookButton: {
    padding: '12px 30px',
    backgroundColor: '#0d9488',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s',
    '@media (max-width: 480px)': {
      width: '100%',
      padding: '12px',
    },
  },
};

// Add hover effects
const addHoverEffects = {
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.12)',
  }
};

// Apply hover effects to room cards
styles.roomCard = {
  ...styles.roomCard,
  ...addHoverEffects
};

// Apply hover effects to buttons
const buttonHover = {
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 5px 15px rgba(13, 148, 136, 0.2)',
  }
};

styles.detailsButton = {
  ...styles.detailsButton,
  '&:hover': {
    ...buttonHover['&:hover'],
    backgroundColor: '#0d9488',
    color: 'white',
  }
};

styles.bookButton = {
  ...styles.bookButton,
  ...buttonHover
};

styles.ctaButtonPrimary = {
  ...styles.ctaButtonPrimary,
  ...buttonHover
};

styles.ctaButtonSecondary = {
  ...styles.ctaButtonSecondary,
  '&:hover': {
    ...buttonHover['&:hover'],
    backgroundColor: 'white',
    color: '#1e293b',
  }
};

styles.modalClose = {
  ...styles.modalClose,
  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.2)',
  }
};

export default Rooms;