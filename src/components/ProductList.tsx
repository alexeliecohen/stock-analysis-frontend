import React, {useEffect, useState} from 'react';
import {json} from "stream/consumers";
import Product from "./Product";


export interface IProduct {
    name:String,
    price:number,
    quantity:number
}

const ProductList = () => {
    const [productList, setProductList] = useState<IProduct[]>([]);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        // let mounted = true;
        fetch("http://localhost:3000/products/get-all")
            .then(result => result.json())
            .then(json => {
                setIsLoading(false)
                setProductList(json)
            })
    },[])
    return (
        <div>{isLoading ?
            productList.map((product,index) => {
                return <Product key={index} {...product}/>
            })
            : <p>Loading...</p>}


        </div>
    );
};

export default ProductList;