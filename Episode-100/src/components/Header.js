import { LOGO_IMG } from "../utils/constants";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Header=()=>{

    const [loginBtn,setLoginBtn]=useState("Login");

    useEffect(()=>{
        //console.log("useEffect Called")
    },[])

    //console.log("Header rendered")


    return(
        <div className="header">
            <div className="logo-container">
                  <a href="/"><img alt="logo" className="logo" src={LOGO_IMG}></img></a>
            </div>
            <div className="nav-items-container">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact </Link>
                    </li>
                    <li>Cart</li>
                    <button className="login-btn"
                     onClick={()=>{
                        (loginBtn==="Login") ? setLoginBtn("Logout") : setLoginBtn("Login");
                     }}>{loginBtn}</button>
                </ul>

            </div>
            
        </div>
    )
}
export default Header;
