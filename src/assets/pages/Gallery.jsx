import { useState } from 'react';
import { Link } from 'react-router-dom';

// Import images - you'll need to download these from Unsplash/Pexels
// Save them with these names in src/assets/images/
import gallery1 from '../pictures/pool-2.jpeg';
import gallery2 from '../pictures/pool-3.jpeg';
import gallery3 from '../pictures/pool-4.jpeg';
import gallery4 from '../pictures/kids-pool.jpeg';
import gallery5 from '../pictures/kids-pool-2.jpeg';
import gallery6 from '../pictures/pool-2.jpeg';

import Dellux from '../pictures/room-inside-2.jpeg';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryCategories = [
    { id: 'all', name: 'All Facilities', count: 24 },
    { id: 'pool', name: 'Swimming Pools', count: 5 },
    { id: 'rooms', name: 'Rooms & Suites', count: 8 },
    { id: 'braai', name: 'Braai Stands', count: 4 },
    { id: 'slides', name: 'Pool Slides', count: 3 },
    { id: 'dining', name: 'Dining Areas', count: 4 },
  ];

  const galleryItems = [
    // Swimming Pools
    {
      id: 1,
      title: 'Infinity Pool',
      description: 'Stunning infinity pool with panoramic views of the surrounding landscape',
      category: 'pool',
      image: gallery1,
      featured: true,
      tags: ['Infinity Edge', 'Panoramic View', 'Luxury'],
    },
    {
      id: 2,
      title: 'Family Pool',
      description: 'Large family-friendly pool with shallow end for children',
      category: 'pool',
      image: gallery2,
      featured: false,
      tags: ['Family Friendly', 'Shallow End', 'Sun Loungers'],
    },
    {
      id: 3,
      title: 'Lap Pool',
      description: '25-meter lap pool for fitness enthusiasts',
      category: 'pool',
      image: gallery3,
      featured: false,
      tags: ['Fitness', '25m Length', 'Professional'],
    },
    {
      id: 4,
      title: 'Jacuzzi Pool',
      description: 'Heated jacuzzi pool with massage jets',
      category: 'pool',
      image: gallery4,
      featured: true,
      tags: ['Heated', 'Massage Jets', 'Relaxation'],
    },
    {
      id: 5,
      title: 'Kids Splash Pool',
      description: 'Safe splash pool with water features for young children',
      category: 'pool',
      image: gallery5,
      featured: false,
      tags: ['Kids Area', 'Water Features', 'Safety First'],
    },

    // Rooms & Suites
    {
      id: 6,
      title: 'Deluxe Suite',
      description: 'Spacious suite with king bed, balcony, and luxury bathroom',
      category: 'rooms',
      image: Dellux,
      featured: true,
      tags: ['King Bed', 'Balcony', 'Luxury Bathroom'],
    },
    {
      id: 7,
      title: 'Executive Room',
      description: 'Comfortable room with garden view and modern amenities',
      category: 'rooms',
      image: gallery1,
      featured: false,
      tags: ['Garden View', 'Modern', 'Comfort'],
    },
    {
      id: 8,
      title: 'Family Room',
      description: 'Two-bedroom suite perfect for families',
      category: 'rooms',
      image: gallery2,
      featured: false,
      tags: ['Two Bedrooms', 'Family Size', 'Connected'],
    },
    {
      id: 9,
      title: 'Honeymoon Suite',
      description: 'Romantic suite with private patio and jacuzzi',
      category: 'rooms',
      image: gallery3,
      featured: true,
      tags: ['Romantic', 'Private Jacuzzi', 'Luxury'],
    },

    // Braai Stands
    {
      id: 10,
      title: 'Main Braai Area',
      description: 'Central braai area with multiple stations and seating',
      category: 'braai',
      image: gallery4,
      featured: true,
      tags: ['Multiple Stations', 'Group Seating', 'Outdoor'],
    },
    {
      id: 11,
      title: 'Private Braai Patio',
      description: 'Private braai patio attached to premium suites',
      category: 'braai',
      image: gallery5,
      featured: false,
      tags: ['Private', 'Suite Access', 'Intimate'],
    },
    {
      id: 12,
      title: 'Garden Braai',
      description: 'Braai area surrounded by beautiful garden scenery',
      category: 'braai',
      image: gallery6,
      featured: false,
      tags: ['Garden View', 'Natural Setting', 'Tranquil'],
    },

    // Pool Slides
    {
      id: 13,
      title: 'Double Waterslide',
      description: 'Exciting double waterslide for racing fun',
      category: 'slides',
      image: gallery1,
      featured: true,
      tags: ['Double Lane', 'Racing', 'Exciting'],
    },
    {
      id: 14,
      title: 'Twister Slide',
      description: 'Spiral waterslide with thrilling twists and turns',
      category: 'slides',
      image: gallery2,
      featured: false,
      tags: ['Spiral', 'Thrilling', 'Adventure'],
    },
    {
      id: 15,
      title: 'Kids Slide',
      description: 'Gentle slide perfect for young children',
      category: 'slides',
      image: gallery3,
      featured: false,
      tags: ['Gentle', 'Kids Friendly', 'Safe'],
    },

    // Dining Areas
    {
      id: 16,
      title: 'Main Restaurant',
      description: 'Elegant dining room with buffet and à la carte options',
      category: 'dining',
      image: gallery4,
      featured: true,
      tags: ['Buffet', 'À La Carte', 'Elegant'],
    },
    {
      id: 17,
      title: 'Poolside Bar',
      description: 'Casual dining and drinks by the pool',
      category: 'dining',
      image: gallery5,
      featured: false,
      tags: ['Casual', 'Pool View', 'Bar'],
    },
    {
      id: 18,
      title: 'Outdoor Terrace',
      description: 'Al fresco dining with stunning sunset views',
      category: 'dining',
      image: gallery6,
      featured: true,
      tags: ['Outdoor', 'Sunset View', 'Al Fresco'],
    },
    {
      id: 19,
      title: 'Private Dining',
      description: 'Intimate private dining room for special occasions',
      category: 'dining',
      image: gallery1,
      featured: false,
      tags: ['Private', 'Intimate', 'Special Occasions'],
    },

    // Additional images for each category
    { id: 20, title: 'Pool Bar View', description: 'View from the pool bar', category: 'pool', image: gallery2, featured: false, tags: ['Bar View', 'Scenic'] },
    { id: 21, title: 'Suite Living Area', description: 'Luxurious living area in deluxe suite', category: 'rooms', image: gallery3, featured: false, tags: ['Living Area', 'Luxury'] },
    { id: 22, title: 'Braai Preparation', description: 'Modern braai preparation area', category: 'braai', image: gallery4, featured: false, tags: ['Preparation', 'Modern'] },
    { id: 23, title: 'Slide Entrance', description: 'Entrance to the thrilling waterslide', category: 'slides', image: gallery5, featured: false, tags: ['Entrance', 'Thrilling'] },
    { id: 24, title: 'Breakfast Buffet', description: 'Morning breakfast buffet spread', category: 'dining', image: gallery6, featured: false, tags: ['Breakfast', 'Buffet'] },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const handleImageClick = (item, index) => {
    setSelectedImage(item);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'pool': return '🏊‍♂️';
      case 'rooms': return '🛏️';
      case 'braai': return '🔥';
      case 'slides': return '🌊';
      case 'dining': return '🍽️';
      default: return '📸';
    }
  };

  const getCategoryDescription = (category) => {
    switch(category) {
      case 'pool': return 'Discover our stunning swimming facilities';
      case 'rooms': return 'Explore our luxurious accommodations';
      case 'braai': return 'Experience authentic South African braai culture';
      case 'slides': return 'Thrilling water slides for all ages';
      case 'dining': return 'Indulge in exquisite culinary experiences';
      default: return 'Explore all our world-class facilities';
    }
  };

  return (
    <section className="gallery-page" style={{ 
      padding: '130px 0 60px',
      '@media (max-width: 768px)': { padding: '60px 0 40px' },
      '@media (max-width: 480px)': { padding: '40px 0 30px' }
    }}>
      <div className="container" style={{ padding: '0 20px' }}>
        {/* Hero Header */}
        <div style={styles.heroHeader}>
          <h1 style={styles.mainTitle}>Kwela Inn Gallery</h1>
          <p style={styles.subtitle}>
            Immerse yourself in the beauty and luxury of Kwela Inn. Explore our world-class facilities 
            and discover why we're Limpopo's premier hospitality destination.
          </p>
        </div>

        {/* Category Filter with Icons */}
        <div style={styles.categorySection}>
          <h3 style={styles.sectionTitle}>Explore Our Facilities</h3>
          <p style={styles.categoryDescription}>
            Browse through our diverse range of amenities and experiences
          </p>
          
          <div style={styles.categoryGrid}>
            {galleryCategories.map((category) => (
              <div
                key={category.id}
                style={{
                  ...styles.categoryCard,
                  ...(selectedCategory === category.id ? styles.activeCategoryCard : {})
                }}
                onClick={() => setSelectedCategory(category.id)}
              >
                <div style={styles.categoryIcon}>{getCategoryIcon(category.id)}</div>
                <h4 style={styles.categoryName}>{category.name}</h4>
                <p style={styles.categoryCount}>{category.count} photos</p>
                <p style={styles.categoryDesc}>{getCategoryDescription(category.id)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Highlights */}
        <div style={styles.highlightsSection}>
          <h3 style={styles.sectionTitle}>Featured Highlights</h3>
          <div style={styles.highlightsGrid}>
            <div style={styles.highlightCard}>
              <div style={styles.highlightIcon}>🌟</div>
              <h4 style={styles.highlightTitle}>Award-Winning Design</h4>
              <p style={styles.highlightText}>Recognized for architectural excellence and sustainable design</p>
            </div>
            <div style={styles.highlightCard}>
              <div style={styles.highlightIcon}>💎</div>
              <h4 style={styles.highlightTitle}>Premium Amenities</h4>
              <p style={styles.highlightText}>State-of-the-art facilities for ultimate comfort and enjoyment</p>
            </div>
            <div style={styles.highlightCard}>
              <div style={styles.highlightIcon}>🌿</div>
              <h4 style={styles.highlightTitle}>Natural Beauty</h4>
              <p style={styles.highlightText}>Seamlessly integrated with Limpopo's stunning natural landscape</p>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div style={styles.gallerySection}>
          <div style={styles.galleryHeader}>
            <h2 style={styles.sectionTitle}>
              {selectedCategory === 'all' ? 'All Facilities' : galleryCategories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p style={styles.galleryCount}>{filteredItems.length} photos available</p>
          </div>

          {filteredItems.length === 0 ? (
            <div style={styles.noPhotos}>
              <p>No photos found in this category.</p>
            </div>
          ) : (
            <div style={styles.galleryGrid}>
              {filteredItems.map((item, index) => (
                <div 
                  key={item.id} 
                  style={styles.galleryItem}
                  onClick={() => handleImageClick(item, index)}
                >
                  {item.featured && (
                    <div style={styles.featuredBadge}>FEATURED</div>
                  )}
                  
                  <div style={styles.imageContainer}>
                    <img 
                      src={item.image} 
                      alt={item.title}
                      style={styles.galleryImage}
                    />
                    <div style={styles.imageOverlay}>
                      <span style={styles.categoryTag}>
                        {getCategoryIcon(item.category)} {item.category.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <div style={styles.itemContent}>
                    <h3 style={styles.itemTitle}>{item.title}</h3>
                    <p style={styles.itemDescription}>{item.description}</p>
                    
                    <div style={styles.tagsContainer}>
                      {item.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} style={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button style={styles.viewButton}>
                      <span style={styles.viewIcon}>👁️</span> View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Facilities Overview */}
        <div style={styles.facilitiesSection}>
          <div style={styles.facilitiesContent}>
            <h2 style={styles.sectionTitle}>World-Class Facilities</h2>
            <p style={styles.facilitiesDescription}>
              Kwela Inn offers an unparalleled range of amenities designed to provide 
              exceptional experiences for every guest. From thrilling water slides to 
              luxurious dining, discover what makes us unique.
            </p>
            
            <div style={styles.facilityCards}>
              <div style={styles.facilityCard}>
                <h4 style={styles.facilityTitle}>🏊‍♂️ Swimming Pools</h4>
                <ul style={styles.facilityList}>
                  <li>Infinity pool with panoramic views</li>
                  <li>Family-friendly main pool</li>
                  <li>25-meter lap pool</li>
                  <li>Heated Jacuzzi pool</li>
                  <li>Children's splash pool</li>
                </ul>
              </div>
              
              <div style={styles.facilityCard}>
                <h4 style={styles.facilityTitle}>🛏️ Accommodations</h4>
                <ul style={styles.facilityList}>
                  <li>Luxury suites with private balconies</li>
                  <li>Family rooms with connecting doors</li>
                  <li>Romantic honeymoon suites</li>
                  <li>Executive rooms with garden views</li>
                  <li>24-hour room service</li>
                </ul>
              </div>
              
              <div style={styles.facilityCard}>
                <h4 style={styles.facilityTitle}>🔥 Braai Experience</h4>
                <ul style={styles.facilityList}>
                  <li>Multiple braai stations</li>
                  <li>Private braai patios</li>
                  <li>Garden braai areas</li>
                  <li>Professional braai equipment</li>
                  <li>Firewood provided</li>
                </ul>
              </div>
              
              <div style={styles.facilityCard}>
                <h4 style={styles.facilityTitle}>🌊 Water Slides</h4>
                <ul style={styles.facilityList}>
                  <li>Double racing waterslide</li>
                  <li>Spiral twister slide</li>
                  <li>Gentle kids' slide</li>
                  <li>Safety-certified design</li>
                  <li>Lifeguard supervision</li>
                </ul>
              </div>
              
              <div style={styles.facilityCard}>
                <h4 style={styles.facilityTitle}>🍽️ Dining Options</h4>
                <ul style={styles.facilityList}>
                  <li>Elegant main restaurant</li>
                  <li>Poolside bar & grill</li>
                  <li>Sunset terrace dining</li>
                  <li>Private dining rooms</li>
                  <li>Breakfast buffet</li>
                </ul>
              </div>
              
              <div style={styles.facilityCard}>
                <h4 style={styles.facilityTitle}>✨ Additional Amenities</h4>
                <ul style={styles.facilityList}>
                  <li>Spa & wellness center</li>
                  <li>Fitness gym</li>
                  <li>Conference facilities</li>
                  <li>Children's play area</li>
                  <li>Free Wi-Fi throughout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={styles.ctaSection}>
          <div style={styles.ctaContent}>
            <h2 style={styles.ctaTitle}>Experience It Yourself</h2>
            <p style={styles.ctaText}>
              Photos capture the beauty, but nothing compares to experiencing Kwela Inn in person. 
              Book your stay today and create your own memories.
            </p>
            <div style={styles.ctaButtons}>
              <Link to="/rooms" style={styles.ctaPrimary}>
                View Rooms & Rates
              </Link>
              <Link to="/contact" style={styles.ctaSecondary}>
                Book Your Stay
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div style={styles.lightboxOverlay} onClick={handleCloseModal}>
          <div style={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={handleCloseModal}>×</button>
            <button style={styles.navButtonPrev} onClick={handlePrevious}>‹</button>
            <button style={styles.navButtonNext} onClick={handleNext}>›</button>
            
            <div style={styles.lightboxImageContainer}>
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                style={styles.lightboxImage}
              />
            </div>
            
            <div style={styles.lightboxInfo}>
              <h3 style={styles.lightboxTitle}>{selectedImage.title}</h3>
              <p style={styles.lightboxDescription}>{selectedImage.description}</p>
              <div style={styles.lightboxMeta}>
                <span style={styles.lightboxCategory}>
                  {getCategoryIcon(selectedImage.category)} {selectedImage.category.toUpperCase()}
                </span>
                <span style={styles.lightboxCounter}>
                  {currentIndex + 1} / {filteredItems.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const styles = {
  // Hero Header
  heroHeader: {
    textAlign: 'center',
    marginBottom: '40px',
    padding: '0 15px',
  },
  mainTitle: {
    fontSize: '2.5rem',
    color: '#1e293b',
    marginBottom: '15px',
    fontWeight: '700',
    '@media (max-width: 768px)': {
      fontSize: '2rem',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.6rem',
    },
  },
  subtitle: {
    fontSize: '1rem',
    color: '#64748b',
    maxWidth: '700px',
    margin: '0 auto 30px',
    lineHeight: '1.6',
    '@media (max-width: 768px)': {
      fontSize: '0.95rem',
      padding: '0 10px',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9rem',
    },
  },

  // Category Section
  categorySection: {
    marginBottom: '40px',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    color: '#1e293b',
    marginBottom: '15px',
    fontWeight: '600',
    '@media (max-width: 768px)': {
      fontSize: '1.5rem',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.3rem',
    },
  },
  categoryDescription: {
    color: '#64748b',
    fontSize: '1rem',
    marginBottom: '30px',
    '@media (max-width: 480px)': {
      fontSize: '0.9rem',
    },
  },
  categoryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
    gap: '15px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    '@media (max-width: 480px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
  categoryCard: {
    backgroundColor: '#f8fafc',
    padding: '20px 15px',
    borderRadius: '12px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s',
    border: '2px solid #e2e8f0',
    ':hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    },
    '@media (max-width: 480px)': {
      padding: '15px 10px',
    },
  },
  activeCategoryCard: {
    backgroundColor: '#0d9488',
    borderColor: '#0d9488',
    color: 'white',
  },
  categoryIcon: {
    fontSize: '2rem',
    marginBottom: '12px',
    '@media (max-width: 480px)': {
      fontSize: '1.8rem',
    },
  },
  categoryName: {
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '5px',
    marginTop: 0,
    '@media (max-width: 480px)': {
      fontSize: '0.9rem',
    },
  },
  categoryCount: {
    fontSize: '0.85rem',
    opacity: 0.8,
    marginBottom: '8px',
    '@media (max-width: 480px)': {
      fontSize: '0.8rem',
    },
  },
  categoryDesc: {
    fontSize: '0.8rem',
    lineHeight: '1.4',
    margin: 0,
    '@media (max-width: 480px)': {
      fontSize: '0.75rem',
      display: 'none',
    },
  },

  // Highlights Section
  highlightsSection: {
    backgroundColor: '#f0f9ff',
    padding: '30px 20px',
    borderRadius: '12px',
    marginBottom: '40px',
    '@media (max-width: 768px)': {
      padding: '25px 15px',
    },
    '@media (max-width: 480px)': {
      padding: '20px 15px',
    },
  },
  highlightsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
    marginTop: '25px',
    '@media (max-width: 480px)': {
      gridTemplateColumns: '1fr',
    },
  },
  highlightCard: {
    backgroundColor: 'white',
    padding: '25px 20px',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 3px 10px rgba(0,0,0,0.05)',
    '@media (max-width: 480px)': {
      padding: '20px 15px',
    },
  },
  highlightIcon: {
    fontSize: '2rem',
    marginBottom: '15px',
    '@media (max-width: 480px)': {
      fontSize: '1.8rem',
    },
  },
  highlightTitle: {
    fontSize: '1.2rem',
    color: '#1e293b',
    marginBottom: '12px',
    '@media (max-width: 480px)': {
      fontSize: '1.1rem',
    },
  },
  highlightText: {
    color: '#64748b',
    lineHeight: '1.6',
    margin: 0,
    fontSize: '0.9rem',
  },

  // Gallery Section
  gallerySection: {
    marginBottom: '60px',
  },
  galleryHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
    flexWrap: 'wrap',
    gap: '10px',
    '@media (max-width: 480px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  galleryCount: {
    color: '#64748b',
    fontSize: '1rem',
    '@media (max-width: 480px)': {
      fontSize: '0.9rem',
    },
  },
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '25px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '20px',
    },
    '@media (max-width: 480px)': {
      gridTemplateColumns: '1fr',
      gap: '15px',
    },
  },

  // Gallery Item
  galleryItem: {
    backgroundColor: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.12)',
    },
  },
  featuredBadge: {
    position: 'absolute',
    top: '12px',
    left: '12px',
    backgroundColor: '#f59e0b',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '15px',
    fontSize: '0.75rem',
    fontWeight: '600',
    zIndex: 2,
    '@media (max-width: 480px)': {
      top: '8px',
      left: '8px',
      padding: '3px 10px',
      fontSize: '0.7rem',
    },
  },
  imageContainer: {
    position: 'relative',
    height: '200px',
    overflow: 'hidden',
    '@media (max-width: 480px)': {
      height: '180px',
    },
  },
  galleryImage: {
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
  },
  categoryTag: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: '500',
    backdropFilter: 'blur(5px)',
  },
  itemContent: {
    padding: '20px',
  },
  itemTitle: {
    fontSize: '1.3rem',
    color: '#1e293b',
    margin: '0 0 10px 0',
    '@media (max-width: 480px)': {
      fontSize: '1.2rem',
    },
  },
  itemDescription: {
    color: '#64748b',
    lineHeight: '1.6',
    marginBottom: '15px',
    fontSize: '0.9rem',
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
    marginBottom: '15px',
  },
  tag: {
    backgroundColor: '#f1f5f9',
    color: '#475569',
    padding: '3px 10px',
    borderRadius: '12px',
    fontSize: '0.8rem',
  },
  viewButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: 'transparent',
    border: '2px solid #0d9488',
    color: '#0d9488',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.9rem',
    transition: 'all 0.3s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    ':hover': {
      backgroundColor: '#0d9488',
      color: 'white',
    },
    '@media (max-width: 480px)': {
      padding: '8px',
      fontSize: '0.85rem',
    },
  },
  viewIcon: {
    fontSize: '1rem',
  },

  // Facilities Section
  facilitiesSection: {
    backgroundColor: '#f8fafc',
    padding: '40px 20px',
    borderRadius: '12px',
    marginBottom: '60px',
    '@media (max-width: 768px)': {
      padding: '30px 15px',
    },
    '@media (max-width: 480px)': {
      padding: '25px 15px',
    },
  },
  facilitiesDescription: {
    color: '#64748b',
    fontSize: '1rem',
    maxWidth: '800px',
    marginBottom: '30px',
    lineHeight: '1.6',
    '@media (max-width: 480px)': {
      fontSize: '0.9rem',
    },
  },
  facilityCards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    '@media (max-width: 480px)': {
      gridTemplateColumns: '1fr',
    },
  },
  facilityCard: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 3px 10px rgba(0,0,0,0.05)',
    '@media (max-width: 480px)': {
      padding: '15px',
    },
  },
  facilityTitle: {
    fontSize: '1.2rem',
    color: '#1e293b',
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    '@media (max-width: 480px)': {
      fontSize: '1.1rem',
    },
  },
  facilityList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    '& li': {
      color: '#64748b',
      padding: '6px 0',
      borderBottom: '1px solid #e2e8f0',
      fontSize: '0.9rem',
      '@media (max-width: 480px)': {
        fontSize: '0.85rem',
      },
    },
    '& li:last-child': {
      borderBottom: 'none',
    },
  },

  // CTA Section
  ctaSection: {
    backgroundColor: '#1e293b',
    color: 'white',
    padding: '40px 20px',
    borderRadius: '12px',
    textAlign: 'center',
    marginBottom: '40px',
    '@media (max-width: 768px)': {
      padding: '30px 15px',
    },
    '@media (max-width: 480px)': {
      padding: '25px 15px',
    },
  },
  ctaTitle: {
    fontSize: '2rem',
    marginBottom: '15px',
    '@media (max-width: 768px)': {
      fontSize: '1.6rem',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.4rem',
    },
  },
  ctaText: {
    fontSize: '1rem',
    opacity: 0.9,
    maxWidth: '700px',
    margin: '0 auto 30px',
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
  ctaPrimary: {
    backgroundColor: '#0d9488',
    color: 'white',
    padding: '12px 30px',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1rem',
    transition: 'all 0.3s',
    ':hover': {
      backgroundColor: '#0f766e',
      transform: 'translateY(-2px)',
    },
    '@media (max-width: 480px)': {
      padding: '10px 25px',
      fontSize: '0.9rem',
      flex: '1',
      textAlign: 'center',
    },
  },
  ctaSecondary: {
    backgroundColor: 'transparent',
    color: 'white',
    padding: '12px 30px',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1rem',
    border: '2px solid white',
    transition: 'all 0.3s',
    ':hover': {
      backgroundColor: 'white',
      color: '#1e293b',
    },
    '@media (max-width: 480px)': {
      padding: '10px 25px',
      fontSize: '0.9rem',
      flex: '1',
      textAlign: 'center',
    },
  },

  // No Photos
  noPhotos: {
    textAlign: 'center',
    padding: '40px 20px',
    color: '#64748b',
    fontSize: '1.1rem',
    '@media (max-width: 480px)': {
      padding: '30px 15px',
      fontSize: '1rem',
    },
  },

  // Lightbox Modal
  lightboxOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '15px',
  },
  lightboxContent: {
    position: 'relative',
    maxWidth: '800px',
    width: '100%',
    maxHeight: '90vh',
    backgroundColor: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    '@media (max-width: 768px)': {
      maxWidth: '95%',
    },
  },
  closeButton: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    border: 'none',
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    fontSize: '1.3rem',
    cursor: 'pointer',
    zIndex: 1001,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ':hover': {
      backgroundColor: 'rgba(0,0,0,0.7)',
    },
    '@media (max-width: 480px)': {
      width: '30px',
      height: '30px',
      fontSize: '1.2rem',
    },
  },
  navButtonPrev: {
    position: 'absolute',
    left: '15px',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    border: 'none',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    fontSize: '1.5rem',
    cursor: 'pointer',
    zIndex: 1001,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ':hover': {
      backgroundColor: 'rgba(0,0,0,0.7)',
    },
    '@media (max-width: 480px)': {
      width: '35px',
      height: '35px',
      fontSize: '1.3rem',
    },
  },
  navButtonNext: {
    position: 'absolute',
    right: '15px',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    border: 'none',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    fontSize: '1.5rem',
    cursor: 'pointer',
    zIndex: 1001,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ':hover': {
      backgroundColor: 'rgba(0,0,0,0.7)',
    },
    '@media (max-width: 480px)': {
      width: '35px',
      height: '35px',
      fontSize: '1.3rem',
    },
  },
  lightboxImageContainer: {
    height: '400px',
    overflow: 'hidden',
    '@media (max-width: 768px)': {
      height: '300px',
    },
    '@media (max-width: 480px)': {
      height: '250px',
    },
  },
  lightboxImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  lightboxInfo: {
    padding: '25px',
    '@media (max-width: 768px)': {
      padding: '20px',
    },
    '@media (max-width: 480px)': {
      padding: '15px',
    },
  },
  lightboxTitle: {
    fontSize: '1.8rem',
    color: '#1e293b',
    marginBottom: '12px',
    '@media (max-width: 768px)': {
      fontSize: '1.5rem',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.3rem',
    },
  },
  lightboxDescription: {
    color: '#64748b',
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '15px',
    '@media (max-width: 480px)': {
      fontSize: '0.9rem',
    },
  },
  lightboxMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lightboxCategory: {
    backgroundColor: '#f1f5f9',
    color: '#475569',
    padding: '6px 15px',
    borderRadius: '15px',
    fontSize: '0.85rem',
    fontWeight: '500',
    '@media (max-width: 480px)': {
      padding: '5px 12px',
      fontSize: '0.8rem',
    },
  },
  lightboxCounter: {
    color: '#64748b',
    fontSize: '0.9rem',
    '@media (max-width: 480px)': {
      fontSize: '0.85rem',
    },
  },
};

export default Gallery;