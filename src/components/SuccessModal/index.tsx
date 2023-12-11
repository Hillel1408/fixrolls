import { createPortal } from "react-dom";
import { useAppDispatch, useAppSelector } from "hook";
import { setActiveModal, resetCart } from "store";
import { LayoutModal, Button } from "components";

const SuccessModal = () => {
    const dispatch = useAppDispatch();

    const activeModal = useAppSelector((state) => state.modals.activeModal);
    const { response } = useAppSelector((state) => state.orders);

    activeModal === "success" && document.body.classList.add("lock");

    return createPortal(
        <LayoutModal
            className="p-[32px] w-[400px] sm:w-full"
            closeModal={() => {
                dispatch(setActiveModal(""));
                dispatch(resetCart());
            }}
            active={activeModal === "success"}
        >
            <>
                <h2 className="text-[#21201F] text-[32px] font-medium mb-[14px]">
                    Ваш заказ принят
                </h2>

                <p className="text-[#21201F] text-[14px]">
                    Информация и статус о заказе: <br /> {response.split(" ")[1]}
                </p>

                <Button
                    text="Спасибо!"
                    className="h-[48px] w-full mt-10"
                    clickHandler={() => {
                        dispatch(setActiveModal(""));
                        dispatch(resetCart());
                        document.body.classList.remove("lock");
                    }}
                />
            </>
        </LayoutModal>,
        document.getElementById("portal") as HTMLElement,
    );
};

export default SuccessModal;
