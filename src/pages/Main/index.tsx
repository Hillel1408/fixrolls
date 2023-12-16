import { useEffect, createRef, useState } from "react";
import {
    Sidebar,
    Cart,
    Slider,
    CartModal,
    Layout,
    CardsBlock,
    CardModal,
    DeliveryTotalModal,
} from "components";
import { useMatchMedia } from "hooks";
import { useAppSelector, useAppDispatch } from "hook";
import { getCards, setActiveModal } from "store";
import { ThreeDots } from "react-loader-spinner";

const Main = () => {
    const activeModal = useAppSelector((state) => state.modals.activeModal);
    const orders = useAppSelector((state) => state.orders);
    const dispatch = useAppDispatch();

    const minSumOrder = 500 - orders.totalCart;

    const { isMobile, isTablet, isDesktop } = useMatchMedia();

    const { cards, error } = useAppSelector((state) => state.cards);

    useEffect(() => {
        dispatch(getCards(orders.city));
    }, [orders.city, dispatch]);

    const refs = cards.reduce((refsObj: any, character: { description: { id: number } }) => {
        refsObj[character.description.id] = createRef();
        return refsObj;
    }, {});

    const [pageHeight, setPageHeight] = useState(0);

    useEffect(() => {
        setPageHeight(window.innerHeight);
        window.addEventListener("resize", (e) => {
            setTimeout(() => {
                setPageHeight(window.innerHeight);
            }, 300);
        });
    }, []);

    return (
        <>
            {cards?.length > 0 && pageHeight ? (
                <Layout>
                    <div className="container sm:px-0">
                        <div className="grid grid-cols-[232px_1fr_334px] rounded-2xl items-start gap-[26px] xl:grid-cols-[232px_1fr] lg:block sm:pt-0">
                            {isDesktop && <Sidebar cards={cards} refs={refs} />}

                            <div className="overflow-hidden pt-[100px] lg:pt-[92px] md:pt-[57.5px] lg:overflow-visible">
                                <Slider />

                                {(isMobile || isTablet) && <Sidebar cards={cards} refs={refs} />}

                                <div className="flex flex-col [&>*]:pt-[100px] [&>*]:-mt-[50px] [&>*:first-child]:-mt-[100px] lg:[&>*]:pt-[160px] lg:[&>*]:-mt-[110px] lg:[&>*:first-child]:-mt-[160px] md:[&>*]:pt-[130px] md:[&>*]:-mt-[90px] md:[&>*:first-child]:-mt-[130px] sm:[&>*]:pt-[120px] sm:px-[10px] lg:mt-6">
                                    {cards.map((item: any, index) => (
                                        <CardsBlock
                                            key={item.description.id}
                                            item={item}
                                            refs={refs}
                                            pageHeight={pageHeight}
                                            index={index}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="sticky pt-[100px] top-0 xl:hidden">
                                <Cart />
                            </div>

                            <CartModal />
                        </div>
                    </div>

                    {!(activeModal === "cart") && orders.cards.length > 0 && (
                        <div className="hidden xl:flex py-3 px-7 bg-white items-center fixed bottom-0 left-[10px] right-[10px] shadow-[0px_-3px_70px_-20px_rgba(34,60,80,0.2)] rounded-t-[16px] justify-center gap-[14px] lg:left-0 lg:right-0">
                            {minSumOrder > 0 ? (
                                <p className="p-[10px] text-[14px] text-[#000] border border-[#6C6C6C] rounded-2xl max-w-[190px]">
                                    <span className="font-semibold">{minSumOrder}₽</span> до
                                    бесплатной доставки
                                </p>
                            ) : (
                                <p className="text-[14px] text-[#000]">Бесплатная доставка</p>
                            )}

                            <button
                                className="px-[18px] bg-[#FFCD36] rounded-2xl flex items-center justify-between w-[250px] h-14"
                                onClick={() => {
                                    dispatch(setActiveModal("cart"));
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
                </Layout>
            ) : error ? (
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    {error}
                </p>
            ) : (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <ThreeDots height="50" width="50" radius="9" color="#000000" />
                </div>
            )}

            <CardModal />

            {isMobile && <DeliveryTotalModal />}
        </>
    );
};

export default Main;
