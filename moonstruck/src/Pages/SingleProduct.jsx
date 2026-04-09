// import React, { useState } from 'react';
// import './CSS/singleProduct.css';
// import { useParams } from 'react-router-dom';
// import cart_icon from '../Assets/cart_icon.png';

// const SingleProduct = ({ allProducts, addToCart }) => {
//   const { productId } = useParams();
//   const product = allProducts.find(p => p.id.toString() === productId);
//   const [quantity, setQuantity] = useState(1);

//   if (!product) {
//     return <div className="product-not-found">Product not found!</div>;
//   }

//   return (
//     <div className="product-container">
//       <div className="product-image">
//         <img src={product.image} alt={product.name} />
//       </div>
//       <div className="product-details">
//         <h2>{product.name}</h2>
//         <p className="product-price">Rs. {product.price}</p>
//         <p className="product-description">{product.description}</p>
//         <div className="quantity-selector">
//           <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
//           <span>{quantity}</span>
//           <button onClick={() => setQuantity(quantity + 1)}>+</button>
//         </div>
//         <div className="product-actions">
//           <button className="buy-now">Buy Now</button>
//           <button className="add-to-cart" onClick={() => addToCart(product, quantity)}>
//             <img src={cart_icon} alt="Cart" /> Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleProduct;






import React, { useState } from 'react';
import './CSS/singleproduct.css';
import { useLocation } from 'react-router-dom';
import cart_icon from '../Components/Assets/cart_icon.png';

const SingleProduct = () => {
  const location = useLocation();
  const product = location.state?.product;

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('navy');
  const [selectedSize, setSelectedSize] = useState('M');
  const [cartCount, setCartCount] = useState(0);

  const colors = ['navy', 'olive', 'rose'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  const handleQuantityChange = (value) => {
    if (value > 0) {
      setQuantity(value);
    }
  };

  if (!product) {
    return <div className="product-not-found">Product not found!</div>;
  }

  return (
    <div className="product-page-container">
      {/* Left Section - Product Images */}
      <div className="product-images-section">
        <div className="main-image">
          <img src={product.image_url} alt={product.name} />
        </div>
        <div className="thumbnail-images">
          <img src={product.image_url} alt="Product" className="thumbnail active" />
          <img src={product.image_url} alt="Product" className="thumbnail" />
        </div>
      </div>

      {/* Right Section - Product Details */}
      <div className="product-details-section">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-id">{product.id}</p>

        <div className="product-price-section">
          <p className="product-price">Rs {product.price}.00</p>
        </div>

        {/* Color Selection */}
        <div className="color-section">
          <label>SELECT COLOR : {selectedColor.toUpperCase()}</label>
          <div className="color-options">
            {colors.map((color) => (
              <button
                key={color}
                className={`color-btn ${color} ${selectedColor === color ? 'active' : ''}`}
                onClick={() => setSelectedColor(color)}
                title={color}
              />
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div className="size-section">
          <label>SELECT SIZE</label>
          <div className="size-options">
            {sizes.map((size) => (
              <button
                key={size}
                className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <a href="#" className="size-chart">Size Chart</a>
        </div>

        FitCheck Button
        <button className="fitcheck-btn">FITCHECK •</button>

        {/* Description */}
        <p className="product-description">{product.description}</p>

        {/* Quantity Selector */}
        <div className="quantity-section">
          <label>QUANTITY</label>
          <div className="quantity-selector">
            <button 
              onClick={() => handleQuantityChange(quantity - 1)}
              className="qty-btn minus"
            >
              −
            </button>
            <span className="qty-value">{quantity}</span>
            <button 
              onClick={() => handleQuantityChange(quantity + 1)}
              className="qty-btn plus"
            >
              +
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="product-actions-section">
          <button className="buy-now-btn">Buy Now</button>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            <div className="cart-icon-wrapper">
              <img src={cart_icon} alt="Cart" />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </div>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;


