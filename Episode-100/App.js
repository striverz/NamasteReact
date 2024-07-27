import React from "react";
import ReactDOM from "react-dom/client";


const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                  <a href="/"><img alt="logo" className="logo" src="https://logocreator.io/wp-content/uploads/2024/01/food-logo-ideas-3.png"></img></a>
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
const App=()=>{
    return(
        <div className="app">
            <Header/>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);