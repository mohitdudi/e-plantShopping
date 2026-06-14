import {createSlice} from '@reduxjs/toolkit'


const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        size: 2,
        items: [
            {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15",
                    inCart: true,
                    quantity: 1
                },
                {
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12",
                    inCart: true,
                    quantity: 1
                },
        ]
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