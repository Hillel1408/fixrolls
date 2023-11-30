import { createPortal } from "react-dom";
import { LayoutModal, Delivery, Total } from "components";

const DeliveryTotalModal = ({
    active,
    setActive,
}: {
    active: boolean;
    setActive: (a: boolean) => void;
}) => {
    active && document.body.classList.add("lock");

    return createPortal(
        <LayoutModal
            className="pt-[59px] w-[478px] sm:w-full"
            closeModal={() => {
                setActive(false);
            }}
            active={active}
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
