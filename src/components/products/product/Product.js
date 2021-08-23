import React from 'react';
import './Product.css';

export default function Product(props) {
    return (
        <div className="product__wrapper">
            <div className="product">
                <img src={props.src} className="img-fluid"  />
                <h4>{props.name}</h4>
            </div>
        </div>
        
    )
}
