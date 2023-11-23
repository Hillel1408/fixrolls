import { createSlice } from "@reduxjs/toolkit";

const initialState: { cards: any } = { cards: [] };

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addCard(state, action) {
            const index = state.cards.findIndex(
                (item: any) => item.product.id === action.payload.id,
            );
            if (index === -1)
                state.cards.push({
                    product: action.payload,
                    count: 1,
                    total: Number(action.payload.floatprice),
                });
            else {
                state.cards[index].count += 1;
                state.cards[index].total += Number(action.payload.floatprice);
            }
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
        },

        resetCart(state, action) {},
    },
});

export const { addCard, deleteCard, resetCart } = orderSlice.actions;

export default orderSlice.reducer;
