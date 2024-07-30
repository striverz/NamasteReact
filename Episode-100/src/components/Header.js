import { LOGO_IMG } from "../utils/constants";
const Header=()=>{
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
                </ul>

            </div>
            
        </div>
    )
}
export default Header;
