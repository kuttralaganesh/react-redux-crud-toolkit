import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from './features/counter/tasksSlice'


export const store =configureStore({

    reducer:{
       tasks:tasksReducer,
    },
    
})