import React, { useRef, useState } from 'react';
import './OrderForm.css';

import waterDrop from '../../assets/water-drop.svg';
import Breadcrump from '../../UI/breadcrumb/Breadcrump';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { backToHome } from '../../helpers/helpers';


const isEmpty = value => value.trim() === ''; 

export default function OrderForm() {

    const [formInputsValidity, setFormInputsValidity] = useState({
        firstName: true,
        lastName: true,
        email: true,
        product: true,
    });

    const [phoneNumber, setPhoneNumber] = useState('us');
    const [orderSent, setOrderSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const productRef = useRef();

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
                phoneNumber: phoneNumber
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
    
                setPhoneNumber('');
                document.getElementById("order__form").reset();
            }
        }
    }


    const firstNameInputClasses = `col ${formInputsValidity.firstName ? '' : 'invalid'}`;
    const lastNameInputClasses = `col ${formInputsValidity.lastName ? '' : 'invalid'}`;
    const emailInputClasses = `mb-4 ${formInputsValidity.email ? '' : 'invalid'}`;
    const productInputClasses = `mb-4 ${formInputsValidity.firstName ? '' : 'invalid'}`;

    let orderMessage = (
        <div className="orderMessage">
            <p className="mb-0">Your order has been sent successfully</p>
        </div>
    );

    let loader = (
        <div className="loading-wrapper">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );

    return (
        <div className="orderFormWrapper">
            <div className="header-container" />
            <div className="container">
                <Breadcrump path="order" />
                <div className="row mt-4">
                    <div className="col-lg d-flex align-items-start justify-content-center flex-column">
                        <h5 className="text-muted">Fill down your information to complete the order</h5>
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
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="exampleInputEmail1" 
                                    aria-describedby="emailHelp" 
                                    ref={emailRef}
                                />
                                {!formInputsValidity.email && <small>Please enter a valid email</small>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone number</label>
                                <PhoneInput
                                    inputClass="phone__input"
                                    country={'jo'}
                                    excludeCountries={['il']}
                                    value={phoneNumber}
                                    onChange={phone => setPhoneNumber(phone)}
                                />
                            </div>
                            <div className={productInputClasses}>
                                <select className="form-select" aria-label="Default select example" ref={productRef}>
                                    <option selected>select product</option>
                                    <option value="Product 1">Product 1</option>
                                    <option value="Product 2">Product 2</option>
                                    <option value="Product 3">Product 3</option>
                                </select>
                            </div>
                            <button type="button" className="btn m-2" onClick={backToHome}>back to home</button>
                            <button type="submit" className="btn btn-primary">order now</button>
                            {isLoading && loader}
                            {orderSent && !isLoading && orderMessage}
                        </form>
                    </div>
                    <div className="col-lg d-flex align-items-center justify-content-center">
                        <img src={waterDrop} className="img-fluid" width="50%" height="50%" />
                    </div>
                </div>
            </div>
        </div>
    )
}
