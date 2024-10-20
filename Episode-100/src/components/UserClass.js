import React from "react";
class UserClass extends React.Component{

    constructor(props){
        super(props);

        

        // console.log(this.props.name+"Child Constructor")

        this.state={
            userInfo:{
                name:"Dummy",
                img :"Dummy"
            }
        }
    }

    componentDidUpdate(){
        console.log("component Did updated");
    }

    componentWillUnmount(){
        console.log("Component will unmounted");
    }

    async componentDidMount(){
       
       
        const data= await fetch("https://api.github.com/users/striverz");
        const json=await data.json();

        this.setState({
            userInfo:json,
        })

        console.log(json);

        console.log("component Did mount");

    }

    render(){

        // console.log(this.props.name+"Child Render");
        //destructuring the count2 for simpler and readbility
       
        return(
           
            <div>
                <h1>Name :{this.state.userInfo.name}</h1>
                <img src={this.state.userInfo.avatar_url}></img>
            </div>
        )
    }
}

export default UserClass;