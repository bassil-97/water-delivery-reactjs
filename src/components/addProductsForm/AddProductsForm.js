import React, { Fragment, useState } from 'react';
import './AddProductsForm.css';

import Banner from '../../UI/banner/Banner';
import Breadcrumb from '../../UI/breadcrumb/Breadcrump';

export default function AddProductsForm() {

    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescrition] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productImage, setProductImage] = useState("");

    const [isAdded, setIsAdded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    async function addProductHandler(event) {
        event.preventDefault();

        setIsLoading(true);

        const productData = {
            name: productName,
            description: productDescription,
            price: productPrice,
            imageURL: productImage
        };

        const response = await fetch("https://water-delivery-acdc9-default-rtdb.firebaseio.com/products.json", {
            method: 'POST',
            body: JSON.stringify(productData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.ok) {

            setIsLoading(false);
            setIsAdded(true);

            setProductName("");
            setProductDescrition("");
            setProductPrice("");
            setProductImage("");
        }
    }


    let loader = (
        <div className="loading-wrapper">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );

    let addedMessage = (
        <div className="alert alert-success added-message" role="alert">
            Product added successfully
        </div>
    );

    return (
        <Fragment>
            <Banner />
            <div className="add__products__form">
            <Breadcrumb path="add product" />
                <form onSubmit={addProductHandler}>
                    <div className="form-group mb-4">
                        <label htmlFor="productName" className="form-label">Product Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="productName" 
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)} 
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="productDescription" className="form-label">Product Description</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="productDescription" 
                            value={productDescription}
                            onChange={(e) => setProductDescrition(e.target.value)} 
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="productPrice" className="form-label">Price</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="productPrice" 
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)} 
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="productImage" className="form-label">Product Image(URL)</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="productImage" 
                            value={productImage}
                            onChange={(e) => setProductImage(e.target.value)} 
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Product</button>
                </form>
                {isLoading && loader}
                {!isLoading && isAdded && addedMessage}
            </div>
        </Fragment>
    )
}
