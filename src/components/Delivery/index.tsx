import { useAppDispatch, useAppSelector } from "hook";
import { addDelivery } from "store";

const Delivery = () => {
    const dispatch = useAppDispatch();
    const delivery = useAppSelector((state) => state.orders.delivery);

    return (
        <div className="pt-[21px] pr-[35px] pb-[30px] pl-[18px] bg-white rounded-[32px] flex flex-col gap-[26px] sm:px-3 sm:pt-[17px] sm:pb-6">
            <ul className="flex gap-[14px] sm:gap-[5px] sm:grid sm:grid-cols-[1fr_1fr]">
                <li className="h-12 px-[22px] rounded-2xl bg-[#F2F2F2] flex items-center gap-2 sm:justify-center">
                    <span className="text-[#21201F] text-[20px] font-medium sm:text-[16px]">
                        Доставка{" "}
                    </span>
                    <span className="text-[#767676] text-[16px] sm:hidden">≈ 60 мин</span>
                </li>

                <li className="h-12 px-[22px] rounded-2xl flex items-center gap-[10px] sm:justify-center">
                    <span className="text-[#21201F] text-[20px] font-medium sm:text-[16px]">
                        С собой
                    </span>
                    <span className="px-1 py-[10px] rounded-[11px] bg-[#6f6e6d] text-white sm:text-[14px]">
                        15%
                    </span>
                </li>
            </ul>

            <div>
                <button className="text-[#000] text-[20px] font-medium mb-4 flex gap-2 sm:text-[16px] items-center">
                    <svg className="w-[29px] h-[22px] sm:w-[25px] sm:h-5" aria-hidden="true">
                        <use xlinkHref="/sprites/sprite.svg#home"></use>
                    </svg>
                    Москва, Ленинский проспект, 39/1
                    <svg className="w-6 h-6" aria-hidden="true">
                        <use xlinkHref="/sprites/sprite.svg#arrow"></use>
                    </svg>
                </button>

                <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-3 mb-[13px] sm:grid-cols-[1fr_1fr]">
                    <input
                        type="text"
                        className="h-12 px-[17px] rounded-[16px] border border-[#D2D0CC] placeholder:text-[#9E9B98] placeholder:text-[16px] w-full"
                        placeholder="Кв./Офис"
                        value={delivery.apartment}
                        onChange={(e) => dispatch(addDelivery({ apartment: e.target.value }))}
                    />
                    <input
                        type="text"
                        className="h-12 px-[17px] rounded-[16px] border border-[#D2D0CC] placeholder:text-[#9E9B98] placeholder:text-[16px] w-full"
                        placeholder="Домофон"
                        value={delivery.intercom}
                        onChange={(e) => dispatch(addDelivery({ intercom: e.target.value }))}
                    />
                    <input
                        type="text"
                        className="h-12 px-[17px] rounded-[16px] border border-[#D2D0CC] placeholder:text-[#9E9B98] placeholder:text-[16px] w-full"
                        placeholder="Подъезд"
                        value={delivery.entrance}
                        onChange={(e) => dispatch(addDelivery({ entrance: e.target.value }))}
                    />
                    <input
                        type="text"
                        className="h-12 px-[17px] rounded-[16px] border border-[#D2D0CC] placeholder:text-[#9E9B98] placeholder:text-[16px] w-full"
                        placeholder="Этаж"
                        value={delivery.storey}
                        onChange={(e) => dispatch(addDelivery({ storey: e.target.value }))}
                    />
                </div>

                <input
                    type="text"
                    className="h-12 px-[17px] rounded-[16px] border border-[#D2D0CC] placeholder:text-[#9E9B98] placeholder:text-[16px] w-full"
                    placeholder="Комментарий курьеру"
                    value={delivery.commentCourier}
                    onChange={(e) => dispatch(addDelivery({ commentCourier: e.target.value }))}
                />
            </div>

            <div>
                <h3 className="text-[#000] text-[20px] font-medium mb-2 sm:text-[16px]">
                    Время доставки
                </h3>

                <button className="flex items-center gap-2 text-[16px] text-[#000] sm:text-[14px]">
                    <svg className="w-5 h-5" aria-hidden="true">
                        <use xlinkHref="/sprites/sprite.svg#clock"></use>
                    </svg>
                    Доставка сегодня 11:30
                    <svg className="w-6 h-6" aria-hidden="true">
                        <use xlinkHref="/sprites/sprite.svg#arrow"></use>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Delivery;
