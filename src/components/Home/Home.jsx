import React from 'react';
import './Home.css';
import BannerImage from '../../assets/banner/BannerImg02.jpg';


export default function Home() {


  return (
    <>
    <section id="home">
        <div className="banner_image"></div>
        <div className="container">
            <div className="banner_outer">
                <div className="col">
                    <h3 className="title">
                    WE ENHANCE YOUR TECHNOLOGY VISIBILITY <span>AND IMPACT.</span>
                         
                    </h3>
                    <p> We enhance your technology visibility and impact by delivering innovative solutions that align with your goals and drive meaningful results in a competitive landscape.</p>
                
                </div>
                <div className="col">
                    <div className="sub_banner_image">
                        <img src={BannerImage} alt="Banner_image" />
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
