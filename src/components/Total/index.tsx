import classNames from "classnames";
import { Button, PromotionalCodeModal, SuccessModal } from "components";
import { useAppSelector, useAppDispatch } from "hook";
import { sentOrder, setActiveModal, setFlag, addPromoCode, addDelivery } from "store";
import data from "data/data.json";

const Total = () => {
    const dispatch = useAppDispatch();
    const orders = useAppSelector((state) => state.orders);
    const modals = useAppSelector((state) => state.modals);

    const delivery = data.find((item) => item.restaurantID === orders.city.restaurantID)
        ?.free_delivery[0].delivery_price;

    const { status } = useAppSelector((state) => state.orders);

    return (
        <>
            <div className="bg-white py-[35px] px-[30px] rounded-[32px] flex flex-col gap-6 sticky top-[100px] sm:px-3 sm:pt-0 sm:pb-6">
                <div>
                    <h2 className="text-[#000] text-[26px] font-medium mb-3">Способ оплаты</h2>

                    <div className="flex gap-3">
                        <button
                            className={classNames(
                                "text-[#000] text-left text-[14px] leading-[85%] flex flex-col gap-[9px] px-[10px] pt-[10px] pb-[35px] w-[130px] rounded-2xl border items-start",
                                modals.flag && orders.delivery.paymentMethod === undefined
                                    ? "border-[red]"
                                    : "border-[#FFCD36]",
                            )}
                            onClick={() => {
                                dispatch(addDelivery({ paymentMethod: 1 }));
                            }}
                        >
                            <span className="w-4 h-4 rounded-[4px] border border-[#231F20] flex items-center justify-center">
                                {orders.delivery.paymentMethod === 1 && (
                                    <span className="bg-[#231F20] w-2 h-2 rounded-[4px]"></span>
                                )}
                            </span>
                            Картой при получении
                        </button>
                        <button
                            className={classNames(
                                "text-[#000] text-left text-[14px] leading-[85%] flex flex-col gap-[9px] px-[10px] pt-[10px] pb-[35px] w-[130px] rounded-2xl border items-start",
                                modals.flag && orders.delivery.paymentMethod === undefined
                                    ? "border-[red]"
                                    : "border-[#FFCD36]",
                            )}
                            onClick={() => {
                                dispatch(addDelivery({ paymentMethod: 0 }));
                            }}
                        >
                            <span className="w-4 h-4 rounded-[4px] border border-[#231F20] flex items-center justify-center">
                                {orders.delivery.paymentMethod === 0 && (
                                    <span className="bg-[#231F20] w-2 h-2 rounded-[4px]"></span>
                                )}
                            </span>
                            Наличными при получении
                        </button>
                    </div>
                </div>

                <div>
                    <h2 className="text-[#000] text-[26px] font-medium mb-5">Итого</h2>

                    <div className="flex flex-col gap-2 text-[#000] text-[20px]">
                        <div className="flex justify-between">
                            <span>Стоимость товаров</span>
                            <span>{orders.totalCart} ₽</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Доставка</span>
                            {delivery ? <span>{delivery} ₽</span> : "Бесплатно"}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    {orders.promoCode ? (
                        <div className="flex items-center gap-2">
                            <p className="text-[#21201F] text-[20px] font-medium ">
                                Промокод: {orders.promoCode}
                            </p>

                            <button
                                onClick={() => {
                                    dispatch(addPromoCode(""));
                                }}
                            >
                                <svg className="w-[10px] h-[10px]" aria-hidden="true">
                                    <use xlinkHref="/sprites/sprite.svg#close"></use>
                                </svg>
                            </button>
                        </div>
                    ) : (
                        <button
                            className="text-[#21201F] text-[20px] font-medium flex gap-[10px]"
                            onClick={() => {
                                dispatch(setActiveModal("promotion-code"));
                            }}
                        >
                            У меня есть промокод
                        </button>
                    )}

                    {false && (
                        <label className="text-[#21201F] text-[20px] font-medium flex gap-[10px]">
                            <input type="checkbox" />
                            Списать бонусы
                        </label>
                    )}
                </div>

                <div className="flex justify-between items-center gap-4 sm:flex-row-reverse sm:bg-[#F9F7F7] sm:fixed sm:bottom-0 sm:left-0 sm:right-0 sm:px-5 sm:py-3 sm:gap-[30px] sm:rounded-t-2xl">
                    <Button
                        text="Заказать"
                        className="h-[56px] w-full"
                        clickHandler={() => {
                            if (
                                orders.delivery.phone &&
                                orders.delivery.street.title &&
                                orders.delivery.home &&
                                orders.delivery.family &&
                                orders.delivery.paymentMethod !== undefined
                            ) {
                                dispatch(sentOrder(orders));
                                status === "resolved" && dispatch(setActiveModal("success"));
                            } else dispatch(setFlag(true));
                        }}
                    />
                    <div className="sm:flex sm:flex-col sm:items-start sm:gap-1">
                        <span className="hidden sm:block text-[rgba(0,0,0,0.70)] text-[14px] font-medium">
                            Итого:
                        </span>

                        <span className="text-[#000] text-[26px] font-medium whitespace-nowrap sm:text-[24px]">
                            {orders.totalCart + Number(delivery)}₽
                        </span>
                    </div>
                </div>
            </div>

            <PromotionalCodeModal />

            <SuccessModal />
        </>
    );
};

export default Total;
