import Contact from "../Contact";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("testing the contact section in our app",()=>{


    render(<Contact/>)
    
    //for finding the header files 
    const heading=screen.getByRole("heading");
    expect(heading).toBeInTheDocument();

   
})

test("testing the input boxes",()=>{

    render(<Contact/>);

    const inputBoxes=screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
})

test("testing the button",()=>{
    render(<Contact/>)

    const button=screen.getByRole("button");
    expect(button).toBeInTheDocument();
})