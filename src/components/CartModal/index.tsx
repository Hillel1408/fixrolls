import { createPortal } from "react-dom";
import { LayoutModal, Cart } from "components";
import { useAppSelector, useAppDispatch } from "hook";
import { setActiveCartModal } from "store";

const CartModal = () => {
    const activeCartModal = useAppSelector((state) => state.main.activeCartModal);
    const dispatch = useAppDispatch();

    activeCartModal && document.body.classList.add("lock");

    return createPortal(
        <LayoutModal
            className="p-[25px] pt-[29px] w-[478px] sm:p-5 sm:pt-7 sm:w-full"
            closeModal={() => {
                dispatch(setActiveCartModal(false));
            }}
            active={activeCartModal}
        >
            <Cart />
        </LayoutModal>,
        document.getElementById("portal") as HTMLElement,
    );
};

export default CartModal;
