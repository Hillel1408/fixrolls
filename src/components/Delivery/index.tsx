import classNames from "classnames";
import { withMask } from "use-mask-input";
import { useAppDispatch, useAppSelector } from "hook";
import { addDelivery, addType, setActiveModal } from "store";

const Delivery = () => {
    const dispatch = useAppDispatch();
    const orders = useAppSelector((state) => state.orders);
    const modals = useAppSelector((state) => state.modals);

    const listItems = ["Доставка", "Навынос"];

    return (
        <div className="pt-[21px] pr-[35px] pb-[30px] pl-[18px] bg-white rounded-[32px] flex flex-col gap-[26px] sm:px-3 sm:pt-[27px] sm:pb-6">
            {false && (
                <ul className="flex gap-[14px] sm:gap-[5px] sm:grid sm:grid-cols-[1fr_1fr] sm:pr-[90px]">
                    {listItems.map((item) => (
                        <li
                            className={classNames(
                                "h-12 px-[22px] rounded-2xl flex items-center cursor-pointer sm:px-2 sm:justify-center",
                                item === "Доставка" ? "gap-2" : "gap-[10px]",
                                orders.type === item && "bg-[#F2F2F2]",
                            )}
                            onClick={() => {
                                dispatch(addType(item));
                            }}
                        >
                            <span className="text-[#21201F] text-[20px] font-medium sm:text-[16px]">{item}</span>

                            {item === "Доставка" ? (
                                <span className="text-[#767676] text-[16px] sm:hidden">≈ 60 мин</span>
                            ) : (
                                <span className="px-1 py-[10px] rounded-[11px] bg-[#6f6e6d] text-white sm:text-[14px]">15%</span>
                            )}
                        </li>
                    ))}
                </ul>
            )}

            <div>
                <button
                    className={classNames(
                        "text-[20px] font-medium mb-4 flex text-left gap-2 sm:text-[16px] items-center sm:pr-[90px]",
                        modals.flag && !orders.delivery.street?.title ? "text-[red]" : "text-[#000]",
                    )}
                    onClick={() => {
                        dispatch(setActiveModal("city"));
                    }}
                >
                    <svg className="w-[29px] h-[22px] sm:w-[25px] sm:h-5" aria-hidden="true">
                        <use xlinkHref="/sprites/sprite.svg#home"></use>
                    </svg>

                    {orders.delivery.street?.title || "Введите улицу"}

                    <svg className="w-6 h-6" aria-hidden="true">
                        <use xlinkHref="/sprites/sprite.svg#arrow"></use>
                    </svg>
                </button>

                <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-3 mb-[13px] sm:grid-cols-[1fr_1fr]">
                    <input
                        type="text"
                        className={classNames(
                            "h-12 px-[17px] rounded-[16px] border border-[#D2D0CC] placeholder:text-[#9E9B98] placeholder:text-[16px] w-full",
                            modals.flag && !orders.delivery.home ? "border-[red]" : "border-[#D2D0CC]",
                        )}
                        placeholder="Дом"
                        value={orders.delivery.home}
                        onChange={(e) => dispatch(addDelivery({ home: e.target.value }))}
                    />

                    <input
                        type="text"
                        className="h-12 px-[17px] rounded-[16px] border border-[#D2D0CC] placeholder:text-[#9E9B98] placeholder:text-[16px] w-full"
                        placeholder="Кв./Офис"
                        value={orders.delivery.room}
                        onChange={(e) => dispatch(addDelivery({ room: e.target.value }))}
                    />

                    <input
                        type="text"
                        className="h-12 px-[17px] rounded-[16px] border border-[#D2D0CC] placeholder:text-[#9E9B98] placeholder:text-[16px] w-full"
                        placeholder="Домофон"
                        value={orders.delivery.code2}
                        onChange={(e) => dispatch(addDelivery({ code2: e.target.value }))}
                    />

                    <input
                        type="text"
                        className="h-12 px-[17px] rounded-[16px] border border-[#D2D0CC] placeholder:text-[#9E9B98] placeholder:text-[16px] w-full"
                        placeholder="Подъезд"
                        value={orders.delivery.entrance}
                        onChange={(e) => dispatch(addDelivery({ entrance: e.target.value }))}
                    />

                    <input
                        type="text"
                        className="h-12 px-[17px] rounded-[16px] border border-[#D2D0CC] placeholder:text-[#9E9B98] placeholder:text-[16px] w-full"
                        placeholder="Этаж"
                        value={orders.delivery.floor}
                        onChange={(e) => dispatch(addDelivery({ floor: e.target.value }))}
                    />
                </div>

                <div className="grid grid-cols-[1fr_1fr] gap-3 mb-[13px] sm:grid-cols-[1fr_1fr]">
                    <input
                        type="text"
                        className={classNames(
                            "h-12 px-[17px] rounded-[16px] border placeholder:text-[#9E9B98] placeholder:text-[16px] w-full",
                            modals.flag && !orders.delivery.family ? "border-[red]" : "border-[#D2D0CC]",
                        )}
                        placeholder="Ваше имя"
                        value={orders.delivery.family}
                        onChange={(e) => dispatch(addDelivery({ family: e.target.value }))}
                    />

                    <input
                        type="tel"
                        className={classNames(
                            "h-12 px-[17px] rounded-[16px] border placeholder:text-[#9E9B98] placeholder:text-[16px] w-full",
                            modals.flag && !orders.delivery.phone ? "border-[red]" : "border-[#D2D0CC]",
                        )}
                        placeholder="Контактный телефон"
                        value={orders.delivery.phone}
                        ref={withMask("+7(999)999-99-99")}
                        onChange={(e) => dispatch(addDelivery({ phone: e.target.value }))}
                    />
                </div>

                <input
                    type="text"
                    className="h-12 px-[17px] rounded-[16px] border border-[#D2D0CC] placeholder:text-[#9E9B98] placeholder:text-[16px] w-full"
                    placeholder="Комментарий курьеру"
                    value={orders.delivery.comment}
                    onChange={(e) => dispatch(addDelivery({ comment: e.target.value }))}
                />
            </div>

            {false && (
                <div>
                    <h3 className="text-[#000] text-[20px] font-medium mb-2 sm:text-[16px]">Время доставки</h3>

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
            )}
        </div>
    );
};

export default Delivery;
