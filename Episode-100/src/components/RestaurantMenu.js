import { useParams } from "react-router-dom";
import {useState,useEffect} from "react";
import Contact from "./Contact";
import { IMG_CDN, RESTAURANT_MENU_API } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import useRestaurantMenu from "../utils/useRestaurantMenu";




const RestaurantMenu=()=>{

    const {resId}=useParams();
    
    const resData=useRestaurantMenu(resId);

    

    

    if(resData===null) return <ShimmerUI/>

    const Data=resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards;
    const Data2=resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    

    const ItemCategory=Data2.filter((res)=>res.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    //console.log(ItemCategory);
    
    

    const {name,cloudinaryImageId}=resData?.cards[2]?.card?.card?.info;
    //console.log(name); 
    return(
        <div>
            <h1 className="font-bold" >{name}</h1>
           
  
        </div>

       
    )
}
export default RestaurantMenu;