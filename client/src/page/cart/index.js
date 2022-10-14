import React from 'react'
import Header from '../../component/Common/Header'
import Nav from '../../component/Nav/Nav'
import Banner from '../../component/Common/Banner'
import CartArea from '../../component/Cart'
import Footer from '../../component/Common/Footer'

const Cart = () => {
    return (
        <>
            <Nav/>
            <Banner title="Cart" />
            <CartArea/>
            <Footer/>

        </>
    )
}

export default Cart