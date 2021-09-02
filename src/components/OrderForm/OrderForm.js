import React, { useRef, useState, useEffect } from 'react';
import './OrderForm.css';

import Breadcrump from '../../UI/breadcrumb/Breadcrump';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { backToHome } from '../../helpers/helpers';
import Modal from '../../UI/Modal/Modal';
import Banner from '../../UI/banner/Banner';

const isEmpty = value => value.trim() === ''; 

export default function OrderForm() {

    const [formInputsValidity, setFormInputsValidity] = useState({
        firstName: true,
        lastName: true,
        email: true,
        product: true,
    });

    const [phoneNumber, setPhoneNumber] = useState('+962');
    const [orderSent, setOrderSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState();
    const [selectedProduct, setSelectedProduct] = useState('https://water-delivery.s3.amazonaws.com/products/p1.png');
    const [inputDisabled, setInputDisabled] = useState(true);
    const [totalPrice, setTotalPrice] = useState(0.0);

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const productRef = useRef();
    const bottelsQuantity = useRef();

    useEffect(() => {
        const fetchProductsList = async () => {
            const response = await fetch('https://water-delivery-acdc9-default-rtdb.firebaseio.com/products.json');
            const responseData = await response.json();

            const loadedProductsList = [];

            for(const key in responseData) {
                loadedProductsList.push({
                    id: key,
                    name: responseData[key].name,
                    desciption: responseData[key].desciption,
                    price: responseData[key].price,
                    imageURL: responseData[key].imageURL
                });
            }

            setProducts(loadedProductsList);
        };
        
        fetchProductsList();
    }, []);

    const handleInputDisabled = (type) => {
        setInputDisabled(!inputDisabled);
    };

    const handleClose = () => {
        setOrderSent(false);
    };

    async function orderHandler(event) {
        event.preventDefault();

        const enteredFirstName = firstNameRef.current.value;
        const enteredLastName = lastNameRef.current.value;
        const enteredEmail = emailRef.current.value;
        const enteredProduct = productRef.current.value;


        const enteredFirstNameIsValid = !isEmpty(enteredFirstName);
        const enteredLastNameIsValid = !isEmpty(enteredLastName);
        const enteredEmailIsValid = !isEmpty(enteredEmail);
        const enteredProductIsValid = !isEmpty(enteredProduct);

        setFormInputsValidity({
            firstName: enteredFirstNameIsValid,
            lastName: enteredLastNameIsValid,
            email: enteredEmailIsValid,
            product: enteredProductIsValid
        });

        const formIsValid = 
            enteredFirstNameIsValid &&
            enteredLastNameIsValid &&
            enteredEmailIsValid &&
            enteredProductIsValid;

        if(!formIsValid) {
           return;
        } else {
            setIsLoading(true);
            
            const orderData = {
                firstName: enteredFirstName,
                lastName: enteredLastName,
                email: enteredEmail,
                product: enteredProduct,
                phoneNumber: phoneNumber,
                quantity: inputDisabled ? "Package (24)" : bottelsQuantity.current.value
            };


    
            const response = await fetch('https://water-delivery-acdc9-default-rtdb.firebaseio.com/orders.json', {
                method: 'POST',
                body: JSON.stringify(orderData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            const data = response.ok;
            if(data) {
                setOrderSent(true);
                setIsLoading(false);
    
                setPhoneNumber('+962');
                document.getElementById("order__form").reset();
            }
        }
    }

    const handleSelectedProduct = event => {
        for(const key in products) {
            if(event.target.value === products[key].name) {
                setSelectedProduct(products[key].imageURL);
                let productPrice = parseFloat(products[key].price).toFixed(2);
                setTotalPrice(productPrice);
            }
        }
    };


    const firstNameInputClasses = `col ${formInputsValidity.firstName ? '' : 'invalid'}`;
    const lastNameInputClasses = `col ${formInputsValidity.lastName ? '' : 'invalid'}`;
    const emailInputClasses = `mb-4 ${formInputsValidity.email ? '' : 'invalid'}`;
    const productInputClasses = `mb-4 ${formInputsValidity.firstName ? '' : 'invalid'}`;

    let loader = (
        <div className="loading-wrapper">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );

    return (
        <div className="orderFormWrapper">
            <Banner />
            <div className="container">
                <Breadcrump path="order" />
                <div className="row mt-4">
                    <div className="col-lg d-flex align-items-start justify-content-center flex-column">
                        <h5 className="text-muted">Fill down the information to complete the order</h5>
                        <form className="w-100" id="order__form" onSubmit={orderHandler}>
                            <div className="row mb-4">
                                <div className={firstNameInputClasses}>
                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="firstName" 
                                        aria-label="First name" 
                                        ref={firstNameRef}
                                    />
                                    {!formInputsValidity.firstName && <small>Please enter a valid first name</small>}
                                </div>
                                <div className={lastNameInputClasses}>
                                    <label htmlFor="lastName" className="form-label">Last Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="lastName" 
                                        aria-label="Last name" 
                                        ref={lastNameRef}
                                    />
                                    {!formInputsValidity.lastName && <small>Please enter a valid last name</small>}
                                </div>
                            </div>
                            <div className={emailInputClasses}>
                                <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="exampleInputEmail1" 
                                    aria-describedby="emailHelp" 
                                    ref={emailRef}
                                />
                                {!formInputsValidity.email && <small>Please enter a valid email</small>}
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Phone Number</label>
                                <PhoneInput
                                    inputClass="phone__input"
                                    country={'jo'}
                                    excludeCountries={['il']}
                                    value={phoneNumber}
                                    onChange={phone => setPhoneNumber(phone)}
                                />
                            </div>
                            <div className={productInputClasses}>
                                <select 
                                    className="form-select" 
                                    aria-label="Default select example" 
                                    ref={productRef}
                                    onChange={handleSelectedProduct}
                                >
                                    <option defaultValue>select product</option>
                                    {
                                        products && products.map((product) => (
                                            <option key={product.id} value={product.name}>{product.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="mb-2">
                                <div className="form-check form-check-inline">
                                    <input 
                                        className="form-check-input" 
                                        type="radio" 
                                        name="order-quantity"
                                        id="inlineCheckbox1" 
                                        value={24}
                                        defaultChecked={inputDisabled} 
                                        onClick={handleInputDisabled} 
                                    />
                                    <label className="form-label" htmlFor="inlineCheckbox1">Package (24 x 200ml)</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input" 
                                        type="radio" 
                                        name="order-quantity" 
                                        id="inlineCheckbox2" 
                                        value="bottelsQuantity" 
                                        onClick={handleInputDisabled} 
                                    />
                                    <label className="form-label" htmlFor="inlineCheckbox2">Enter quantity</label>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="order-quantity" className="form-label">Bottles Quantity</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="order-quantity" 
                                    aria-label="Bottles Quantity" 
                                    ref={bottelsQuantity}
                                    disabled={inputDisabled}
                                />
                            </div>
                            <div>
                                <button type="button" className="btn m-2" onClick={backToHome}>back to home</button>
                                <button type="submit" className="btn btn-primary">order now</button>
                            </div>
                            {isLoading && loader}
                            {orderSent && !isLoading && <Modal open={orderSent} handleClose={handleClose} />}
                        </form>
                    </div>
                    <div className="col-lg d-flex align-items-center justify-content-center flex-column">
                        <div className="product__image_wrapper">
                            <img src={selectedProduct} className="img-fluid" alt="product-img" />
                        </div>
                        <h4 className="product_price">Price: ${totalPrice}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
