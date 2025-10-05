import React, { useContext } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
const Product = () =>{
    const {all_product} = useContext(Shopcontext)
    const{productId} = useParams();
    const {product} = all_product.find((e)=>e.id ===Number(productId))

    return(
        <div>
            <Breadcrumb product =  {product}/> 
        </div>
    )
}
export default Product 