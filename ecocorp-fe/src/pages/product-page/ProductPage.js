import React, { useState } from "react";
import "react-rater/lib/react-rater.css";
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './ProductPage.css';
import cartIcon from '../../assets/cart.png';
import wishlistIcon from '../../assets/wishlist.png';

const ProductPage = () => {
    const [quantity, setQuantity] = useState(1);
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
      };
    
      // Function to handle decreasing quantity, with a minimum limit of 1
      const decreaseQuantity = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1);
        }
      };
    return (
        
        <div class="product-page-container">
            <div class="carousel-container">
            <Carousel class="carousel">
                    <div class="image">
                        <img class="carousel-image" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/7614/production/_105482203__105172250_gettyimages-857294664.jpg" alt="Product 1"/>
                        <p className="legend">Legend 1</p>
                    </div>
                    <div class="image">
                        <img class="carousel-image" src="https://tiermaker.com/images/templates/meme-cats-1022816/10228161621384562.jpg" alt="Product 2"/>
                        <p className="legend">Legend 2</p>
                    </div>
                    <div class="image">
                        <img class="carousel-image" src="https://tiermaker.com/images/templates/meme-cats-1022816/10228161621384562.jpg" alt="Product 3"/>
                        <p className="legend">Legend 3</p>
                    </div>
                    <div class="image">
                        <img class="carousel-image" src="https://tiermaker.com/images/templates/meme-cats-1022816/10228161621384562.jpg" alt="Product 4"/>
                        <p className="legend">Legend 4</p>
                    </div>
                    <div class="image">
                        <img class="carousel-image" src="https://tiermaker.com/images/templates/meme-cats-1022816/10228161621384562.jpg" alt="Product 5"/>
                        <p className="legend">Legend 5</p>
                    </div>
                    <div class="image">
                        <img class="carousel-image" src="https://tiermaker.com/images/templates/meme-cats-1022816/10228161621384562.jpg" alt="Product 6"/>
                        <p className="legend">Legend 6</p>
                    </div>
                </Carousel>
                </div>
            <div className="information">
                <h2>Product Name</h2>
                <p id="price">Pret: 1000 RON</p>
                <p>Vanzator: Firma</p>
                <p>Descriere: Oua de pisica. Set de 6. Pret negociabil.</p>
                <div className="quantity-container">
                <button onClick={decreaseQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity}>+</button>
                </div>
                <button className="add-to-cart">
                <img src={cartIcon} alt=" Add to Cart" />
                Adauga in Cos
                </button><button className="add-to-wishlist" >
                    <img src={wishlistIcon} alt="Wishlist Icon" />
                    Adauga la Wishlist
                </button>
            </div>
            
            </div>

            



    );
  };
  
  export default ProductPage;


// const ProductPage = () => {
//     return (
//         <h1>ProductPage</h1>
        
//     );
// }

// export default ProductPage;