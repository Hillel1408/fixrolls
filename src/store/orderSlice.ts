import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "http/axios";

interface InitialStateType {
    cards: any;
    city: {
        region: string;
        restaurantID: string;
        wid: string;
        center: number[];
        title: string;
        id: string;
    };
    totalCart: number;
    delivery: any;
    activeCharacter: string;
    type: "Доставка" | "Навынос";
    promoCode: string;
}

export const sentOrder = createAsyncThunk(
    "cards/sentOrder",
    async function (order: InitialStateType) {
        try {
            const params = `user=mobidel&password=723123![]&wid=11445&line=${order.city.id}`;
            const products = order.cards
                .map(
                    (item: { product: { oneCID: string }; count: string }, index: number) =>
                        `articles[${index}]=${item.product.oneCID}&quantities[${index}]=${item.count}`,
                )
                .join("&");
            const delivery =
                order.type === "Доставка" &&
                Object.keys(order.delivery)
                    .map((key) => {
                        if (key === "street") {
                            return `${key}=${order.delivery[key].title}`;
                        } else return `${key}=${order.delivery[key]}`;
                    })
                    .join("&");

            const { data } = await axios.get(
                `/makeOrder.php?${params}&${products}&${delivery || `independently=1`}`,
            );
            return data;
        } catch (error: any) {
            console.log(error);
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
        id: "11445",
    },
    totalCart: 0,
    delivery: {},
    type: "Доставка",
    promoCode: "",
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

        addPromoCode(state, action) {
            state.promoCode = action.payload;
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
    addPromoCode,
} = orderSlice.actions;

export default orderSlice.reducer;
