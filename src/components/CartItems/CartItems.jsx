import React, { useContext } from 'react'
import './CartItems.css'
import { Shopcontext } from '../../context/Shopcontext'
import remove_icon from '../Assets/cart_cross_icon.png'
const CartItems =()=>{
    const { getTotalCartAmount,all_product,cartItems,removeFromCart}=useContext(Shopcontext)
    return(
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
          {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return  <div>
                <div className="cartitems-format">
                    <img src ={e.image} alt ="" className='carticon-product-icon'/>
                    <p>{e.name}</p>
                    <p>₹{e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>₹{e.new_price*cartItems[e.id]}</p>
                    <img className='cartitems-removeicon' src ={remove_icon} onClick ={()=>{removeFromCart(e.id)}}alt =""/>
                </div>
                <hr />
            </div>
            }
            return null;
          })}
          <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>CartTotal</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>subtotal</p>
                        <p>${getTotalCartAmount ()}</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <p>
                            shipping Fee
                        </p>
                        <p>free</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>₹{getTotalCartAmount ()}</h3>
                    </div>
                    <button>Procced to checkout</button>
                </div>
                <div className="cartitems-promocode">
                    <p>IF YOU HAVE ENTER </p>
                    <div className="cartitem-promobox">
                        <input type ="text" placeholder ="promocode"/>
                        <button>submit</button>

                    </div>
                </div>
            </div>
          </div>
                 
        </div>

    )
}
export default CartItems