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
        mobileDescription: "",
    },

    itemPomotionModal: { image_link: "", offer_name: "", description: "" },

    flag: false,
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

        setFlag(state, action) {
            state.flag = action.payload;
        },
    },
});

export const { setItemCardModal, setActiveModal, setItempPomotionModal, setFlag } =
    modalsSlice.actions;

export default modalsSlice.reducer;
