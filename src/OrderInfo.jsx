import React from 'react';

const OrderInfo = ({ productName, productPrice, quantity }) => {
    const totalPrice = productPrice * quantity;

    return (
        <div>
            <h3>Order info</h3>
            <table className='tb' id="styling">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{productName}</td>
                        <td>{quantity}</td>
                        <td>{totalPrice}€</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OrderInfo;