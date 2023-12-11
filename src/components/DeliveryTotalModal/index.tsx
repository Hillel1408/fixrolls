import { createPortal } from "react-dom";
import { useAppSelector, useAppDispatch } from "hook";
import { LayoutModal, Delivery, Total } from "components";
import { setActiveModal } from "store";

const DeliveryTotalModal = () => {
    const activeModal = useAppSelector((state) => state.modals.activeModal);
    const dispatch = useAppDispatch();

    activeModal === "delivery-total" && document.body.classList.add("lock");

    return createPortal(
        <LayoutModal
            className="w-[478px] sm:w-full"
            closeModal={() => {
                dispatch(setActiveModal(""));
            }}
            active={activeModal === "delivery-total"}
        >
            <>
                <Delivery />

                <Total />
            </>
        </LayoutModal>,
        document.getElementById("portal") as HTMLElement,
    );
};

export default DeliveryTotalModal;
