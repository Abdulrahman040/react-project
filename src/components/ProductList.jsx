import { useState,useEffect } from 'react'
import React from 'react'
import ProductCart from './ProductCart'
import axios from 'axios';
function ProductList() {
    const [products , setProducts]=useState([]);
    
    const getAllProducts =async ()=>{
        const  response = await axios.get(`https://fakestoreapi.com/products`)
        setProducts(response.data);
    }

    useEffect( ()=>{
        getAllProducts();
    } , [] )

    // console.log(products)

    return (
    <div className="py-5">
        <div className="container">
            <div className="row">
                {
                    products && products.map( (item)=>{
                        return (  <ProductCart key={item.id} product={item} />  )
                    } )
                }
            
                
            </div>
        </div>
        
    </div>
    )
}

export default ProductList