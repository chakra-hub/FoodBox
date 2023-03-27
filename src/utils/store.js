import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './cartSlice';
import coordinateSlice from './coordinateSlice';

const store = configureStore({
    reducer:{
        cart: cartSlice,
        latlong: coordinateSlice,
    }
});

export default store;