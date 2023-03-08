// import React, { useRef } from 'react'
// import Link from "next/link";
// import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from "react-icons/ai";
// import { TiDeleteOutline } from "react-icons/ti";
// import toast from "react-hot-toast";

// import { useStateContext } from "../context/StateContext";
// import { urlFor } from "../lib/client";

// const Cart = () => {
//   const cartRef = useRef();
//   const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();


//   return (
//     <div className = "cart-wrapper" ref = {cartRef}>
//       <div className = "cart-container">
//         <button
//         type = "button"
//         className = "cart-heading"
//         onClick = {() => setShowCart(false)}
//         >
//           <AiOutlineLeft />
//           <span className='heading'>Your Cart</span>
//           <span className='cart-num-items'>({totalQuantities} items)</span>
//         </button>

//         {
//           cartItems.length < 1 && (
//             <div className='empty-cart'>
//               <AiOutlineShopping size={150} />
//               <h3>Your Shopping bag is empty</h3>
//               <Link href="/">
//                 <button type='button'
//                 onClick={() => setShowCart(false)}
//                 className = "btn"
//                 >
//                 Continue Shopping
//                 </button>
//               </Link>
//             </div>
//           )
//         }

// <div className="product-container">
//           {cartItems.length >= 1 && cartItems.map((item) => (
//             <div className="product" key={item._id}>
//               <img src={urlFor(item?.image[0])} className="cart-product-image" />
//               <div className="item-desc">
//                 <div className="flex top">
//                   <h5>{item.name}</h5>
//                   <h4>${item.price}</h4>
//                 </div>
//                 <div className="flex bottom">
//                   <div>
//                   <p className="quantity-desc">
//                     <span className="minus" onClick={() => toggleCartItemQuantity(item._id, 'dec') }>
//                     <AiOutlineMinus />
//                     </span>
//                     <span className="num" onClick="">{item.quantity}</span>
//                     <span className="plus" onClick={() =>toggleCartItemQuantity(item._id, 'inc') }><AiOutlinePlus /></span>
//                   </p>
//                   </div>
//                   <button
//                     type="button"
//                     className="remove-item"
//                     onClick={() => onRemove(item)}
//                   >
//                     <TiDeleteOutline />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//               {
//                 cartItems.length >= 1 && (
//                   <div className='cart-bottom'>
//                     <div className='total'>
//                       <h3>Subtotal:</h3>
//                       <h3>${totalPrice}</h3>
//                     </div>
//                     <div className='btn-container'>
//                       <button type='button' className='btn' onClick = "">
//                         Pay With Paystack
//                       </button>
//                     </div>
//                   </div>
//                 )
//               }
//       </div>
//     </div>
//   )
// }

// export default Cart






// import React, { useRef } from 'react'
// import Link from "next/link";
// import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from "react-icons/ai";
// import { TiDeleteOutline } from "react-icons/ti";
// import toast from "react-hot-toast";
// import { PaystackButton } from 'react-paystack';

// import { useStateContext } from "../context/StateContext";
// import { urlFor } from "../lib/client";

// const Cart = () => {
//   const cartRef = useRef();
//   const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();

//   // Initialize Paystack payment details
//   const paymentDetails = {
//     amount: totalPrice * 100, // Paystack amount is in kobo
//     email: "user@example.com",
//     metadata: {
//       "item_count": totalQuantities,
//     },
//     publicKey: "pk_live_6464b6529a3c9f897979c178339c9954faa5bed6", // Replace with your public key
//     onSuccess: () => {
//       // Call your backend to verify payment was successful
//       toast.success("Payment successful!");
//     },
//     onClose: () => {
//       toast.error("Payment was not completed!");
//     }
//   };

//   return (
//     <div className = "cart-wrapper" ref = {cartRef}>
//       <div className = "cart-container">
//         <button
//         type = "button"
//         className = "cart-heading"
//         onClick = {() => setShowCart(false)}
//         >
//           <AiOutlineLeft />
//           <span className='heading'>Your Cart</span>
//           <span className='cart-num-items'>({totalQuantities} items)</span>
//         </button>

//         {
//           cartItems.length < 1 && (
//             <div className='empty-cart'>
//               <AiOutlineShopping size={150} />
//               <h3>Your Shopping bag is empty</h3>
//               <Link href="/">
//                 <button type='button'
//                 onClick={() => setShowCart(false)}
//                 className = "btn"
//                 >
//                 Continue Shopping
//                 </button>
//               </Link>
//             </div>
//           )
//         }
//         <div className="product-container">
//           {cartItems.length >= 1 && cartItems.map((item) => (
//             <div className="product" key={item._id}>
//               <img src={urlFor(item?.image[0])} className="cart-product-image" />
//               <div className="item-desc">
//                 <div className="flex top">
//                   <h5>{item.name}</h5>
//                   <h4>${item.price}</h4>
//                 </div>
//                 <div className="flex bottom">
//                   <div>
//                   <p className="quantity-desc">
//                     <span className="minus" onClick={() => toggleCartItemQuantity(item._id, 'dec') }>
//                     <AiOutlineMinus />
//                     </span>
//                     <span className="num" onClick="">{item.quantity}</span>
//                     <span className="plus" onClick={() =>toggleCartItemQuantity(item._id, 'inc') }><AiOutlinePlus /></span>
//                   </p>
//                   </div>
//                   <button
//                     type="button"
//                     className="remove-item"
//                     onClick={() => onRemove(item)}
//                   >
//                     <TiDeleteOutline />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         {cartItems.length >= 1 && (
//           <div className='cart-bottom'>
//             <div className='total'>
//               <h3>Subtotal:</h3>
//               <h3>${totalPrice}</h3>
//             </div>
//             <div className='btn-container'>
//               <PaystackButton {...paymentDetails}>
//                 <button type='button' className='btn'>
//                   Pay With Paystack
//                 </button>
//               </PaystackButton>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Cart









import React, { useRef, useState } from 'react'
import Link from "next/link";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";
import { PaystackButton } from 'react-paystack';

import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";

// const handleInputChange = (e) => {
//   const { name, value } = e.target;
//   setFormData((prevData) => ({ ...prevData, [name]: value }));
// };


const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Initialize Paystack payment details
  const paymentDetails = {
    amount: totalPrice * 100, // Paystack amount is in kobo
    email: formData.email,
    metadata: {
      "item_count": totalQuantities,
    },
    publicKey: "pk_live_6464b6529a3c9f897979c178339c9954faa5bed6", // Replace with your public key
    onSuccess: () => {
      // Call your backend to verify payment was successful
      toast.success("Payment successful!");
    },
    onClose: () => {
      toast.error("Payment was not completed!");
    }
  };

  return (
    <div className = "cart-wrapper" ref = {cartRef}>
      <div className = "cart-container">
        <button
        type = "button"
        className = "cart-heading"
        onClick = {() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className='heading'>Your Cart</span>
          <span className='cart-num-items'>({totalQuantities} items)</span>
        </button>

        {
          cartItems.length < 1 && (
            <div className='empty-cart'>
              <AiOutlineShopping size={150} />
              <h3>Your Shopping bag is empty</h3>
              <Link href="/">
                <button type='button'
                onClick={() => setShowCart(false)}
                className = "btn"
                >
                Continue Shopping
                </button>
              </Link>
            </div>
          )
        }
        <div className="product-container">
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className="product" key={item._id}>
              <img src={urlFor(item?.image[0])} className="cart-product-image" />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h4>${item.price}</h4>
                </div>
                <div className="flex bottom">
                  <div>
                  <p className="quantity-desc">
                    <span className="minus" onClick={() => toggleCartItemQuantity(item._id, 'dec') }>
                    <AiOutlineMinus />
                    </span>
                    <span className="num" onClick="">{item.quantity}</span>
                    <span className="plus" onClick={() =>toggleCartItemQuantity(item._id, 'inc') }><AiOutlinePlus /></span>
                  </p>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}



          <form>
            <div className='form-div'>Please complete this form</div> 
          <div className="form-field">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-field">
            <input
              type="number"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-field">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
        </form>
        </div>
        {cartItems.length >= 1 && (
          <div className='cart-bottom'>
            <div className='total'>
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className='btn-container'>
              <PaystackButton className='PaystackButton' {...paymentDetails}>
                <button type='button' className='btn'>
                  Pay With Paystack
                </button>
              </PaystackButton>
            </div>
          </div>
        )}
      </div>




    </div>
  )
}

export default Cart
