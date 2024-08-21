import {sum} from "../sum";

test("the sum of two numbers",()=>{

    const result=sum(3,4);
    //assertion
    expect(result).toBe(7);   
})


test("The sum of two numbers",()=>{
    const result=sum(10,20);
    expect(result).toBe(30);
})