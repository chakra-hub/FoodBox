import { createSlice } from "@reduxjs/toolkit";

const coordinateSlice = createSlice({
    name: 'latlong',
    initialState:{
        latitude : "28.6517178",
        longitude: "77.2219388",
    },
    reducers:{
        updateCoordinates: (state, action)=>{
            state.latitude=action.payload[0];
            state.longitude=action.payload[1];
            console.log(state.latitude, state.longitude)
        }
    }
})

export default coordinateSlice.reducer;
export const {updateCoordinates} = coordinateSlice.actions;