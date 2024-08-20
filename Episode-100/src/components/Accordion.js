import { useState } from "react";
import AccordionBody from "./AccordionBody"

const Accordion=({data})=>{

    const [handler,setHandler]=useState(false);
    //console.log(data);

    function clickHandle(){
        setHandler(!handler);
    }
    return(
       
        <div className="accordion" >
            <div className="accordion-section" onClick={clickHandle}>
                <span>{data.title}</span>
                <span>⬇️</span>
            </div>
            <div>
                
                {
                    
                   handler &&  data.itemCards.map((res,ind)=><AccordionBody data={res} key={ind}/>)
                }
                
            </div>
        </div>
        
    )
}

export default Accordion;