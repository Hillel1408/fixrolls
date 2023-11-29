import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeModal: "",

    itemCardModal: { image: "", name: "", description: "", id: "", floatprice: "" },

    activeCharacter: "",
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

        setActiveCharacter(state, action) {
            state.activeCharacter = action.payload;
        },
    },
});

export const { setItemCardModal, setActiveModal, setActiveCharacter } = modalsSlice.actions;

export default modalsSlice.reducer;
