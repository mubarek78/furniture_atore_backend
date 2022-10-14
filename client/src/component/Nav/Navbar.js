import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import TopHeader from './TopHeader'
import svgsearch from './../../assets/img/svg/search.svg'
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { openSidebar, openSubmenu, closeSubmenu } from "../../features/navSettings";
import { getProductById, addToCart, addToComp, addToFav, updateCart, removeCart, removeFav} from "../../features/products" ;
import logoWhite from './../../assets/img/logo-white.png'
import avater from './../../assets/img/common/avater.png'
import Swal from 'sweetalert2'
import svg from './../../assets/img/svg/cancel.svg'


const Navbar = () => {
  const [click, setClick] = useState(false);
  const [width, setDimensions] = useState(window.innerWidth)
  const navigate = useNavigate()
  const carts = useSelector((state) => state.products.carts);
  const favorites = useSelector((state) => state.products.favorites);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user.status);
  const user = useSelector((state) => state.user.user);


  const logout = () => {
      Swal.fire({
          icon: 'success',
          title: 'Logout Sucessfull',
          text: 'Thank You'
      })
      dispatch({ type: "user/logout" })
      navigate("/login");
  }


  useEffect(() => {
    function handleResize() {
      setDimensions( window.innerWidth)
    
}

    window.addEventListener('resize', handleResize)

    return _ => {
      window.removeEventListener('resize', handleResize)
    
}
  })

  function handleSidbar() {
   

    console.log(`Renderd at ${width}`) 
    if(width > 800){
    if (click) {
        document.querySelector("#navbar-about").style = ("transform: translateX(100%);")
    } else {
        document.querySelector("#navbar-about").style = ("transform: translateX(0%);")
    }
    setClick(!click);
}else{
    dispatch(openSidebar({type: 'settings/openSidebar', payload: true}));
}
}



  const rmCartProduct = (id) => {
      dispatch(removeCart({id}));
  }

  const rmFavProduct = (id) => {
      dispatch(removeFav({id}));
  }

  const cartTotal = () => {
      return carts.reduce(function (total, item) {
          return total + ((item.quantity || 1) * item.price)
      }, 0)
  }

  const handleClick = () => {
      if (click) {
          document.querySelector("#navbar-add-cart").style = ("transform: translateX(100%);")
      } else {
          document.querySelector("#navbar-add-cart").style = ("transform: translateX(0%);")
      }
      setClick(!click);
  }
  const handleWish = () => {
      if (click) {
          document.querySelector("#navbar-wishlish").style = ("transform: translateY(-100%);")
      } else {
          document.querySelector("#navbar-wishlish").style = ("transform: translateY(16%);")
      }
      setClick(!click);
  }

  const handleSearch = () => {
      if (click) {
          document.querySelector("#search").style = ("transform: translate(-100%, 0); opacity: 0")
      } else {
          document.querySelector("#search").style = ("transform: translate(0px, 0px); opacity: 1")
      }
      setClick(!click);
  }


  // Sticky Navbar Area
  useEffect(() => {
      window.addEventListener('scroll', isSticky);
      return () => {
          window.removeEventListener('scroll', isSticky);
      };
  });

  const isSticky = (e) => {
      const header = document.querySelector('.nav');
      const scrollTop = window.scrollY;
      scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
  };





  const displaySubmenu = (e) => {
    const text = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom + (window.scrollY + 3);
      dispatch(
        openSubmenu({text, center, bottom})
      );
    
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      dispatch(closeSubmenu());
    }
  };
  return (
    <>
    <TopHeader />
    <nav className='nav header-section' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='' />
        </div>
      
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              Home
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              Pages
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              Blog
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              About us
            </button>
          </li>
        </ul>
     

        <ul className="header-action-link action-color--black action-hover-color--golden">
              <li>       
                     <a onClick={handleWish}><i className="fa fa-heart"></i><span >{favorites.length}</span></a>
                    
              </li>
              <li>   
                 <a  onClick={handleClick}><i className="fa fa-shopping-bag"></i><span >{carts.length}</span></a>   
                </li>
                <li>
                    <a  className="search_width" onClick={handleSearch} >
                        <img src={svgsearch} alt="img" />
                    </a>
                </li>
                <li>
                    <a  onClick={handleSidbar}>
                        <i className="fa fa-bars"></i>
                    </a>
              </li>
              {
                                    !status ?
                                    <li className="after_login">      
                                    <i className="fa fa-user"></i>
                                        <ul className="auth_dropdown">
            
                                            <li><Link to="/login"> Login</Link></li>
                                            <li><Link to="/register"> Register</Link></li>
                                        </ul>
                                    </li>
                                        
                                        :
                                            <li className="after_login"><img src={avater} alt="avater" /> {user.name || 'Jhon Doe'} <i className="fa fa-angle-down"></i>
                                                <ul className="auth_dropdown">
                                                    <li><Link to="/my-account/auther-order"><i className="fa fa-cubes"></i> My Orders</Link></li>
                                                    <li><Link to="#!" onClick={() => { logout() }} ><i className="fa fa-sign-out"></i> Logout</Link></li>
                                                </ul>
                                            </li>
                                        
                                }
        </ul>


           <div id="navbar-about" className="navbar navbar-rightside navbar-mobile-about-section">
                <div className="navbar-header text-right">
                    <button className="navbar-close" onClick={handleSidbar}>
                        <img src={svg} alt="icon" />
                    </button>
                </div>
                <div className="mobile-contact-info">
                    <address className="address">
                        <img src={logoWhite} alt="logo" />
                        <span>Address: Your address goes here.</span>
                        <span>Call Us: 0123456789, 0123456789</span>
                        <span>Email: demo@example.com</span>
                    </address>
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
                    <ul className="user-link">
                        <li><Link to="/wishlist">Wishlist</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/checkout-one">Checkout</Link></li>
                    </ul>
                </div>
            </div> 





            <div id="navbar-add-cart" className="navbar navbar-rightside navbar-add-cart-section">
                <div className="navbar-header text-right">
                    <button className="navbar-close" onClick={handleClick}>
                        <img src={svg} alt="icon" />
                    </button>
                </div>
                <div className="navbar-add-cart-wrapper">
                    <h4 className="navbar-title">Shopping Cart</h4>
                    <ul className="navbar-cart">
                        {carts.map((data, index) => (
                            <li className="navbar-wishlist-item-single" key={index}>
                                <div className="navbar-wishlist-item-block">
                                    <Link to={`/product-details-one/${data.id}`} className="navbar-wishlist-item-image-link" >
                                        <img src={data.img} alt="img"
                                            className="navbar-wishlist-image" />
                                    </Link>
                                    <div className="navbar-wishlist-item-content">
                                        <Link to={`/product-details-one/${data.id}`} className="navbar-wishlist-item-link">{data.title}</Link>
                                        <div className="navbar-wishlist-item-details">
                                            <span className="navbar-wishlist-item-details-quantity">{data.quantity || 1} x
                                            </span>
                                            <span className="navbar-wishlist-item-details-price"> ${data.price}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="navbar-wishlist-item-delete text-right">
                                    <a href="#!" className="navbar-wishlist-item-delete" onClick={() => rmCartProduct(data.id)}><i className="fa fa-trash"></i></a>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="navbar-cart-total-price">
                        <span className="navbar-cart-total-price-text">Subtotal:</span>
                        <span className="navbar-cart-total-price-value">${cartTotal()}.00</span>
                    </div>
                    <ul className="navbar-cart-action-button">
                        <li>
                            <Link to="/cart" className="theme-btn-one btn-black-overlay btn_md">View Cart</Link>
                        </li>
                        <li>
                            <Link to="/checkout-one" className="theme-btn-one btn-black-overlay btn_md">Checkout</Link>
                        </li>
                    </ul>
                </div>
            </div> 


            <div id="navbar-wishlish" className="navbar navbar-rightside navbar-add-cart-section">
                <div className="navbar-header text-right">
                    <button className="navbar-close" onClick={handleWish}>
                        <img src={svg} alt="icon" />
                    </button>
                </div>
                <div className="navbar-wishlist-wrapper">
                    <h4 className="navbar-title">Wishlist</h4>

                    <ul className="navbar-wishlist">
                        {favorites.map((data, index) => (
                            <li className="navbar-wishlist-item-single" key={index}>
                                <div className="navbar-wishlist-item-block">
                                    <Link to={`/product-details-one/${data.id}`} className="navbar-wishlist-item-image-link" >
                                        <img src={data.img} alt="img"
                                            className="navbar-wishlist-image" />
                                    </Link>
                                    <div className="navbar-wishlist-item-content">
                                        <Link to={`/product-details-one/${data.id}`} className="navbar-wishlist-item-link">{data.title}</Link>
                                        <div className="navbar-wishlist-item-details">
                                            <span className="navbar-wishlist-item-details-quantity">1 x
                                            </span>
                                            <span className="navbar-wishlist-item-details-price">{data.price}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="navbar-wishlist-item-delete text-right">
                                    <a href="#!" className="navbar-wishlist-item-delete" onClick={() => rmFavProduct(data.id)}><i className="fa fa-trash"></i></a>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <ul className="navbar-wishlist-action-button">
                        <li>
                            <Link to="/wishlist" className="theme-btn-one btn-black-overlay btn_md">View wishlist</Link>
                        </li>
                    </ul>
                </div>
            </div>

       
      </div>
    </nav>
    </>
  );
};

export default Navbar;
