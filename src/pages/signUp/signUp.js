import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import Consumer from '../../components/consumerSignUp/consumerSignUp'
import Seller from '../../components/sellerSignUp/sellerSignUp'
import './signUp.css'
import { Link } from 'react-router-dom'



const SignUp = () => {


    return (
        <div style={{ background: "#343a40" }}>
            <Link to="/">
                <span className="fa fa-arrow-left mx-4 my-4" style={{ color: "yellow", fontSize: 26 }}></span>
            </Link>
            <div className="text-center bigLogo mb-3">
                <span className="fa fa-shopping-bag"></span>
            </div>
            <Tabs defaultActiveKey="consumer" className="tabs mx-auto" style={{ color: "yellow" }}>
                <Tab eventKey="consumer" title="Consumer" className="tabs mx-auto mt-5">
                    <Consumer />
                </Tab>
                <Tab eventKey="seller" title="Seller" className="tabs mx-auto mt-5" >
                    <Seller />
                </Tab>
            </Tabs>
        </div>
    )
}

export default SignUp