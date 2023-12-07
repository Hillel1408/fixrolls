import { createPortal } from "react-dom";
import { LayoutModal, Button } from "components";
import { useAppSelector, useAppDispatch } from "hook";
import { setActiveModal } from "store";

const PromotionModal = () => {
    const modals = useAppSelector((state) => state.modals);
    const dispatch = useAppDispatch();

    modals.activeModal === "promotion" && document.body.classList.add("lock");

    return createPortal(
        <LayoutModal
            className="w-[362px] sm:w-full h-[772px]"
            closeModal={() => {
                dispatch(setActiveModal(""));
            }}
            active={modals.activeModal === "promotion"}
        >
            <div className="relative">
                <img
                    className="h-[237px] object-cover w-full"
                    src={`/images/${modals.itempPomotionModal.fullImage}`}
                    alt=""
                />

                <div className="pt-7 px-5 h-[535px] overflow-y-auto pb-[100px]">
                    <h2 className="text-[#000] text-[32px] font-medium mb-7">
                        {modals.itempPomotionModal.title}
                    </h2>

                    <div className="flex flex-col gap-3 whitespace-pre-wrap">
                        {modals.itempPomotionModal.description}
                    </div>
                </div>

                <div className="px-5 py-3 bg-[#F9F7F7] rounded-t-2xl absolute bottom-0 left-0 right-0">
                    <Button
                        text="Понятно"
                        className="h-[56px] w-full"
                        clickHandler={() => {
                            dispatch(setActiveModal(""));
                            document.body.classList.remove("lock");
                        }}
                    />
                </div>
            </div>
        </LayoutModal>,
        document.getElementById("portal") as HTMLElement,
    );
};

export default PromotionModal;
