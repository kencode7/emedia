import React from 'react';
import "./footer.css";



const Footer = () => {

    return (
        <div>
            <div className="socials" style={{ color: "rgb(255,173,0)"}} >
                <span className="fa fa-facebook-square mx-3"></span>
                <span className="fa fa-youtube-square mx-3"></span>
                <span className="fa fa-instagram mx-3"></span>
                <span className="teamRef align-items-center"> &#169;Eteam Media 2019 </span>
            </div>
        </div>
    )
}


export default Footer