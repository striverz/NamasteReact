
import RestaurantCard from "./RestaurantCard"
import {useState,useEffect, useContext} from "react"
import { RESTAURANT_API } from "../utils/constants"
import ShimmerUI from "./ShimmerUI"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import Grocery from "./Grocery"
import UserContext from "../utils/UserContext"




const Body=()=>{

  

    const onlineStatus=useOnlineStatus();


    const [restaurants,setRestaurants]=useState([]);

    const [filteredRestaurants,setFilteredRestaurants]=useState([]);

    const [searchText, setSearchText]=useState("");

   


    



    

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async()=>{
        const data =await fetch(RESTAURANT_API);
        const json=await data?.json();
      

        const Data=json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        
        
      
       setRestaurants(Data);
       setFilteredRestaurants(Data);

      
      

    }
    //again using condition rendering
    if(onlineStatus===false) return <h1>Look's like you are offline🚀 check you connection</h1>

    const {loggedInUser,setUserName}=useContext(UserContext);
    
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

                        
                        
                        //The filtering logic :)
                        const filteredData=restaurants.filter((res)=>res?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()));

                        setFilteredRestaurants(filteredData);
                       // console.log(filteredData);


                        
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
                <div>
                    <label>UserName: </label>
                    <input className="context" value={loggedInUser} onChange={(e)=>{
                        setUserName(e.target.value);
                    }}></input>
                </div>
            </div>
            
            <div className="card-container">
                {
                   


                   
                    filteredRestaurants?.map((card)=>{
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