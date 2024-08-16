
import RestaurantCard from "./RestaurantCard"
import {useState,useEffect} from "react"
import { RESTAURANT_API } from "../utils/constants"
import ShimmerUI from "./ShimmerUI"
import { Link } from "react-router-dom"

const Body=()=>{

   // console.log("Rendering");
   console.log("Rendereing");
   console.log(useState());


    const [restaurants,setRestaurants]=useState([]);

    const [filteredRestaurants,setFilteredRestaurants]=useState([]);

    const [searchText, setSearchText]=useState("");



    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async()=>{
        const data =await fetch(RESTAURANT_API);
        const json=await data?.json();

        const Data=json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        
       console.log(Data);
      
       setRestaurants(Data);
       setFilteredRestaurants(Data);

       // console.log(Data); 

    }

    //Conditional Rendering :)
    return (restaurants?.length===0) ? <ShimmerUI/> :(

     (
        <div className="body">
            <div className="search-function"> 
                <div className="filtering-container">
                    <input type="text" 
                    value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}
                    ></input>

                    <button
                    onClick={()=>{

                        console.log("Hai");
                        
                        //The filtering logic :)
                        const filteredData=restaurants.filter((res)=>res?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()));

                        setFilteredRestaurants(filteredData);
                        console.log(filteredData);

                        
                    }}
                    >Search</button>
                </div>

                <button className="toprating-btn"
                onClick={()=>{
                    
                   const data=restaurants.filter((res)=>res.info.avgRating>4.2);
                   setRestaurants(data);
                }}>
                    Top Res
                </button>
            </div>
            <div className="card-container">
                {

                   
                    filteredRestaurants.map((card)=>{
                        return(
                            <Link to={"/restaurant/"+card.info.id} key={card.info.id}><RestaurantCard Card={card}/> </Link>
                        )
                    })
                   
                }                                  
            </div>

        </div>
    ) );
}
export default Body;