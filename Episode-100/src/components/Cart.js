import { useSelector } from "react-redux";
import AccordionBody from "./AccordionBody";

import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";





const Cart=()=>{

    const dispatch=useDispatch();
    const Items=useSelector((store)=>store.cart.items);


    const handleClearCart=()=>{
        dispatch(clearCart());

    }

    

    return(
        <>
        <div>
           <h1>The Cart!</h1>
           <button onClick={handleClearCart}>Clear cart</button>

         
        </div>
        <div>

            {
                Items.map((r,ind)=>
                <h1 key={ind}>{r.card.info.name}</h1>)
            }

        </div>
        </>
    )
}
export default Cart;