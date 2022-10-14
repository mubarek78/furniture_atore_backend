import React from 'react'
import Header from '../../component/Common/Header'
import Nav from '../../component/Nav/Nav'
import Banner from '../../component/Common/Banner'
import Layout from '../../component/MyAccountDashboard/Layout'
import DashBoard from '../../component/MyAccountDashboard/DashBoard'
import Order from '../../component/MyAccountDashboard/Order'
import Footer from '../../component/Common/Footer'
const MyAccounts = () => {
    return (
        <>
            <Nav />
            <Banner title="Customer Dashboard" />
            <Layout>
                <DashBoard />
                <Order />
            </Layout>
            <Footer />

        </>
    )
}

export default MyAccounts