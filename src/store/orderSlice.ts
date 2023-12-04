import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "http/axios";

interface InitialStateType {
    cards: any;
    city: { region: string; restaurantID: string; wid: string; center: number[]; title: string };
    totalCart: number;
    delivery: any;
    activeCharacter: string;
    type: "Доставка" | "Навынос";
}

export const sentOrder = createAsyncThunk(
    "cards/sentOrder",
    async function (order: InitialStateType) {
        try {
            const arr = order.cards.map(
                (item: { product: { oneCID: string }; count: string }, index: number) =>
                    `articles[${index}]=${item.product.oneCID}&quantities[${index}]=${item.count}`,
            );
            const str = arr.join("&");
            const params = `user=mobidel&password=723123![]`;
            const { data } = await axios.get(
                `/makeOrder.php?${params}&${str}&family=Иванов&street=Ленина&home=1&room=1&comment=&phone=223344`,
            );
            // return data;
        } catch (error: any) {
            // return rejectWithValue(error.message);
        }
    },
);

const initialState: InitialStateType = {
    cards: [],
    city: {
        region: "Кулебаки",
        restaurantID: "1591345972412718352",
        wid: "1591345972413847051",
        center: [55.429716, 42.512492],
        title: "Нижегородская область, Кулебаки, улица Воровского",
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
