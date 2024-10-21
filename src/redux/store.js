import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './counterCartslice'
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        cart: cartSlice.reducer,
    },
})

export default store;