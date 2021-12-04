import { configureStore } from "@reduxjs/toolkit";
import panelSlice from "./panelSlice";


export const store = configureStore({
    reducer: {
        panels: panelSlice
    }
})