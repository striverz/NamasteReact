import { IMG_CDN } from "../utils/constants";
const RestaurantCard=(props)=>{
    const {Card} =props;
    return(
        <div className="res-card"> 
         <img src={IMG_CDN+Card.info.cloudinaryImageId}/>
         <h2>{Card.info.name}</h2>
         <h6>{Card.info.cuisines.join(", ")}</h6>
         <h3>{Card.info.avgRating}</h3>

        </div>
    )
}
export default RestaurantCard;