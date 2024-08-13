import { useParams } from "react-router-dom";
import {useState,useEffect} from "react";
import Contact from "./Contact";
import { IMG_CDN, RESTAURANT_MENU_API } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";



const RestaurantMenu=()=>{

    const {resId}=useParams();
    console.log(resId);

    const [resData,setResData]=useState(null);

    useEffect(()=>{
        fetchMenuData();
    },[])

    const fetchMenuData = async ()=>{
        const data=await fetch(RESTAURANT_MENU_API+resId);
        const json=await data.json();
        const Data=json?.data;
        setResData(Data);
        console.log(Data);
    }

    if(resData===null) return <ShimmerUI/>

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