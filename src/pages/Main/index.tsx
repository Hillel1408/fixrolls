import { useState, useEffect } from "react";
import { Sidebar, Cart, Slider, Card, CardModal, CartModal } from "components";
import { useMatchMedia } from "hooks";
import { useAppSelector, useAppDispatch } from "hook";
import { setActiveCartModal } from "store";
import axios from "http/axios";

const Main = () => {
    const activeCartModal = useAppSelector((state) => state.modals.activeCartModal);
    const orders = useAppSelector((state) => state.orders);
    const dispatch = useAppDispatch();

    const minSumOrder = 500 - orders.totalCart;

    const { isMobile, isTablet, isDesktop } = useMatchMedia();

    const [cards, setCards] = useState([]);

    useEffect(() => {
        (async function () {
            try {
                const { data } = await axios.get(
                    "/getMenu.php?restaurantID=1591345972412718352&wid=1591345972413847051",
                );
                setCards(data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <>
            {cards.length > 0 && (
                <div className="container sm:px-0">
                    <div className="grid grid-cols-[232px_1fr_334px] rounded-2xl items-start gap-[26px] xl:grid-cols-[232px_1fr] sm:grid-cols-[1fr] sm:pt-0">
                        {(isDesktop || isTablet) && <Sidebar cards={cards} />}

                        <div className="overflow-hidden pt-[100px] sm:pt-[57.5px]">
                            <Slider />

                            {isMobile && <Sidebar cards={cards} />}

                            <div className="flex flex-col gap-[50px] sm:px-[10px] sm:mt-6">
                                {cards.map((item: any) => (
                                    <div key={item.description.id}>
                                        <h2 className="text-[#21201F] text-[30px] font-medium mb-4 sm:text-[24px]">
                                            {item.description.name}
                                        </h2>

                                        <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-x-2 gap-y-4 2xl:grid-cols-[1fr_1fr_1fr_1fr] sm:grid-cols-[1fr_1fr] sm:gap-y-2">
                                            {item.childrens.map((item: any) => (
                                                <Card
                                                    key={item.description.id}
                                                    item={item.description}
                                                />
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
            )}

            <CardModal />

            {(isMobile || isTablet) && !activeCartModal && orders.cards.length > 0 && (
                <div className="flex py-3 px-7 bg-white items-center fixed bottom-0 left-[10px] right-[10px] shadow-[0px_-3px_70px_-20px_rgba(34,60,80,0.2)] rounded-t-[16px] justify-center gap-[14px]">
                    {minSumOrder > 0 ? (
                        <p className="p-[10px] text-[14px] text-[#000] border border-[#6C6C6C] rounded-2xl max-w-[190px]">
                            <span className="font-semibold">{minSumOrder}₽</span> до бесплатной
                            доставки
                        </p>
                    ) : (
                        <p className="text-[14px] text-[#000]">Бесплатная доставка</p>
                    )}

                    <button
                        className="px-[18px] bg-[#FFCD36] rounded-2xl flex items-center justify-between w-[250px] h-14"
                        onClick={() => {
                            dispatch(setActiveCartModal(true));
                        }}
                    >
                        <span className="flex items-center">
                            <svg className="h-[20px] w-[22px] fill-none" aria-hidden="true">
                                <use xlinkHref="/sprites/sprite.svg#cart"></use>
                            </svg>
                            <span className="text-[#21201F] text-[12px] ml-4">
                                {orders.cards.length} товар
                            </span>
                        </span>

                        <span className="text-[#21201F] text-[24px] font-medium">
                            {orders.totalCart}₽
                        </span>
                    </button>
                </div>
            )}
        </>
    );
};

export default Main;
