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

    console.log(resData);

    const {name,cloudinaryImageId}=resData?.cards[2]?.card?.card?.info;
    console.log(name); 
    return(
        <div>
            <img src={IMG_CDN+cloudinaryImageId}></img>
            <h1>{name}</h1>
            
        </div>
    )
}
export default RestaurantMenu;