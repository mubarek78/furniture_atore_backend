import React from 'react'
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'

const DashBoard = () => {
    let products = useSelector((state) => state.products.products);
    return (

        <>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                   <h4>DashBoard</h4>
                </div>
            </div>
        </>
    )
}

export default DashBoard
