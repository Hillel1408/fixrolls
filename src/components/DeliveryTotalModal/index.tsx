import { createPortal } from "react-dom";
import { LayoutModal, Delivery, Total } from "components";
import { useAppSelector, useAppDispatch } from "hook";
import { setActiveDeliveryTotalModal } from "store";

const DeliveryTotalModal = () => {
    const activeDeliveryTotalModal = useAppSelector((state) => state.main.activeDeliveryTotalModal);
    const dispatch = useAppDispatch();

    activeDeliveryTotalModal && document.body.classList.add("lock");

    return createPortal(
        <LayoutModal
            className="pt-[59px] w-[478px] sm:w-full"
            closeModal={() => {
                dispatch(setActiveDeliveryTotalModal(false));
            }}
            active={activeDeliveryTotalModal}
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
