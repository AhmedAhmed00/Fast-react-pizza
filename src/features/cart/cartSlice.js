import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cart: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            // payload must be item = newItem
            state.cart.push(action.payload)
        },
        deleteItem(state, action) {
            // the payload will be the id 
            state.cart = state.cart.filter(item => item.pizzaId !== action.payload)

        },
        increaseItemQuantity(state, action) {
            // the payload will be the id and quantity
            const item = state.cart.find(item => item.pizzaId === action.payload)
            item.qunatity++
            item.totalPrice = item.qunatity * item.unitPrice

        },
        decreaseItemQuantity(state, action) {
            const item = state.cart.find(item => item.pizzaId === action.payload)
            item.qunatity--
            item.totalPrice = item.qunatity * item.unitPrice
        },
        clearCart(state) {
            state.cart = []
        },
    }
})

export const getCart = state => state.cart.cart
export const getTotalCartPrice = state => state.cart.cart.reduce((sum, item) =>
    sum + item.totalPrice, 0)
export const getCurrentQuantity = (id) => (state) => state.cart.cart.find(item => item.pizzaId === id)?.qunatity ?? 0
export default cartSlice.reducer
export const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions
