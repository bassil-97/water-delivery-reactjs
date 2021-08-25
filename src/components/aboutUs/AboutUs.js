import React from 'react';
import './AboutUs.css';

export default function AboutUs() {
    return (
        <div className="about__us">
            <div className="container">
                <h1>About Us</h1>
                <hr className="mb-4" />
                <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
                only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className="about__us__elements">
                    <div className="about__us_element">
                        <div className="about__us__icon">
                            <lottie-player 
                                src="https://assets9.lottiefiles.com/packages/lf20_7UVfnn.json"  
                                background="transparent"  speed="1"  style={{width: "60px", height: "60px"}}  
                                loop  autoplay
                            />
                        </div>
                        <span>Hosha, Jordan</span>
                    </div>
                    <div className="about__us_element">
                        <div className="about__us__icon">
                            <lottie-player 
                                src="https://assets4.lottiefiles.com/packages/lf20_ebqz3ltq.json"  
                                background="transparent"  speed="1"  style={{width: "90px", height: "90px"}}  
                                loop  autoplay
                            />
                        </div>
                        <span>bassilalqadi65@gmail.com</span>
                    </div>
                    <div className="about__us_element">
                        <div className="about__us__icon">
                            <lottie-player 
                                src="https://assets5.lottiefiles.com/private_files/lf30_GNPF2n.json"  
                                background="transparent"  speed="1"  style={{width: "100px", height: "100px"}}  
                                loop  autoplay
                            />
                        </div>
                        <span>+962791858735</span>
                    </div>
                    
                </div>
                <div className="about__us__elements">
                    <div className="about__us_element">
                        <div className="about__us__icon">
                            <lottie-player 
                                src="https://assets9.lottiefiles.com/packages/lf20_7UVfnn.json"  
                                background="transparent"  speed="1"  style={{width: "60px", height: "60px"}}  
                                loop  autoplay
                            />
                        </div>
                        <span>Hosha, Jordan</span>
                    </div>
                    <div className="about__us_element">
                        <div className="about__us__icon">
                            <lottie-player 
                                src="https://assets4.lottiefiles.com/packages/lf20_ebqz3ltq.json"  
                                background="transparent"  speed="1"  style={{width: "90px", height: "90px"}}  
                                loop  autoplay
                            />
                        </div>
                        <span>bassilalqadi65@gmail.com</span>
                    </div>
                    <div className="about__us_element">
                        <div className="about__us__icon">
                            <lottie-player 
                                src="https://assets5.lottiefiles.com/private_files/lf30_GNPF2n.json"  
                                background="transparent"  speed="1"  style={{width: "100px", height: "100px"}}  
                                loop  autoplay
                            />
                        </div>
                        <span>+962791858735</span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
