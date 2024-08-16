import { LOGO_IMG } from "../utils/constants";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{

    const [loginBtn,setLoginBtn]=useState("Login");

    const onlineStatus=useOnlineStatus();

   


    return(
        <div className="header">
            <div className="logo-container">
                  <a href="/"><img alt="logo" className="logo" src={LOGO_IMG}></img></a>
            </div>
            <div className="nav-items-container">
                <ul>
                    <li>
                        OnlineStatus :{ (onlineStatus) ? "🟢": "🔴"}
                    </li>

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
                    <li>
                        <Link to ="/grocery">Grocery</Link>
                    </li>
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
