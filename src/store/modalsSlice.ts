import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeCityModal: false,
    activeDeliveryAddressModal: false,
    activeMobileMenuModal: false,
    activeCardModal: false,
    activeCartModal: false,
    activeDeliveryTotalModal: false,

    itemCardModal: { image: "", name: "", description: "", id: "", floatprice: "" },
};

const modalsSlice = createSlice({
    name: "modals",
    initialState,
    reducers: {
        setActiveCityModal(state, action) {
            state.activeCityModal = action.payload;
        },
        setActiveDeliveryAddressModal(state, action) {
            state.activeDeliveryAddressModal = action.payload;
        },
        setActiveMobileMenuModal(state, action) {
            state.activeMobileMenuModal = action.payload;
        },
        setActiveCardModal(state, action) {
            state.activeCardModal = action.payload;
        },
        setActiveCartModal(state, action) {
            state.activeCartModal = action.payload;
        },
        setActiveDeliveryTotalModal(state, action) {
            state.activeDeliveryTotalModal = action.payload;
        },

        setItemCardModal(state, action) {
            state.itemCardModal = action.payload;
        },
    },
});

export const {
    setActiveCityModal,
    setActiveDeliveryAddressModal,
    setActiveMobileMenuModal,
    setActiveCardModal,
    setActiveCartModal,
    setActiveDeliveryTotalModal,
    setItemCardModal,
} = modalsSlice.actions;

export default modalsSlice.reducer;
