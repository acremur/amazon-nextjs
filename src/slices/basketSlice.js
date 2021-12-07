import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        // actions
        addToBasket: (state, action) => {
            state.items = [ ...state.items, action.payload ]
        },
        removeFromBasket: (state, action) => {
            const index = state.items.findIndex(basketItem => basketItem.id === action.payload.id)
            state.items.splice(index, 1)
        }
    }
})

export const { addToBasket, removeFromBasket } = basketSlice.actions

// selectors
export const selectItems = state => state.basket.items 
export const selectTotal = state => state.basket.items.reduce((total, item) => total + item.price, 0)

export default basketSlice.reducer