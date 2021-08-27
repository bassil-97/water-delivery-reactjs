import React from 'react';
import './OrderForm.css';

export default function OrderForm() {
    return (
        <div className="orderFormWrapper">
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Order Form</li>
                    </ol>
                </nav>
                <hr />
            </div>
        </div>
    )
}
