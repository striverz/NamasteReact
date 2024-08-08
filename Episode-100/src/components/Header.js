import { LOGO_IMG } from "../utils/constants";
import {useState} from "react";

const Header=()=>{

    const [loginBtn,setLoginBtn]=useState("Login");


    return(
        <div className="header">
            <div className="logo-container">
                  <a href="/"><img alt="logo" className="logo" src={LOGO_IMG}></img></a>
            </div>
            <div className="nav-items-container">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
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
