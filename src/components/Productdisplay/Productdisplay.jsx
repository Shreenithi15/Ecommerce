import React, { useContext, useState } from'react'
import './Productdisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { Shopcontext } from '../../context/Shopcontext';

const Productdisplay = (props) =>{
    const{product} = props;
    const {addToCart}=useContext(Shopcontext);
    return(
        <div className='productdisplay'>
             <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src ={product.image} alt=""/>
                    <img src ={product.image} alt=""/>
                    <img src ={product.image} alt=""/>
                    <img src ={product.image} alt=""/>
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src ={product.image} alt =""/>

                </div>

             </div>
             <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src ={star_icon} alt=""/>
                    <img src ={star_icon} alt=""/>
                    <img src ={star_icon}alt=""/>
                    <img src ={star_icon} alt=""/>
                    <img src ={star_dull_icon}alt=""/>
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        {'\u20B9'}{product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        {'\u20B9'}{product.new_price}
                    </div>
                    <div className="productdisplay-right-description">
                        A lightweight,usually knitted ,pullover shirt , close fitting and round neckline 
                    </div>
                    <div className="productdisplay-right-size">
                        <h1>select size</h1>
                        <div className="productdisplay-right-sizes">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>
                    <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                    <p className="productdisplay-right-category"><span>category:</span>Women,T-Shirt,croptop</p>
                    <p className="productdisplay-right-category"><span>Tags:</span>Modern , latest </p>
                </div>


             </div>
        </div>
    )
}
export default Productdisplay