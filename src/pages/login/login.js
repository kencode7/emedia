import React, { useState } from 'react';
import './login.css'
import { Link } from 'react-router-dom'
import { LoginApi } from '../../utils/apis'

const Login = (props) => {

    const [data, setData] = useState({})
    const [disable, setDisable] = useState(false);
    
    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value })
        console.log("data", data)
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        let result = await LoginApi(data)
        props.history.push({pathname: "/catalog"})
        console.log('result', result)
    }


    return (
        <div>
            <Link to="/">
                <span className="fa fa-arrow-left mx-4 my-4" style={{ color: "yellow", fontSize: 26 }}></span>
            </Link>
            <div className="login mx-auto">
                <form onSubmit={handleLogin}>

                    <span className="fa fa-shopping-bag bag mr-3"></span><span style={{ color: "yellow" }} className="loginTxt">Login</span>
                    <div className="form-group text-center mt-4">
                        <input type="email" placeholder="Email" className="form-control" required id='email' onChange={handleChange} />
                    </div>
                    <div className="form-group text-center">
                        <input type="password" placeholder="Password" className="form-control" id='password' />
                    </div>
                    <div className="text-center mt-3 mb-4">
                        <button className="btn regBtn" style={{ width: "70%" }}>Log in</button>
                    </div>

                </form>

            </div>
        </div>
    )
}


export default Login