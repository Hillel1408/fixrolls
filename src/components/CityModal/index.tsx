import { createPortal } from "react-dom";
import { LayoutModal } from "components";
import { useAppSelector, useAppDispatch } from "hook";
import { setActiveCityModal } from "store";

const CityModal = () => {
    const activeLoginModal = useAppSelector((state) => state.modals.activeCityModal);
    const dispatch = useAppDispatch();

    const city = [
        "Ковров",
        "Владимир",
        "Рязань",
        "Кулебаки",
        "Липецк",
        "Вологда",
        "Оренбург",
        "Дубна",
        "Лобня",
    ];

    activeLoginModal && document.body.classList.add("lock");

    return createPortal(
        <LayoutModal
            className="px-[56px] pt-[47px] pb-[74px] w-[478px] sm:p-5 sm:pt-7 sm:w-full"
            closeModal={() => {
                dispatch(setActiveCityModal(false));
            }}
            active={activeLoginModal}
        >
            <>
                <h3 className="text-[#000] text-[36px] leading-[111%] font-medium mb-8 max-w-[325px] sm:text-[22px]">
                    Города в которых мы работаем
                </h3>

                <ul className="flex flex-col gap-2">
                    {city.map((item, index) => (
                        <li
                            key={index}
                            className="py-[17px] pl-[29px] pr-[19px] bg-[#F9F7F7] rounded-[13px] text-[16px] text-[#000] flex justify-between"
                        >
                            {item}
                            <svg
                                className="h-[21px] w-[21px] fill-none -rotate-90"
                                aria-hidden="true"
                            >
                                <use xlinkHref="/sprites/sprite.svg#arrow"></use>
                            </svg>
                        </li>
                    ))}
                </ul>
            </>
        </LayoutModal>,
        document.getElementById("portal") as HTMLElement,
    );
};

export default CityModal;
