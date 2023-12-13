import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeModal: "",

    itemCardModal: {
        image: "",
        name: "",
        description: "",
        id: "",
        floatprice: "",
        storageConditions: "",
        weight: "",
        protein: "",
        fat: "",
        carbohydrates: "",
        calories: "",
    },

    itemPomotionModal: { image_link: "", offer_name: "", description: "" },
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
            state.itemPomotionModal = action.payload;
        },
    },
});

export const { setItemCardModal, setActiveModal, setItempPomotionModal } = modalsSlice.actions;

export default modalsSlice.reducer;
