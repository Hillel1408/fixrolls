import { Sidebar, Cart, Slider, Card, CardModal, CartModal } from "components";
import { useMatchMedia } from "hooks";
import { useAppSelector, useAppDispatch } from "hook";
import { setActiveCartModal } from "store";

const Main = () => {
    const activeCartModal = useAppSelector((state) => state.main.activeCartModal);
    const dispatch = useAppDispatch();

    const { isMobile, isTablet, isDesktop } = useMatchMedia();

    return (
        <>
            <div className="container sm:px-0">
                <div className="grid grid-cols-[232px_1fr_334px] pt-4 rounded-2xl items-start gap-[26px] xl:grid-cols-[232px_1fr] sm:grid-cols-[1fr] sm:pt-0">
                    {(isDesktop || isTablet) && <Sidebar />}

                    <div className="overflow-hidden">
                        <Slider />

                        {isMobile && <Sidebar />}

                        <div className="flex flex-col gap-[50px] sm:px-[10px] sm:mt-6">
                            {new Array(4).fill("").map((item, index) => (
                                <div key={index}>
                                    <h2 className="text-[#21201F] text-[30px] font-medium mb-4 sm:text-[24px]">
                                        Сеты по 599₽
                                    </h2>

                                    <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-x-2 gap-y-4 sm:grid-cols-[1fr_1fr] sm:gap-y-2">
                                        {new Array(7).fill("").map((item, index) => (
                                            <Card key={index} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {isDesktop && <Cart />}

                    {(isMobile || isTablet) && <CartModal />}
                </div>
            </div>

            <CardModal />

            {!activeCartModal && (
                <div className="hidden xl:flex py-3 px-7 bg-[#F9F7F7] fixed bottom-0 left-0 right-0 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.82)] rounded-t-[16px] justify-center gap-[6px]">
                    <p className="p-[10px] text-[14px] text-[#000] border border-[#6C6C6C] rounded-2xl max-w-[190px]">
                        <span className="font-semibold">500 ₽</span> до минимальной суммы заказа
                    </p>

                    <button
                        className="px-[18px] bg-[#FFCD36] rounded-2xl flex items-center justify-between w-[250px]"
                        onClick={() => {
                            dispatch(setActiveCartModal(true));
                        }}
                    >
                        <span className="flex items-center">
                            <svg className="h-[20px] w-[22px] fill-none" aria-hidden="true">
                                <use xlinkHref="/sprites/sprite.svg#cart"></use>
                            </svg>
                            <span className="text-[#21201F] text-[12px] ml-4">1 товар</span>
                        </span>

                        <span className="text-[#21201F] text-[24px] font-medium">1390 ₽</span>
                    </button>
                </div>
            )}
        </>
    );
};

export default Main;
