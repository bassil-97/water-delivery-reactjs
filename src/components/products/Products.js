import React from 'react';
import './Products.css';

import OrderButton from '../orderButton/OrderButton';
import Product from './product/Product';
import p1 from '../../assets/products/p1.png';
import p2 from '../../assets/products/p2.png';
import p3 from '../../assets/products/p3.png';
import p4 from '../../assets/products/p4.png';

export default function Products() {
    return (
        <div className="products">
            <h1>Our Products</h1>
            <div className="container">
                <Product 
                    src={p1}
                    name="Product 1"  
                />
                <Product 
                    src={p2}
                    name="Product 2"
                />
                <Product 
                    src={p3}
                    name="Product 3"
                />
                <Product 
                    src={p1}
                    name="Product 4"
                />
                <Product 
                    src={p2}
                    name="Product 5"
                />
                <Product 
                    src={p3}
                    name="Product 6"
                />
            </div>
            <OrderButton />
        </div>
    )
}
