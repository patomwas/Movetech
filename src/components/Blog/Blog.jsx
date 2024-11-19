import React from 'react';
import './Blog.css';
import BlogImage from '../../assets/blog/blog_img02.jpg';

export default function Blog() {
  return (
        <>
            <section id="blog">
                <div className="container">
                    <div className="blog_wrapper">
                        <div className="blog_col">
                            <h3>WE HELP BUSINESSES INNOVATE, SCALE, AND SUCCEED IN TECH</h3>
                            <p>In today’s digital landscape, technology is the backbone of every successful business. Our team of experts provides insights on the latest IT trends, cloud solutions, cybersecurity measures, and software development best practices. Join us as we explore the tools and strategies that empower organizations to thrive in a rapidly changing environment.</p>
                            <div className="btn_wrapper">
                                <a className="btn" href="/">Get Started</a>
                            </div>
                        </div>
                        <div className="blog_col">
                            <div className="blog_image">
                                <img src={BlogImage} alt="IT Blog" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
