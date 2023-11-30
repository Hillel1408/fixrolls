import { createPortal } from "react-dom";
import { LayoutModal, Cart } from "components";

const CartModal = ({ active, setActive }: { active: boolean; setActive: (a: boolean) => void }) => {
    active && document.body.classList.add("lock");

    return createPortal(
        <LayoutModal
            className="p-[25px] pt-[29px] w-[478px] sm:p-5 sm:pt-7 sm:w-full"
            closeModal={() => {
                setActive(false);
            }}
            active={active}
        >
            <Cart />
        </LayoutModal>,
        document.getElementById("portal") as HTMLElement,
    );
};

export default CartModal;
