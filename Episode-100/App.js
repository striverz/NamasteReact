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

const Cards=[
    {
        "info": {
          "id": "150591",
          "name": "Satkar Restaurant",
          "cloudinaryImageId": "rvxp5xbniat84r6efku2",
          "locality": "Sinchai Colony",
          "areaName": "Satkar Chowk",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "North Indian",
            "South Indian",
            "Indian",
            "Salads",
            "Desserts"
          ],
          "avgRating": 4.3,
       
        }
    },
    {
        
        "info": {
            "id": "295131",
            "name": "Burger club point",
            "cloudinaryImageId": "fnh4ljobb3vayrvtbxxl",
            "locality": "Irrigation Colony",
            "areaName": "Chhindwara Locality",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Burgers",
              "Pizzas",
              "Fast Food",
              "Beverages"
            ],
            "avgRating": 4.4,
    }
    },

    {
        "info": {
          "id": "151656",
          "name": "Dev International",
          "cloudinaryImageId": "enj3srsnhbltbom2ovvh",
          "locality": "khajri road",
          "areaName": "Mohan Nagar",
          "costForTwo": "₹100 for two",
          "cuisines": [
            "North Indian",
            "Chinese",
            "Fast Food",
            "Beverages"
          ],
          "avgRating": 4.3,
        }
    }

    
]

const RestaurantCard=(props)=>{
    const {Card} =props;
    return(
        <div className="res-card"> 
         <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+Card.info.cloudinaryImageId}/>
         <h2>{Card.info.name}</h2>
         <h6>{Card.info.cuisines.join(", ")}</h6>
         <h3>{Card.info.avgRating}</h3>

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
                

                {
                    Cards.map((card)=>{
                        return(
                            <RestaurantCard Card={card} key={card.info.id}/>
                        )
                    })
                }

                
                {/* <RestaurantCard Card={Cards[0]}/>
                <RestaurantCard Card={Cards[1]}/>
                <RestaurantCard Card={Cards[2]}/> */}
                  
                   
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