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
const RestaurantCard=()=>{
    return(
        <div className="res-card"> 
         <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0adf25c57357161b20c11281d8a443e6"></img>
         <h2>Veg-Samosa</h2>
         <h6>India,african,european,russian</h6>
         <h3>Rating 4.5</h3>

        </div>
    )
}
const Body=()=>{
    return(
        <div className="body">
            <div className="search-function"> 
                <input type="text" value="Search for..."></input>
                <button>Submit</button>
            </div>
            <div className="card-container">
                   <RestaurantCard/>
                   <RestaurantCard/>
                   <RestaurantCard/>
                   <RestaurantCard/>
                   <RestaurantCard/>
                   <RestaurantCard/>
                   <RestaurantCard/>
                   <RestaurantCard/>
                   <RestaurantCard/>
                   <RestaurantCard/>
                   <RestaurantCard/>
                   <RestaurantCard/>
                   <RestaurantCard/>
                   <RestaurantCard/>
                   <RestaurantCard/>
            </div>

        </div>
    )
}
const App=()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);