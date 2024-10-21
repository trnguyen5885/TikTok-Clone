import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../data/dummy-data";


const initialState = {
    cartItems: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const shoesItem = action.payload.shoesItem;
            state.cartItems.push(shoesItem)
        },
        removeToCart: (state, action) => {
            const id = action.payload.id;
            state.cartItems = state.cartItems.filter((item) => item.id !== id)
        }
    }
})

export default cartSlice;