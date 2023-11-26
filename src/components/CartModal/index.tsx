import { createPortal } from "react-dom";
import { LayoutModal, Cart } from "components";
import { useAppSelector, useAppDispatch } from "hook";
import { setActiveModal } from "store";

const CartModal = () => {
    const activeModal = useAppSelector((state) => state.modals.activeModal);
    const dispatch = useAppDispatch();

    activeModal === "cart" && document.body.classList.add("lock");

    return createPortal(
        <LayoutModal
            className="p-[25px] pt-[29px] w-[478px] sm:p-5 sm:pt-7 sm:w-full"
            closeModal={() => {
                dispatch(setActiveModal(""));
            }}
            active={activeModal === "cart"}
        >
            <Cart />
        </LayoutModal>,
        document.getElementById("portal") as HTMLElement,
    );
};

export default CartModal;
