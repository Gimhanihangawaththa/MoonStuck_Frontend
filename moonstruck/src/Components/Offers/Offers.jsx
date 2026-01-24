// import React from 'react'
// import './Offers.css'
// import exclusive_imge from '../Assets/exclusive_image.jpg'
// const Offers = () => {
//   return (
//     <div className='offers'>
      
//       <div className="offers-left">
      
// <h1>Exclusive</h1>
// <h2>Offers For You</h2>
// <p>ONLY ON BEST SELLERS PRODUCTS</p>
// <button>Check Now</button>
//       </div>
//      <div className="offers-right">
//      <img className='imge-exclisive' src={exclusive_imge} alt=''/>
//      </div>
//     </div>
//   )
// }

// export default Offers
import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.jpg";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h2>Offers For You</h2>
        <p>ONLY ON BEST SELLER PRODUCTS</p>
        <button>Check Now</button>
      </div>

      <div className="offers-right">
        <img src={exclusive_image} alt="Exclusive Offer" />
      </div>
    </div>
  );
};

export default Offers;
