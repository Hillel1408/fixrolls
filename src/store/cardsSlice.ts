import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "http/axios";

export const getCards = createAsyncThunk(
    "cards/fetchCards",
    async function (params: { restaurantID: string; wid: string }, { rejectWithValue }) {
        try {
            const { data } = await axios.get(
                `/getMenu.php?restaurantID=${params.restaurantID}&wid=${params.wid}`,
            );

            return data;
        } catch (error: any) {
            console.log(error.message);
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
        //@ts-ignore
        [getCards.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        },
    },
});

export const {} = cardsSlice.actions;

export default cardsSlice.reducer;
