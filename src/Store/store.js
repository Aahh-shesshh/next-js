const { configureStore } = require("@reduxjs/toolkit");
const { default: toogleSlice } = require("./Slices/toogleSlice");


export const store = configureStore(
    {
        reducer:{
            toogle: toogleSlice,
        }
    }
)