import React from 'react'
import { Link } from 'react-router-dom'

const OurStory = () => {
    return (
        <>
             <section id="furniture_story">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="our_story_content">
                        <h2>Sign up now & get 10% off</h2>
                        <p>Be the first to know about our new arrivals and exclusive offers.</p>
                        <Link to="/register" className="theme-btn-one bg-black btn_md">Register</Link>
                        <ul className="social-link">
                        <li>
                            <a href="#!"><i className="fa fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href="#!"><i className="fa fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="#!"><i className="fa fa-instagram"></i></a>
                        </li>
                        <li>
                            <a href="#!"><i className="fa fa-linkedin"></i></a>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default OurStory
