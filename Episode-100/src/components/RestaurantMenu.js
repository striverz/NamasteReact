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

    console.log(Data);

    const {name,cloudinaryImageId}=resData?.cards[2]?.card?.card?.info;
    //console.log(name); 
    return(
        <div>
            <img src={IMG_CDN+cloudinaryImageId}></img>

            {
                Data.map((res)=>{
                    return(
                        <h1>{res?.card?.info?.name}</h1>
                    )
                })
            }
        </div>

       
    )
}
export default RestaurantMenu;