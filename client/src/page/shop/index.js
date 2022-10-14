import React from 'react'
import Header from '../../component/Common/Header'
import Nav from '../../component/Nav/Nav'
import Banner from '../../component/Common/Banner'
import Shop from '../../component/Shop/Shop'
import InstgramSlider from '../../component/Common/Instagram'
import Footer from '../../component/Common/Footer'

const ShopGrid = () => {
    return (
        <>
            <Nav />
            <Banner title="Shop" />
            <Shop />
            <InstgramSlider />
            <Footer />
        </>
    )
}

export default ShopGrid