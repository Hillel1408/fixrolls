import { CityModal, DeliveryAddressModal, MobileMenuModal } from "components";
import { useAppDispatch, useAppSelector } from "hook";
import { setActiveModal } from "store";

const Header = () => {
    const dispatch = useAppDispatch();
    const city = useAppSelector((state) => state.orders.city);

    return (
        <>
            <header className="fixed left-0 right-0 z-10">
                <div className="container sm:px-0">
                    <div className="bg-white shadow-[0px_3px_70px_-20px_rgba(34,60,80,0.2)] rounded-b-[16px] grid grid-cols-[232px_1fr_334px] items-center gap-[26px] xl:grid-cols-[232px_1fr_234px] sm:grid-cols-[auto_1fr_auto] sm:gap-[18px] sm:px-[10px] sm:py-2 sm:rounded-t-[16px] sm:rounded-b-none">
                        <div className="py-4 px-[30px] sm:hidden">
                            <img src="/images/logo.svg" alt="" />
                        </div>

                        <img className="hidden sm:block" src="/images/logo-3.svg" alt="" />

                        <div className="grid grid-cols-[1fr_auto] gap-[54px] items-center xl:gap-5 sm:hidden">
                            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-[21px]">
                                <button
                                    className="flex items-center text-left"
                                    onClick={() => {
                                        dispatch(setActiveModal("city"));
                                    }}
                                >
                                    <span className="text-[#21201F] text-[15px] font-medium max-w-[90px]">
                                        {city.name}
                                    </span>
                                    <svg className="w-5 h-5" aria-hidden="true">
                                        <use xlinkHref="/sprites/sprite.svg#arrow"></use>
                                    </svg>
                                </button>

                                <button
                                    className="py-[13px] pl-[14px] pr-[6px] text-[#21201F] text-[16px] rounded-[14px] border-[2px] border-[#FC931C] text-left"
                                    onClick={() => {
                                        dispatch(setActiveModal("delivery-address"));
                                    }}
                                >
                                    {city.name}
                                </button>

                                <button className="text-[#21201F] text-[16px] border-b border-[#21201F] whitespace-nowrap">
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
                            className="text-[#21201F] text-[16px] font-medium flex bg-[#FFCD36] rounded-2xl h-[48px] mx-4 items-center justify-center gap-[10px] sm:hidden"
                            onClick={() => {
                                dispatch(setActiveModal("404"));
                            }}
                        >
                            <svg className="w-5 h-5" aria-hidden="true">
                                <use xlinkHref="/sprites/sprite.svg#person"></use>
                            </svg>
                            Войти
                        </button>

                        <button
                            className="hidden sm:flex bg-[#F2F2F2] py-[11px] px-6 text-[16px] text-[#21201F] font-medium rounded-[7px] items-center"
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
                            className="hidden sm:block"
                            onClick={() => {
                                dispatch(setActiveModal("mobile-menu"));
                            }}
                        >
                            <svg className="w-[17px] h-3" aria-hidden="true">
                                <use xlinkHref="/sprites/sprite.svg#menu-btn"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            <CityModal />

            <DeliveryAddressModal />

            <MobileMenuModal />
        </>
    );
};

export default Header;
