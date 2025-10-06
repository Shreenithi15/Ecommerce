import React, { useContext } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import Productdisplay from '../components/Productdisplay/Productdisplay'
import all_product from '../components/Assets/all_product'
import Descriptionbox from '../components/Descriptionbox/Descriptionbox'
import RelatedProduct from '../components/RelatedProduct/RelatedProduct'

const Product = () =>{
    const {all_product} = useContext(Shopcontext)
    const{productId} = useParams();
    const product = all_product.find((e) => e.id === Number(productId));

   

    return(
        <div>
            <Breadcrumb product =  {product}/> 
            <Productdisplay product = {product}/>
            <Descriptionbox/>
            <RelatedProduct/>
        </div>
    )
}
export default Product 