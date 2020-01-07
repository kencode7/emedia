import React from 'react'
import './dashboard.css'
import p2 from '../../assets/images/product1.jfif'
import p3 from '../../assets/images/product2.jfif'
const UserDashboard = () => {
    return (
        <div>
            <div className="row" style={{ margin: 0 }}>
                <div className='col-md-4 col-sm-12' style={{ marginTop: "8%" }}>
                    <div className="userImg mx-auto">

                    </div>
                    <div className="details d-flex justify-content-center">
                        <div>
                            <div className="username">Nonso</div>
                            <div><span className="fa fa-map-pin mr-4" style={{ color: "yellow" }}></span>Enugu</div>
                            <div><span className="fa fa-envelope mr-4" style={{ color: "yellow" }}></span>nonso@test.com</div>
                            <div><span className="fa fa-phone mr-4" style={{ color: "yellow" }}></span>08022449114</div>
                        </div>
                    </div>
                </div>
                <div className='col-md-8 col-sm-12' style={{ marginTop: "7%" }}>
                    <div>
                        <span className="stab mr-5">wish list</span>
                        <span className="tab">Setting</span>
                    </div>
                    <div className="row" style={{ margin: 0 }}>
                        <div className="col-12">
                            <div className="row" style={{ margin: 0 }}>
                                <div className="col-md-6">
                                    <div className="listImg">
                                        <img src={p3} alt="" />
                                    </div>
                                    <p>Black cross ear rings</p>
                                    <button className="btn btn-warning">buy</button>
                                </div>
                                <div className="col-md-6"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserDashboard