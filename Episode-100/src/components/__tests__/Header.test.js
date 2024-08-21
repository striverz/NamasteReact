import Header from "../Header";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import { BrowserRouter } from "react-router-dom";



it("Should load the login button in header",()=>{

    render(
        //we have to wrap this in the react-router dom because of unit-testing(isolation)
        <BrowserRouter>
              <Provider store={appStore}>
                   <Header/>
              </Provider>
    </BrowserRouter>);

    //Querying the element 
    const loginBtn=screen.getByRole("button");

    //Assertion 
    expect(loginBtn).toBeInTheDocument();

})

it("Should load the login button in header",()=>{

    render(
        //we have to wrap this in the react-router dom because of unit-testing(isolation)
        <BrowserRouter>
              <Provider store={appStore}>
                   <Header/>
              </Provider>
    </BrowserRouter>);

    //Querying the element 
    const cartItems=screen.getByText("Cart -(0)");

    //Assertion 
    expect(cartItems).toBeInTheDocument();

})
