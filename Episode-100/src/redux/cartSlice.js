import {  createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        //dispatch an action and call the function 
        //for calling function we need things
        // --in which we are adding(state.items)
        // --what we are adding action

        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0;
        }

    }
})

export const {addItem,removeItem,clearCart}=cartSlice.actions;

export default cartSlice.reducer;
