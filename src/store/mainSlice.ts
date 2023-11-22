import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeCityModal: false,
    activeDeliveryAddressModal: false,
    activeMobileMenuModal: false,
    activeCardModal: false,
    activeCartModal: false,
    activeDeliveryTotalModal: false,
};

const mainSlice = createSlice({
    name: "main",
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
    },
});

export const {
    setActiveCityModal,
    setActiveDeliveryAddressModal,
    setActiveMobileMenuModal,
    setActiveCardModal,
    setActiveCartModal,
    setActiveDeliveryTotalModal,
} = mainSlice.actions;

export default mainSlice.reducer;
