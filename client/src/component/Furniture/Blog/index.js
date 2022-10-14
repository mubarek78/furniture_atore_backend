import React from 'react'
import { Link } from 'react-router-dom'
import Heading from '../Heading'

import Blog1 from '../../../assets/img/furniture/blog/blog1.jpg'
import Blog2 from '../../../assets/img/furniture/blog/blog2.jpg'
import Blog3 from '../../../assets/img/furniture/blog/blog1.jpg'


const Blog = () => {
    return (
        <>
    <section id="blog_area_two" className="ptb-100">
        <div className="container">
            <Heading heading="Our Blogs"/>
            <p className='blog-desc'>Find a vibrant ideal to go well with your style with our awesome choice</p>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="blog_box">
                        <div className="blog_img">
                          <Link to="/blog-single-one">
                              <img src={Blog1} alt="img" />
                          </Link>
                        </div>
                        <div className="blog_content">
                            <div className="blog_content_wraper">
                              <span>07 Jun 2022</span>
                              <h4>Khsadh denouncing pleasure and rodway</h4>
                              <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avo</p>
                              <Link to="/blog-single-one">Read More</Link>
                            </div>
                        </div>
                      </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="blog_box">
                        <div className="blog_img">
                          <Link to="/blog-single-one">
                              <img src={Blog2} alt="img" />
                          </Link>
                        </div>
                        <div className="blog_content">
                            <div className="blog_content_wraper">
                              <span>10 Sep 2021</span>
                              <h4>Umistaken tempor incididunt consectetur</h4>
                              <p>But I must explain to you how all this mistaorn and I expound the  of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those</p>
                              <Link to="/blog-single-one">Read More</Link>
                            </div>
                        </div>
                      </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="blog_box">
                        <div className="blog_img">
                          <Link to="/blog-single-one">
                              <img src={Blog3} alt="img" />
                          </Link>
                        </div>
                        <div className="blog_content">
                            <div className="blog_content_wraper">
                              <span>09 Jun 2022</span>
                              <h4>Ueiusmod tempor incididunt consectetur</h4>
                              <p>Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                              <Link to="/blog-single-one">Read More</Link>
                            </div>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Blog
