import { Button, PromotionalCodeModal, SuccessModal } from "components";
import { useAppSelector, useAppDispatch } from "hook";
import { sentOrder, setActiveModal, setFlag, addPromoCode } from "store";

const Total = () => {
    const dispatch = useAppDispatch();
    const orders = useAppSelector((state) => state.orders);

    const { status } = useAppSelector((state) => state.orders);

    return (
        <>
            <div className="bg-white py-[35px] px-[30px] rounded-[32px] flex flex-col gap-6 sticky top-[100px] sm:px-3 sm:pt-0 sm:pb-6">
                <div>
                    <h2 className="text-[#000] text-[26px] font-medium mb-5">Итого</h2>

                    <div className="flex flex-col gap-2 text-[#000] text-[20px]">
                        <div className="flex justify-between">
                            <span>Стоимость товаров</span>
                            <span>{orders.totalCart} ₽</span>
                        </div>

                        {false && (
                            <div className="flex justify-between">
                                <span>Доставка</span>
                                <span>200 ₽</span>
                            </div>
                        )}
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
                                orders.delivery.family
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
                            {orders.totalCart}₽
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
