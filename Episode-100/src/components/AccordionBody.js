import { IMG_CDN } from "../utils/constants";

const AccordionBody=({data})=>{
    
    return(
        <div className="acc-body">
            <div className="section1">
                <h5>{data?.card?.info?.name}</h5>
                <p>{data?.card?.info?.description}</p>
            </div>
            <div className="section2">
                <button>Add +</button>
                {
                    data?.card?.info?.imageId && <img  className="img-acc" src={IMG_CDN+data?.card?.info?.imageId}></img>
                }
                
                
            </div>
        </div>
    )
}

export default AccordionBody;