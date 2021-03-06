import React, { Fragment } from 'react';
import classes from './Home.module.css';

import Navbar from '../navbar/Navbar';
import Products from '../products/Products';
import OrderButton from '../orderButton/OrderButton';
import AboutUs from '../aboutUs/AboutUs';

export default function Home() {
    return (
        <Fragment>
            <div className={classes.home}>
                <Navbar />
                <div className={classes.homeIntroWrapper}>
                    <div className="row w-100">
                        <div className="col-lg d-flex justify-content-center align-items-center flex-column text-center mb-4">
                            <h1>straight from <br /> <span>nature</span></h1>
                            <p>Order your products at any time and we will deliver them directly to your home.</p>
                            <OrderButton />
                        </div>
                        <div className="col-lg d-flex justify-content-center align-items-center mt-4">
                            <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_P5CcfI.json"  background="transparent"  speed="1"  style={{width: "300px", height: "300px"}}  autoplay></lottie-player>
                        </div>
                    </div>
                </div>
                <div className={classes.deliverySteps}>
                    <div className={classes.stepBox}>
                        <lottie-player src="https://assets5.lottiefiles.com/temp/lf20_UsfnhV.json"  background="transparent"  speed="1"  style={{width: "150px", height: "150px"}}  loop  autoplay></lottie-player>
                        <h6>Browse the menu and order directly from the website</h6>
                    </div>
                    <div className={classes.stepBox}>
                        <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_7foh1e6l.json"  background="transparent"  speed="1"  style={{width: "150px", height: "150px"}}  loop  autoplay></lottie-player>
                        <h6>Your order will be immediately collected and sent by our couier</h6>
                    </div>
                    <div className={classes.stepBox}>
                        <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_d29eunxw.json"  background="transparent"  speed="1"  style={{width: "150px", height: "150px"}}  loop  autoplay></lottie-player>
                        <h6>Pick up delivery at your door and enjoy groceries</h6>
                    </div>
                </div>
            </div>
            <Products />
            <AboutUs />
        </Fragment>
        
    )
}
