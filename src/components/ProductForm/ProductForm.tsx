import React, { useState, Fragment} from 'react';
import product from "../Product";
import classes from './ProdutrForm.module.scss';

const ProductForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(Number(0));
    const [quantity, setQuantity] = useState(0);

    const handleSetName:  React.ChangeEventHandler<HTMLInputElement>  =
        (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const handleSetPrice: React.ChangeEventHandler<HTMLInputElement> =
        (e) => {
        e.preventDefault();
        setPrice(Number(e.target.value));
    }

    const handleSetQty: React.ChangeEventHandler<HTMLInputElement> =
        (e) => {
        e.preventDefault();
        setQuantity(Number(e.target.value));
    }
    const formSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        fetch("http://localhost:3000/products/")
            .then(res =>  res.json())
    }

    return (
        <form onSubmit={formSubmit}>
            <div>
                <label htmlFor="name">Product Name:</label>
                <input id={"name"} type="text" value={name} onChange={handleSetName}/>
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input type="text" value={price} onChange={handleSetPrice}/>
            </div>
            <div>
                <label htmlFor="qty">Quantity:</label>
                <input type="text" value={quantity} onChange={handleSetQty}/>
            </div>
            <button type={"submit"}>Submit</button>
        </form>
    );
};

export default ProductForm;