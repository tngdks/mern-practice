//yaha hum mein store ya Vault banayenge

import { configureStore } from '@reduxjs/toolkit';
import fighterReducer from './fighterSlice'; //yaha humne apna manager import kiya

export const store = configureStore({
    reducer: {
        fighter: fighterReducer, // yaha humne manager ko godown ka ek hissa de diya
    },
});