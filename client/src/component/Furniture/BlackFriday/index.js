
import { Link } from 'react-router-dom'
// import Img
import fimg22 from '../../../assets/img/furniture/product/sofa22.jpg'
import fimg23 from '../../../assets/img/furniture/product/sofa22.jpg'

    
const BlackFriday = () => {
    
    return (
        <>
            <section id="new_arrival1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-12">
                            <div >
                                <img src={fimg23} alt="img" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 col-12">
                            <div className="new_arrival_desc">
                            <h4>NEW ARRIVALS</h4>
                            <h1>Classical Sofa</h1>
                            <Link to="/shop" className='new_ar_btn'>Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlackFriday
