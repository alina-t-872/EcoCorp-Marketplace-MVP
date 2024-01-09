
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import { Card, Button } from 'react-bootstrap';
import './ProductPage.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import cartIcon from '../../assets/cart.png';
import wishlistIcon from '../../assets/wishlist.png';
import ProductImagePreviewer from '../../fragments/ProductImagePreviewer';

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const placeholderProduct = {
      name: 'Calculator hp compaq 8200 elite sff, intel pentium g850 2.90 ghz',
      price: 177.80,
      seller: 'IT EcoCorp PLUS SRL',
      description: 'Calculatorul HP Compaq 8200 ELITE SFF este o alegere solidă pentru nevoile tale de bază de calcul, oferind un echilibru între performanță și funcționalitate.',
      images: [
        'https://itvivantshop.net/images/detailed/95/Calculator-hp-compaq-8200-elite-sff--intel-pentium-g850-2-90-ghz---4gb-ddr3--500gb-hdd--dvd--intel-hd-graphics.jpg',
        'https://itvivantshop.net/images/detailed/95/Calculator-hp-compaq-8200-elite-sff--intel-pentium-g850-2-90-ghz---4gb-ddr3--500gb-hdd--dvd--intel-hd-graphics_5b8p-yr.jpg',
        'https://itvivantshop.net/images/detailed/95/Calculator-hp-compaq-8200-elite-sff--intel-pentium-g850-2-90-ghz---4gb-ddr3--500gb-hdd--dvd--intel-hd-graphics_knui-au.jpg',
        'https://itvivantshop.net/images/detailed/95/Calculator-hp-compaq-8200-elite-sff--intel-pentium-g850-2-90-ghz---4gb-ddr3--500gb-hdd--dvd--intel-hd-graphics_48u0-pv.jpg',
        'https://itvivantshop.net/images/detailed/95/Calculator-hp-compaq-8200-elite-sff--intel-pentium-g850-2-90-ghz---4gb-ddr3--500gb-hdd--dvd--intel-hd-graphics_bni2-nh.jpg'
      ],
    };

    const fetchProduct = () => {
      setTimeout(() => {
        setProduct(placeholderProduct);
      }, 1000);
    };

    fetchProduct();
  }, [productId]);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-page-container">
       {product ? (
        <> <div>
             <ProductImagePreviewer
                productImages={product.images}
            />
          </div>

          <div className="information">
            <h2>{product.name}</h2>
            <p id="price">Pret: {product.price} RON</p>
            <p style={{fontSize: "large"}}>Vanzator: {product.seller}</p>
            <p style={{fontSize: "large"}}>Descriere: {product.description}</p>
            <div className="quantity-container">
              <button onClick={decreaseQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </div>
            <div style={{ display: 'flex', paddingTop: "20px" }}>
                <Button onClick={() => {}} variant="primary" style={{ marginRight: '10px' }}>
                    <img src={cartIcon} alt=" " style={{height: "1.5rem", paddingRight: "10px"}} />
                    Add to Cart
                </Button>
                <Button onClick={() => {}} variant="secondary">
                    <img src={wishlistIcon}  style={{height: "1.5rem", paddingRight: "10px"}} alt=" " />
                    Wishlist
                </Button>
            </div>
            
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductPage;