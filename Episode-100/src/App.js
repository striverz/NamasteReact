import React, { Suspense, useContext, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { lazy } from "react";
import Header from "./components/Header"
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useState } from "react";
import appStore from "./redux/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";

const Grocery=React.lazy(()=> import("./components/Grocery"));




const App=()=>{

    const [userName,setUserName]=useState("");

    //fetching the api data and rendering
    useEffect(()=>{
        const data={
            name:""
        }
        setUserName(data?.name);
    },[]);

    
    return(

        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        <div className="app">
            
            <Header/>
            <Outlet/>  
             
        </div>
        </UserContext.Provider>
        </Provider>
        
    )
    
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            { 
                path:"/about",
                element: <About/>
        
            },
            {
                path:"/contact",
                element: <Contact/>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>

            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}>
                                 <Grocery/>
                        </Suspense>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ]
       
    },
    

])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);