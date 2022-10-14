import React from 'react'
import Header from '../component/Common/Header'
import Nav from '../component/Nav/Nav'
import Banner from '../component/Furniture/Banner'
import BannerBottom from '../component/Furniture/BannerBottom'
// import BannerBottom from '../component/Electronics/BannerBottom'
import HotProduct from '../component/Furniture/HotProduct'
// import TopPRoduct from '../component/Electronics/TotProduct'
import BlackFriday from '../component/Furniture/BlackFriday'
import PopularProduct from '../component/Furniture/PopularProduct'
import OurStory from '../component/Furniture/OurStory'
import Blog from '../component/Furniture/Blog'
import InstgramSlider from '../component/Common/Instagram'
import Features from '../component/Furniture/Features/Features'
import Footer from '../component/Common/Footer'

const Furniture = () => {
    return (
        <>
            <Nav />
            <Banner />
            <BannerBottom />
            <HotProduct />
            {/* <TopPRoduct /> */}
            <BlackFriday />
            <PopularProduct />
            <OurStory />
            <Blog />
            <InstgramSlider container="container" />
            <Features/>
            <Footer />
        </>
    )
}

export default Furniture