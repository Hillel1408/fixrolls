import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "http/axios";

interface InitialStateType {
    cards: any;
    city: { name: string; restaurantID: string; wid: string; center: number[]; title: string };
    totalCart: number;
    delivery: any;
    activeCharacter: string;
    type: "Доставка" | "Навынос";
}

const initialState: InitialStateType = {
    cards: [],
    city: {
        name: "Владимир",
        restaurantID: "1642154196437770364",
        wid: "1642154196451843135",
        center: [56.129056999993274, 40.40663499999998],
        title: "Владимир, Большая Московская улица",
    },
    totalCart: 0,
    delivery: {},
    type: "Доставка",
    activeCharacter: "",
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

        resetStore: (state) => {
            state.cards = [];
            state.totalCart = 0;
            state.delivery = {};
        },

        setActiveCharacter(state, action) {
            state.activeCharacter = action.payload;
        },

        addType(state, action) {
            state.type = action.payload;
        },
    },
});

export const {
    addCard,
    deleteCard,
    resetCart,
    addCity,
    addDelivery,
    resetStore,
    setActiveCharacter,
    addType,
} = orderSlice.actions;

export default orderSlice.reducer;

export const sentOrder = createAsyncThunk(
    "cards/fetchCards",
    async function (order: InitialStateType, { rejectWithValue }) {
        try {
            const arr = order.cards.map(
                (item: { product: { oneCID: string }; count: string }, index: number) =>
                    `articles[${index}]=${item.product.oneCID}&quantities[${index}]=[${item.count}]`,
            );
            const str = arr.join("&");
            const params =
                `user=mobidel&password=723123![]&wid=${order.city.wid}&street=${
                    order.delivery.adresse.title
                }&room=${order.delivery.apartment}&code2=${order.delivery.intercom}&entrance=${
                    order.delivery.entrance
                }&floor=${order.delivery.storey}&comment=${
                    order.delivery.commentCourier
                }&independently=${order.type === "Доставка" ? 0 : 1}&` + str;

            const { data } = await axios.get(`/makeOrder.php?${params}`);
            return data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    },
);
