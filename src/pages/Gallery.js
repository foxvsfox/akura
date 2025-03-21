import React from 'react';

import './Gallery.css'; // Add custom styles for the gallery

const images = [
    { id: 1, src: '/path/to/image1.jpg', alt: 'Image 1' },
    { id: 2, src: '/path/to/image2.jpg', alt: 'Image 2' },
    { id: 3, src: '/path/to/image3.jpg', alt: 'Image 3' },
    { id: 4, src: '/path/to/image4.jpg', alt: 'Image 4' },
    { id: 5, src: '/path/to/image5.jpg', alt: 'Image 5' },
    { id: 6, src: '/path/to/image6.jpg', alt: 'Image 6' },
    { id: 7, src: '/path/to/image7.jpg', alt: 'Image 7' },
    { id: 8, src: '/path/to/image8.jpg', alt: 'Image 8' },
    { id: 9, src: '/path/to/image9.jpg', alt: 'Image 9' },
    { id: 10, src: '/path/to/image10.jpg', alt: 'Image 10' }
];

const Gallery = () => {
    return (
        <div className="gallery-container">
            <h1 className="gallery-title">Image Gallery</h1>
            <div className="gallery-grid">
                {images.map((image) => (
                    <div key={image.id} className="gallery-item">
                        <img src={image.src} alt={image.alt} className="gallery-image" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;