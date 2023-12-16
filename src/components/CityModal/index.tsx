import classNames from "classnames";
import { createPortal } from "react-dom";
import { LayoutModal } from "components";
import { useMatchMedia } from "hooks";
import { useAppSelector, useAppDispatch } from "hook";
import { addCity, resetStore, setActiveModal } from "store";
import data from "data/data.json";

const CityModal = () => {
    const activeCity = useAppSelector((state) => state.orders.city);
    const activeModal = useAppSelector((state) => state.modals.activeModal);
    const dispatch = useAppDispatch();

    const { isMobile } = useMatchMedia();

    activeModal === "city" && document.body.classList.add("lock");

    return createPortal(
        <LayoutModal
            className="px-[56px] pt-[47px] pb-[74px] w-[478px] sm:p-5 sm:pt-7 sm:w-full sm:h-[calc(100vh-100px)]"
            closeModal={() => {
                dispatch(setActiveModal(""));
            }}
            active={activeModal === "city"}
        >
            <>
                <h3 className="text-[#000] text-[36px] leading-[111%] font-medium mb-8 max-w-[325px] sm:text-[22px]">
                    Города в которых мы работаем
                </h3>

                <ul className="flex flex-col gap-2">
                    {data.map(
                        (item, index) =>
                            item.point_available && (
                                <li
                                    key={index}
                                    className={classNames(
                                        "py-[17px] pl-[29px] pr-[19px]  rounded-[13px] text-[16px] text-[#000] flex justify-between cursor-pointer",
                                        item.region === activeCity.region
                                            ? "bg-[#FFCD36]"
                                            : "bg-[#F9F7F7]",
                                    )}
                                    onClick={() => {
                                        if (activeCity.region !== item.region) {
                                            dispatch(addCity(item));
                                            dispatch(resetStore());
                                        }
                                        dispatch(setActiveModal("delivery-address"));
                                        document.body.classList.remove("lock");
                                    }}
                                >
                                    {item.region}
                                    <svg
                                        className="h-[21px] w-[21px] fill-none -rotate-90"
                                        aria-hidden="true"
                                    >
                                        <use xlinkHref="/sprites/sprite.svg#arrow"></use>
                                    </svg>
                                </li>
                            ),
                    )}
                </ul>
            </>
        </LayoutModal>,
        document.getElementById("portal") as HTMLElement,
    );
};

export default CityModal;
