import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeModal: "",

    itemCardModal: { image: "", name: "", description: "", id: "", floatprice: "" },
};

const modalsSlice = createSlice({
    name: "modals",
    initialState,
    reducers: {
        setActiveModal(state, action) {
            state.activeModal = action.payload;
        },

        setItemCardModal(state, action) {
            state.itemCardModal = action.payload;
        },
    },
});

export const { setItemCardModal, setActiveModal } = modalsSlice.actions;

export default modalsSlice.reducer;
