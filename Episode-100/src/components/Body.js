import { Cards } from "../utils/constants"
import RestaurantCard from "./RestaurantCard"
const Body=()=>{
    return(
        <div className="body">
            <div className="search-function"> 
                <input type="text"></input>
                <button>Submit</button>
            </div>
            <div className="card-container">
                {
                    Cards.map((card)=>{
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