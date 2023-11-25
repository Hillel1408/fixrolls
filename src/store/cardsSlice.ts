import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "http/axios";

export const getCards = createAsyncThunk(
    "cards/fetchCards",
    async function (_, { rejectWithValue }) {
        try {
            const { data } = await axios.get(
                "/getMenu.php?restaurantID=1591345972412718352&wid=1591345972413847051",
            );

            return data;
        } catch (error: any) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    },
);

const initialState: { cards: []; status: string; error: string } = {
    cards: [],
    status: "",
    error: "",
};

const cardsSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {},

    extraReducers: {
        //@ts-ignore
        [getCards.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        //@ts-ignore
        [getCards.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.cards = action.payload;
        },
    },
});

export const {} = cardsSlice.actions;

export default cardsSlice.reducer;
