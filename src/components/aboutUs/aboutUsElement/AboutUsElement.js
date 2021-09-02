import React from 'react';
import './AboutUsElement.css';

export default function AboutUsElement(props) {
    return (
        <div className="about__us_element" data-aos="zoom-in">
            <div className="about__us__icon">
                <lottie-player 
                    src={props.IconSrc}
                    background="transparent"  speed="1"  style={{width: props.width, height: props.height}}  
                    loop  autoplay
                />
            </div>
            <span>{props.content}</span>
        </div>
    )
}
