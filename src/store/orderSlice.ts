import { createSlice } from "@reduxjs/toolkit";

const initialState: {
    cards: any;
    city: { name: string; restaurantID: string; wid: string; center: number[] };
    totalCart: number;
    delivery: any;
} = {
    cards: [],
    city: {
        name: "Владимир",
        restaurantID: "1642154196437770364",
        wid: "1642154196451843135",
        center: [56.129056999993274, 40.40663499999998],
    },
    totalCart: 0,
    delivery: {},
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addCard(state, action) {
            const index = state.cards.findIndex(
                (item: any) => item.product.id === action.payload.id,
            );
            if (index === -1) {
                state.cards.push({
                    product: action.payload,
                    count: 1,
                    total: Number(action.payload.floatprice),
                });
            } else {
                state.cards[index].count += 1;
                state.cards[index].total += Number(action.payload.floatprice);
            }
            state.totalCart += Number(action.payload.floatprice);
        },

        deleteCard(state, action) {
            const index = state.cards.findIndex(
                (item: any) => item.product.id === action.payload.id,
            );
            if (state.cards[index].count === 1) state.cards.splice(index, 1);
            else {
                state.cards[index].count -= 1;
                state.cards[index].total -= Number(action.payload.floatprice);
            }
            state.totalCart -= Number(action.payload.floatprice);
        },

        resetCart(state, action) {
            state.cards = [];
            state.totalCart = 0;
        },

        addCity(state, action) {
            state.city = action.payload;
        },

        addDelivery(state, action) {
            state.delivery = { ...state.delivery, ...action.payload };
        },
    },
});

export const { addCard, deleteCard, resetCart, addCity, addDelivery } = orderSlice.actions;

export default orderSlice.reducer;
