import { createPortal } from "react-dom";
import { LayoutModal } from "components";
import { useAppSelector, useAppDispatch } from "hook";
import { setActiveModal, addCity, resetStore } from "store";
import classNames from "classnames";

const CityModal = () => {
    const activeModal = useAppSelector((state) => state.modals.activeModal);
    const activeCity = useAppSelector((state) => state.orders.city);
    const dispatch = useAppDispatch();

    const city = [
        {
            name: "Алатырь",
            restaurantID: "1656087162764067438",
            wid: "1656087162769125139",
            center: [54.84072414519224, 46.59023238623043],
            title: "Чувашская Республика, Алатырь",
        },
        {
            name: "Владимир",
            restaurantID: "1642154196437770364",
            wid: "1642154196451843135",
            center: [56.129056999993274, 40.40663499999998],
            title: "Владимир, Большая Московская улица",
        },
        { name: "Вологда", restaurantID: "1642154196591368568", wid: "1642154196597661641" },
        { name: "Димитровград", restaurantID: "1639902905223745909", wid: "1639902905220073019" },
        { name: "Дубна", restaurantID: "1656087157899060669", wid: "1656087157888601384" },
        { name: "Ковров", restaurantID: "1602745682017181653", wid: "1602745682010019794" },
        { name: "Кострома", restaurantID: "1656087162541699433", wid: "1656087162541898964" },
        { name: "Кулебаки", restaurantID: "1591345972412718352", wid: "1591345972413847051" },
        { name: "Липецк", restaurantID: "1642154196735173474", wid: "1656087162769125139" },
        { name: "Лобня", restaurantID: "1656087162680035397", wid: "1656087162684171945" },
        { name: "Минусинск", restaurantID: "1602745683487916651", wid: "1602745683478884310" },
        { name: "Назарово", restaurantID: "1642154196217440211", wid: "1642154196207440881" },
        { name: "Оренбург", restaurantID: "1656087162822910371", wid: "1656087162831630000" },
        { name: "Рязань", restaurantID: "1600494026166629406", wid: "1600494026157029846" },
        { name: "Самара", restaurantID: "1642154196880535986", wid: "1642154196872664457" },
        { name: "Черноморское", restaurantID: "1602745682547130976", wid: "1602745682552846414" },
    ];

    activeModal === "city" && document.body.classList.add("lock");

    return createPortal(
        <LayoutModal
            className="px-[56px] pt-[47px] pb-[74px] w-[478px] sm:p-5 sm:pt-7 sm:w-full"
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
                    {city.map((item, index) => (
                        <li
                            key={index}
                            className={classNames(
                                "py-[17px] pl-[29px] pr-[19px]  rounded-[13px] text-[16px] text-[#000] flex justify-between cursor-pointer",
                                item.name === activeCity.name ? "bg-[#FFCD36]" : "bg-[#F9F7F7]",
                            )}
                            onClick={() => {
                                dispatch(addCity(item));
                                dispatch(resetStore());
                                dispatch(setActiveModal(""));
                                document.body.classList.remove("lock");
                            }}
                        >
                            {item.name}
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
