import React from 'react';
import './AboutUs.css';

import AboutUsElement from './aboutUsElement/AboutUsElement';

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
                    <AboutUsElement 
                        IconSrc={"https://assets9.lottiefiles.com/packages/lf20_7UVfnn.json"}
                        width={"60px"}
                        height={"60px"}
                        content={"Hosha, Jordan"}
                    />
                    <AboutUsElement 
                        IconSrc={"https://assets4.lottiefiles.com/packages/lf20_ebqz3ltq.json"}
                        width={"90px"}
                        height={"90px"}
                        content={"bassilalqadi65@gmail.com"}
                    />
                    <AboutUsElement 
                        IconSrc={"https://assets5.lottiefiles.com/private_files/lf30_GNPF2n.json"}
                        width={"100px"}
                        height={"100px"}
                        content={"+962791858735"}
                    />
                </div>
                <div className="about__us__elements">
                    <AboutUsElement 
                        IconSrc={"https://assets9.lottiefiles.com/packages/lf20_6HFXXE.json"}
                        width={"60px"}
                        height={"60px"}
                        content={"@bassil-97"}
                    />
                    <AboutUsElement 
                        IconSrc={"https://assets5.lottiefiles.com/private_files/lf30_f5ytlpiy.json"}
                        width={"90px"}
                        height={"90px"}
                        content={"bassil_qadi"}
                    />
                    <AboutUsElement 
                        IconSrc={"https://assets9.lottiefiles.com/private_files/lf30_nfrwwnhp.json"}
                        width={"100px"}
                        height={"100px"}
                        content={"Bassil Alqadi"}
                    />
                </div>
            </div>
        </div>
    )
}
