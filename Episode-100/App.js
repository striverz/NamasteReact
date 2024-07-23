import React from "react";
import ReactDOM from "react-dom/client";


const heading=<h1>React Element</h1>;

const Title=()=>{
    return(
        <h1>Namaste React🚀 </h1>
    )
}
const HeaderComponent =()=>{
    return  (
        <>
            <h1>React Functional component</h1>
            {heading}
            <Title/>
        </>
    )
    
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);