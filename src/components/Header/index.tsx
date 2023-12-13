import {
    CityModal,
    DeliveryAddressModal,
    MobileMenuModal,
    Modal404,
    DeliveryModal,
} from "components";
import { useAppDispatch, useAppSelector } from "hook";
import { setActiveModal } from "store";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "constants/";

const Header = () => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const orders = useAppSelector((state) => state.orders);

    return (
        <>
            <header className="fixed left-0 right-0 z-10">
                <div className="container lg:px-0">
                    <div className="bg-white shadow-[0px_3px_70px_-20px_rgba(34,60,80,0.2)] rounded-b-[16px] grid grid-cols-[232px_1fr_334px] items-center gap-[26px] xl:grid-cols-[232px_1fr_80px] lg:gap-5 lg:grid-cols-[175px_1fr_80px] md:grid-cols-[auto_1fr_auto] md:gap-[18px] md:px-[10px] md:py-2 md:rounded-t-[16px] lg:rounded-b-none lg:shadow-none">
                        <div className="py-4 px-[30px] lg:pr-0 lg:pl-5 md:hidden">
                            <img
                                className="cursor-pointer"
                                src="/images/logo.svg"
                                alt=""
                                onClick={() => {
                                    navigate(ROUTES.HOME);
                                }}
                            />
                        </div>

                        <img className="hidden md:block" src="/images/logo-3.svg" alt="" />

                        <div className="grid grid-cols-[1fr_auto] gap-[54px] items-center xl:gap-5 md:hidden">
                            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-[21px] lg:grid-cols-[auto_1fr]">
                                <button
                                    className="flex items-center text-left"
                                    onClick={() => {
                                        dispatch(setActiveModal("city"));
                                    }}
                                >
                                    <span className="text-[#21201F] text-[15px] font-medium max-w-[90px]">
                                        {orders.city.region}
                                    </span>
                                    <svg className="w-5 h-5" aria-hidden="true">
                                        <use xlinkHref="/sprites/sprite.svg#arrow"></use>
                                    </svg>
                                </button>

                                <button
                                    className="py-[13px] pl-[14px] pr-[6px] text-[#21201F] text-[16px] rounded-[14px] border-[2px] border-[#FC931C] text-left whitespace-nowrap overflow-hidden text-ellipsis"
                                    onClick={() => {
                                        dispatch(setActiveModal("delivery-address"));
                                    }}
                                >
                                    {orders.delivery.street?.title || "Выберите адресс доставки"}
                                </button>

                                <button
                                    className="text-[#21201F] text-[16px] border-b border-[#21201F] whitespace-nowrap lg:hidden"
                                    onClick={() => {
                                        dispatch(setActiveModal("delivery"));
                                    }}
                                >
                                    Зоны доставки
                                </button>
                            </div>

                            <a
                                href="tel:+7(800)777-98-65"
                                className="text-[#21201F] text-[20px] font-medium whitespace-nowrap"
                            >
                                +7 (800) 777-98-65
                            </a>
                        </div>

                        <button
                            className="text-[#21201F] text-[16px] font-medium flex bg-[#FFCD36] rounded-2xl h-[48px] mx-4 items-center justify-center gap-[10px] md:hidden"
                            onClick={() => {
                                dispatch(setActiveModal("404"));
                            }}
                        >
                            <svg className="w-5 h-5" aria-hidden="true">
                                <use xlinkHref="/sprites/sprite.svg#person"></use>
                            </svg>
                            <span className="xl:hidden">Войти</span>
                        </button>

                        <button
                            className="hidden md:flex bg-[#F2F2F2] py-[11px] px-6 text-[16px] text-[#21201F] font-medium rounded-[7px] items-center"
                            onClick={() => {
                                dispatch(setActiveModal("city"));
                            }}
                        >
                            Выбрать адрес
                            <svg className="w-[18px] h-[18px] -rotate-90" aria-hidden="true">
                                <use xlinkHref="/sprites/sprite.svg#arrow"></use>
                            </svg>
                        </button>

                        <button
                            className="hidden md:block"
                            onClick={() => {
                                dispatch(setActiveModal("mobile-menu"));
                            }}
                        >
                            <svg className="w-[17px] h-3 mr-2" aria-hidden="true">
                                <use xlinkHref="/sprites/sprite.svg#menu-btn"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            <CityModal />

            <DeliveryAddressModal />

            <Modal404 />

            <MobileMenuModal />

            <DeliveryModal />
        </>
    );
};

export default Header;
