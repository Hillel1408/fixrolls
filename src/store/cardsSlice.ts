import { createSlice, createAsyncThunk, AnyAction } from "@reduxjs/toolkit";
import axios from "http/axios";

export const getCards = createAsyncThunk("cards/getCards", async function (params: { restaurantID: string; wid: string }, { rejectWithValue }) {
    try {
        const { data } = await axios.get(`/getMenu.php?restaurantID=${params.restaurantID}&wid=${params.wid}`);

        return data.filter((item: any) => item.description.mobileEnable !== "0");
    } catch (error: any) {
        return rejectWithValue(error.message);
    }
});

const initialState: { cards: []; status: string; error: string } = {
    cards: [],
    status: "",
    error: "",
};

const cardsSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getCards.pending, (state) => {
                state.status = "loading";
                state.error = "";
            })
            .addCase(getCards.fulfilled, (state, action) => {
                state.status = "resolved";
                state.cards = action.payload;
            })
            .addMatcher(isError, (state, action) => {
                state.status = "rejected";
                state.error = action.payload;
            });
    },
});

export const {} = cardsSlice.actions;

export default cardsSlice.reducer;

function isError(action: AnyAction) {
    return action.type.endsWith("rejected");
}
