import { Button, PromotionalCodeModal, SuccessModal } from "components";
import { useAppSelector, useAppDispatch } from "hook";
import { sentOrder, setActiveModal } from "store";

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
                    <button
                        className="text-[#21201F] text-[20px] font-medium flex gap-[10px]"
                        onClick={() => {
                            dispatch(setActiveModal("promotion-code"));
                        }}
                    >
                        У меня есть промокод
                    </button>

                    {false && (
                        <label className="text-[#21201F] text-[20px] font-medium flex gap-[10px]">
                            <input type="checkbox" />
                            Списать бонусы
                        </label>
                    )}
                </div>

                <div className="flex justify-between items-center gap-4">
                    <Button
                        text="Заказать"
                        className="h-[48px]"
                        clickHandler={() => {
                            dispatch(sentOrder(orders));
                            status === "resolved" && dispatch(setActiveModal("success"));
                        }}
                    />

                    <span className="text-[#000] text-[26px] font-medium whitespace-nowrap sm:text-[24px]">
                        {orders.totalCart} ₽
                    </span>
                </div>
            </div>

            <PromotionalCodeModal />

            <SuccessModal />
        </>
    );
};

export default Total;
