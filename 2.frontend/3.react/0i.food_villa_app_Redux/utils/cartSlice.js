import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // state is the initial state (an empty array in our case)
            // action is the data object which arrives here (got dispatched due to an event)
            state.items.push(action.payload);
            // payload property under action contains the actual data
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;
// Here addItem, removeItem, clearCart are name of actions which is automatically created by createSlice.
// This names are based on the name of the properties in mini-reducers (which is given by us) 
export default cartSlice.reducer;