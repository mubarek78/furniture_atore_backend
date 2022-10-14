import React from 'react'
import { Link } from 'react-router-dom';


const InstgramSlider = () => {
  return (
    <>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="instagram_box">
                   <div className="instagram_content">
                      <h2>Our Instagram</h2>
                      <p>Follow us on Instagram</p>
                      <Link to="instagram.com">Follow Us</Link>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>
     
    </>
  )
}

export default InstgramSlider