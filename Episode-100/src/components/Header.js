import { LOGO_IMG } from "../utils/constants";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";

import { useSelector } from "react-redux";



import UserContext from "../utils/UserContext";

const Header=()=>{

    const [loginBtn,setLoginBtn]=useState("Login");

    const onlineStatus=useOnlineStatus();

    const data=useContext(UserContext);
    const {loggedInUser}=data;

    const cartItems=useSelector((store)=>store.cart.items);
    console.log(cartItems);

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
                    <li>
                        <Link to="/cart">Cart -({cartItems.length})</Link>
                        
                     </li>
                    <li>
                        <Link to ="/grocery">Grocery</Link>
                    </li>
                    <button className="login-btn"
                     onClick={()=>{
                        (loginBtn==="Login") ? setLoginBtn("Logout") : setLoginBtn("Login");
                     }}>{loginBtn}</button>
                     <li>
                        {loggedInUser}
                     </li>
                </ul>

            </div>
            
        </div>
    )
}
export default Header;
