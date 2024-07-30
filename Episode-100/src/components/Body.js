import { Cards } from "../utils/constants"
import RestaurantCard from "./RestaurantCard"
import {useState} from "react"

const Body=()=>{

    const [list,setList]=useState(Cards);
    return(
        <div className="body">
            <div className="search-function"> 
                <input type="text"></input>
                <button className="top-btn"
                onClick={()=>{
                    console.log("Btn clicked");
                   const data=list.filter((res)=>res.info.avgRating>4.3);
                   setList(data);
                }}>
                    Top Res
                </button>
            </div>
            <div className="card-container">
                {
                    list.map((card)=>{
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