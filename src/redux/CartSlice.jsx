import {createSlice} from '@reduxjs/toolkit'


const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        size: 2,
        items: []      
    },
    reducers: {
        addToCart: (state, action) => {
            state.size += 1;
            let item = action.payload;
            item.quantity = 1;
            item.inCart = true;
            state.items.push(item)
        },

        increaseQty: (state, action) => {
            state.size += 1;
            const index = action.payload;
            state.items[index].quantity += 1;
        },

        decreaseQty: (state, action) => {
            state.size -= 1;
            const index = action.payload;
            const qty = state.items[index].quantity;
            if (qty == 1) {
                state.items.splice(index, 1);
            } else {
                state.items[index].quantity -= 1;
            }
        },

        removeItem: (state, action) => {
            state.size -= 1;
            const index = action.payload;
            state.items.splice(index, 1);
        }
    },
})

export const { addToCart, increaseQty, decreaseQty, removeItem } = CartSlice.actions
export default CartSlice.reducer