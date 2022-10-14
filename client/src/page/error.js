import React from 'react'
import Header from '../component/Common/Header'
import Nav from '../component/Nav/Nav'
import Banner from '../component/Common/Banner'
import ErrorArea from '../component/Error'
import Footer from '../component/Common/Footer'
const Error = () => {
    return (
        <>
            <Nav />
            <Banner title="Error" />
            <ErrorArea />
            <Footer />
        </>
    )
}

export default Error