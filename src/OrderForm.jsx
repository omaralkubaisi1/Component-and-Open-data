import React from 'react';
import { useState } from "react";
import OrderInfo from './OrderInfo';

const OrderForm = () => {
    const productsList = [
        { productName: 'Tesla Model S', productPrice: 80000 },
        { productName: 'BMW X5', productPrice: 60000 },
        { productName: 'Audi A6', productPrice: 55000 }
    ];
   
    const [selectedProduct, setSelectedProduct] = useState(productsList[0]);
    const [quantity, setQuantity] = useState(0);

    return (
        <>
            <h3>Select product</h3>
            <label>Product: </label>
            <select onChange={(e) => {
                const product = productsList.find(p => p.productName === e.target.value);
                setSelectedProduct(product);
            }}>
                {productsList.map(product => (
                    <option key={product.productName} value={product.productName}>
                        {product.productName} ({product.productPrice}€) {}
                    </option>
                ))}
            </select><br></br>
            <label>Quantity: </label>
            <button onClick={() => setQuantity(Math.max(quantity - 1, 0))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
            <OrderInfo productName={selectedProduct.productName}
            productPrice={selectedProduct.productPrice}
            quantity={quantity}></OrderInfo>
        </>
    );
}

export default OrderForm;