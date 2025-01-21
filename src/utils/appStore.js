import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import moviesReducer from "../utils/moviesSlice";
const appStore= configureStore({
    reducer:{
        user:userReducer,
        movies: moviesReducer,
    },
    devTools: true, 
})

export default appStore;