import { createPortal } from "react-dom";
import { LayoutModal, Button } from "components";
import { useAppSelector, useAppDispatch } from "hook";
import { setActiveModal } from "store";
import data from "data/data.json";

const DeliveryModal = () => {
    const modals = useAppSelector((state) => state.modals);
    const orders = useAppSelector((state) => state.orders);
    const dispatch = useAppDispatch();

    const item = data.find((item) => item.restaurantID === orders.city.restaurantID);

    modals.activeModal === "delivery" && document.body.classList.add("lock");

    return createPortal(
        <LayoutModal
            className="w-[562px] sm:w-full"
            closeModal={() => {
                dispatch(setActiveModal(""));
            }}
            active={modals.activeModal === "delivery"}
        >
            <div className="relative">
                <img className="object-cover w-full" src={item?.delivery_area?.area_img} alt="" />

                <div className="pt-7 px-5 max-h-[535px] overflow-y-auto pb-[100px]">
                    <div className="flex flex-col gap-3 whitespace-pre-wrap">{item?.delivery_area?.description}</div>
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

export default DeliveryModal;
