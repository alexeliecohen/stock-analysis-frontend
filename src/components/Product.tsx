import React, {FC} from 'react';

export interface IProduct {
    name:String,
    price:number,
    quantity:number
}

const Product: FC<IProduct> = (props): JSX.Element =>  {
    const {name,price,quantity} = props;
    return (
        <React.Fragment>
            <span>Name: {name}</span>
            <span>Price: $ {price}</span>
            <span>Quantity: {quantity}</span>
        </React.Fragment>
    );
}

export default Product;