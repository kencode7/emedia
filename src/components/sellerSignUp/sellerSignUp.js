import React, { useState } from 'react'
import { SignUpApi } from '../../utils/apis'


const SellerSignUp = () => {

    const [sellerData, setSellerData] = useState({ seller: true });
    const [disable, setDisable] = useState(false);



    const handleChange = (e) => {
        setSellerData({ ...sellerData, [e.target.id]: e.target.value })
        console.log("sellerData", sellerData)
    }

    const handleSignUp = async (e) => {

        e.preventDefault();
        setDisable(true)
        let result = await SignUpApi(sellerData);

        console.log("result", result)
    }



    return (
        <div>
            <form onSubmit={handleSignUp}>
                <div className="row" style={{ margin: 0 }}>
                    <div className="col-md-6 form-group">
                        <input className="form-control" type="text" placeholder="Name" required id="name" onChange={handleChange} />
                    </div>
                    <div className="col-md-6 form-group">
                        <input className="form-control" type="email" placeholder="Email Address" required id="email" onChange={handleChange} />
                    </div>
                </div>

                <div className="row" style={{ margin: 0 }}>
                    <div className="col-md-6 form-group">
                        <input className="form-control" type="text" placeholder="Location" required id="email" onChange={handleChange} />
                    </div>
                    <div className="col-md-6 form-group">
                        <input className="form-control" type="text" placeholder="Phone Number" required id="phone" onChange={handleChange} />
                    </div>
                </div>
                <div className="row" style={{ margin: 0 }}>
                    <div className="col-md-6 form-group">
                        <input className="form-control" type="password" placeholder="Password" required id="password" onChange={handleChange} />
                    </div>
                    <div className="col-md-6 form-group">
                        <input className="form-control" type="password" placeholder="Confirm Password" required id="confirmpassword" />
                    </div>
                </div>

                <div className="text-center mt-3">
                    <button className="btn regBtn">Register</button>
                </div>
            </form>
        </div>
    )
}

export default SellerSignUp