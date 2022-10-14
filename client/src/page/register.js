import React from 'react'
import Header from '../component/Common/Header'
import Nav from '../component/Nav/Nav'
import Banner from '../component/Common/Banner'
import RegisterArea from '../component/Register'
import Footer from '../component/Common/Footer'
const Register = () => {
    return (
        <>
            <Nav />
            <Banner title="Register" />
            <RegisterArea />
            <Footer />
        </>
    )
}

export default Register