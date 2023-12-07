import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeModal: "",

    itemCardModal: { image: "", name: "", description: "", id: "", floatprice: "" },

    itempPomotionModal: { fullImage: "", title: "", description: "" },
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

        setItempPomotionModal(state, action) {
            state.itempPomotionModal = action.payload;
        },
    },
});

export const { setItemCardModal, setActiveModal, setItempPomotionModal } = modalsSlice.actions;

export default modalsSlice.reducer;
