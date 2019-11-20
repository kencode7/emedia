import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Footer from '../footer/footer'

const Layout = (props) => {
    return (
        <div>

            <Navbar bg="dark" className="shadow">
                <Navbar.Brand style={{ color: "yellow" }}>
                    <span className="fa fa-shopping-bag mx-3 logo"></span>
                    {'Z-Bag'}
                </Navbar.Brand>
                {
                    props.auth === true
                        ?
                        <Navbar.Collapse className="justify-content-end">
                            <div id="trans"></div>
                            <Nav.Link style={{ color: "yellow" }} >Username</Nav.Link>
                            <Nav.Link style={{ color: "lightgray" }} ><span className="fa fa-gear"></span></Nav.Link>
                        </Navbar.Collapse>
                        :

                        <Navbar.Collapse className="justify-content-end">
                            <div id="trans"></div>
                            <Nav.Link style={{ color: "yellow" }} href="/login">Login</Nav.Link>
                        </Navbar.Collapse>
                }

            </Navbar>
            <div>
                {props.children}
            </div>


            <div>
                <Footer />
            </div>
        </div>


    )
}

export default Layout