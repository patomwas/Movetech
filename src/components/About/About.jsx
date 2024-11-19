import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faChartPie, faTruckFast, faUserClock, faHouseLaptop, faPhone } from '@fortawesome/free-solid-svg-icons';
import AboutImage from '../../assets/about/about_us02.jpg';

export default function About() {
    // Icons
    const faBusinessIcon = <FontAwesomeIcon icon={faBusinessTime} />
    const faChartPieIcon = <FontAwesomeIcon icon={faChartPie} />
    const faTruckFastIcon = <FontAwesomeIcon icon={faTruckFast} />
    const faUserClockIcon = <FontAwesomeIcon icon={faUserClock} />
    const faHouseLaptopIcon = <FontAwesomeIcon icon={faHouseLaptop} />
    const faPhoneIcon = <FontAwesomeIcon icon={faPhone} />

  return (
    <>
    <section id="about">
        <div class="container">
            <div className="title_headling">
                <h3>Empowering Innovation, Driving Digital Transformation</h3>
                <p>Movetech Investments Limited specializes in delivering advanced IT solutions that enhance business efficiency and growth. We are committed to transforming
                   ideas into impactful technology and investment opportunities for a brighter future.</p>
            </div>
            <div className="about_box_wrapper">
                <div className="about_box">
                    <div className="about_icon">
                        {faBusinessIcon}
                    </div>
                    <div className="about_content">
                        <h5>Development</h5>
                        <p>Our transparent and collaborative process product innovation process places the customer at the heart of the journey throughout the whole project as we accelerate them from idea to a realised, 
                            commercially validated, new product proposition in the shortest time possible.</p>
                    </div>
                </div>
                <div className="about_box">
                    <div className="about_icon green_icon">
                        {faChartPieIcon}
                    </div>
                    <div className="about_content">
                        <h5>Integration</h5>
                        <p> We focus on seamless integration services, connecting diverse systems 
                            and platforms to streamline business operations. Our solutions ensure data consistency and interoperability, empowering organizations to work more efficiently and make informed decisions.</p>
                    </div>
                </div>
                <div className="about_box">
                    <div className="about_icon blue_icon">
                        {faTruckFastIcon}
                    </div>
                    <div className="about_content">
                        <h5>Branding</h5>
                        <p>We offer comprehensive branding services to help businesses build a strong and memorable identity. From logo design to digital presence, we create cohesive brand strategies that resonate with target audiences, enhancing visibility and fostering customer loyalty.</p>
                    </div>
                </div>
            </div>

            <div className="about_box_details">
                <div className="about_col">
                    <div className="about_image">
                        <img src={AboutImage} alt="about" className="about_main"/>
                    </div>
                </div>
                <div className="about_col more_space">
                    <h3>Movetech Solutions boosts growth and revenue with efficient, streamlined IT solutions.</h3>
                    <p>Our tailored technology services are crafted to optimize workflows, reduce costs, and drive sustainable business success.</p>

                    <div className="grid_info">
                        <div className="icon">{faUserClockIcon}</div>
                        <div className="detail">
                            <h4>Custom Software Development Solutions</h4>
                            <p>Movetech Solutions Limited offers customized software development to meet your business needs, 
                                creating scalable applications that enhance efficiency and drive innovation.</p>
                        </div>
                    </div>
                    <div className="grid_info">
                        <div className="icon green_icon">{faHouseLaptopIcon}</div>
                        <div className="detail">
                            <h4>Integrated IT Support Services</h4>
                            <p>We provide 24/7 IT support solutions to ensure your systems run smoothly,
                                 resolve issues, and optimize performance for business success.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
