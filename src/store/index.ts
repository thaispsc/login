import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {},
})

export type RootState = ReturnType<typeof store.getState>
//{user: UserState, products: ProductsState}


export type Appdispatch = typeof store.dispatch
