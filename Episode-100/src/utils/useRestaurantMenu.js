
import {useState,useEffect} from "react";
import { RESTAURANT_MENU_API } from "./constants";

const useRestaurantMenu=(resId)=>{
    const [resData,setResData]=useState(null);

    useEffect(()=>{
        fetchData();

    },[]);

    const fetchData = async ()=>{
        const data=await fetch(RESTAURANT_MENU_API+resId);
        const json=await data?.json();

        setResData(json?.data);

        
    }

    return resData;
}
export default useRestaurantMenu;