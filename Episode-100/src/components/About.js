import UserFunction from "./UserFunction";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component{

    constructor(props){
        super(props);

       
    }

   

    render(){
        // console.log("Parent Render");
        return(
            <div className='about'>
           
            <UserClass name={"First"}/>
          
        </div>

        )
    }
}

export default About;


// Parent Constructor
// About.js:17 Parent Render

// UserClass.js:13 FirstChild Constructor
// UserClass.js:22 FirstChild Render

// UserClass.js:13 secondChild Constructor
// UserClass.js:22 secondChild Render

// UserClass.js:17 FirstChild Did Mount
// UserClass.js:17 secondChild Did Mount

// About.js:13 Parent Component Did Mount