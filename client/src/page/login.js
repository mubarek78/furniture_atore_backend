import React from 'react'
import Header from '../component/Common/Header'
import Nav from '../component/Nav/Nav'
import Banner from '../component/Common/Banner'
import LoginArea from '../component/Login'
import Footer from '../component/Common/Footer'
const Login = () => {
    return (
        <>
            <Nav />
            <Banner title="Login" />
            <LoginArea />
            <Footer />
        </>
    )
}

export default Login