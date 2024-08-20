import { useParams } from "react-router-dom";
import {useState,useEffect} from "react";
import Contact from "./Contact";
import { IMG_CDN, RESTAURANT_MENU_API } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Accordion from "./Accordion";




const RestaurantMenu=()=>{

    const {resId}=useParams();
    const resData=useRestaurantMenu(resId);

    if(resData===null) return <ShimmerUI/>

    //this is for showing the name and image of the restaurantMenu Card
    const {name,cloudinaryImageId}=resData?.cards[2]?.card?.card?.info;


    
    const ResCategoery=resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c)=>c?.card?.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    
    
   
    
   
    return(
       
        <>
        
        <div className="card-m">
        <img src={IMG_CDN+cloudinaryImageId}></img>
        <h1>{name}</h1>
        </div>

        <div>
            {

                ResCategoery.map((res,ind)=>
                 <Accordion  key={ind} data={res?.card?.card}/> )
                
               
            }
        </div>
    
        </>
    
      
       
       
    
    )
}
export default RestaurantMenu;