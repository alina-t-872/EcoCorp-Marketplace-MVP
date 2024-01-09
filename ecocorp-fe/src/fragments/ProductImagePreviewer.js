import React, { useState } from 'react';

const ProductImagePreviewer = ({ productImages }) => {
  const [selectedImage, setSelectedImage] = useState(productImages[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <img src={selectedImage} alt="Product Preview" style={{ maxWidth: '60%', marginLeft: '15%' }} />
      </div>

      <div style={{marginLeft: '30%'}}>
        {productImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product Thumbnail ${index + 1}`}
            style={{ width: '50px', cursor: 'pointer', marginRight: '5px' }}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImagePreviewer;
