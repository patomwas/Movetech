import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faLink, faHeadset, faChartLine, faDesktop, faLightbulb } from '@fortawesome/free-solid-svg-icons';
export default function Services() {

    // Icons
    const faCloudIcon = <FontAwesomeIcon icon={faCloud} />;
    const faLinkIcon = <FontAwesomeIcon icon={faLink} />;
    const faHeadsetIcon = <FontAwesomeIcon icon={faHeadset} />;
    const faChartLineIcon = <FontAwesomeIcon icon={faChartLine} />;
    const faDesktopIcon = <FontAwesomeIcon icon={faDesktop} />;
    const faLightbulbIcon = <FontAwesomeIcon icon={faLightbulb} />;
  return (
    <>
            <div id="services">
                <div className="container">
                    <div className="title_headling">
                        <h3>What IT Services We Offer to Our Clients</h3>
                        <p></p>
                    </div>
                    <div className="service_wrapper">
                        <div className="service_box">
                            <div className="service_icon blue_icon">{faCloudIcon}</div> {/* Updated to Cloud Icon */}
                            <h4 className="number">01</h4>
                            <div className="service_content">
                                <h5>Cloud Computing</h5>
                                <p>We offer comprehensive cloud services, including cloud storage, computing, and migration,
                                    enabling businesses to scale efficiently while enhancing accessibility and collaboration.</p>
                            </div>
                        </div>

                        <div className="service_box">
                            <div className="service_icon">{faLinkIcon}</div> {/* Updated to Link Icon */}
                            <h4 className="number">02</h4>
                            <div className="service_content">
                                <h5>System Integration</h5>
                                <p>Movetech Solutions Limited offers system integration services that connect various IT systems and applications,
                                    ensuring seamless data flow and improving operational efficiency across your organization.</p>
                            </div>
                        </div>

                        <div className="service_box">
                            <div className="service_icon">{faHeadsetIcon}</div> {/* Updated to Headset Icon */}
                            <h4 className="number">03</h4>
                            <div className="service_content">
                                <h5>IT Support and Maintenance</h5>
                                <p>Our dedicated IT support team provides 24/7 assistance to resolve technical issues,
                                    perform system updates, and ensure your technology operates smoothly and securely.</p>
                            </div>
                        </div>

                        <div className="service_box">
                            <div className="service_icon green_icon">{faChartLineIcon}</div> {/* Updated to Chart Line Icon */}
                            <h4 className="number">04</h4>
                            <div className="service_content">
                                <h5>Data Analytics</h5>
                                <p>Our data analytics services help businesses make informed decisions
                                    by transforming raw data into actionable insights, driving strategic planning and operational efficiency.</p>
                            </div>
                        </div>

                        <div className="service_box">
                            <div className="service_icon">{faDesktopIcon}</div> {/* Updated to Desktop Icon */}
                            <h4 className="number">05</h4>
                            <div className="service_content">
                                <h5>Website Development</h5>
                                <p>Our web development team creates responsive, user-friendly websites that enhance your online presence,
                                    drive traffic, and engage customers through modern design and functionality.</p>
                            </div>
                        </div>

                        <div className="service_box">
                            <div className="service_icon blue_icon">{faLightbulbIcon}</div> {/* Updated to Lightbulb Icon */}
                            <h4 className="number">06</h4>
                            <div className="service_content">
                                <h5>IT Consulting</h5>
                                <p>Our IT consulting services offer strategic guidance to help businesses align their technology with organizational goals,
                                    optimize processes, and identify opportunities for growth and innovation.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
