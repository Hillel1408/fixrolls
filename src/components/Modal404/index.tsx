import { createPortal } from "react-dom";
import { LayoutModal, Button } from "components";
import { useAppSelector, useAppDispatch } from "hook";
import { setActiveModal } from "store";

const Modal404 = () => {
    const activeModal = useAppSelector((state) => state.modals.activeModal);
    const dispatch = useAppDispatch();

    activeModal === "404" && document.body.classList.add("lock");

    return createPortal(
        <LayoutModal
            className="w-[818px] sm:w-full h-[772px]"
            closeModal={() => {
                dispatch(setActiveModal(""));
            }}
            active={activeModal === "404"}
        >
            <div className="relative h-full">
                <div className="flex items-center justify-center h-full flex-col gap-2">
                    <h2 className="text-[#21201F] text-[60px] font-medium">404</h2>
                    <p className="text-[#21201F] text-[14px]">раздел находится в разработке</p>
                </div>

                <div className="hidden px-5 py-3 bg-[#F9F7F7] rounded-t-2xl absolute bottom-0 left-0 right-0 sm:block">
                    <Button
                        text="Понятно"
                        className="h-[56px] w-full"
                        clickHandler={() => {
                            dispatch(setActiveModal(""));
                        }}
                    />
                </div>
            </div>
        </LayoutModal>,
        document.getElementById("portal") as HTMLElement,
    );
};

export default Modal404;
