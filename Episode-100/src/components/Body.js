
import RestaurantCard from "./RestaurantCard"
import {useState,useEffect} from "react"
import { RESTAURANT_API } from "../utils/constants"

const Body=()=>{

    const [restaurants,setRestaurants]=useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async()=>{
        const data =await fetch(RESTAURANT_API);
        const json=await data.json();

        const Data=json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurants(Data);

        console.log(Data); 

    }

    return(
        <div className="body">
            <div className="search-function"> 
                <input type="text"></input>
                <button className="top-btn"
                onClick={()=>{
                    console.log("Btn clicked");
                   const data=restaurants.filter((res)=>res.info.avgRating>4.2);
                   setRestaurants(data);
                }}>
                    Top Res
                </button>
            </div>
            <div className="card-container">
                {
                    restaurants.map((card)=>{
                        return(
                            <RestaurantCard Card={card} key={card.info.id}/>
                        )
                    })
                }                                  
            </div>

        </div>
    )
}
export default Body;