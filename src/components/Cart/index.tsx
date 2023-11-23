import { DeliveryTotalModal, Button } from "components";
import { useMatchMedia } from "hooks";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "constants/";
import { useAppDispatch, useAppSelector } from "hook";
import { setActiveDeliveryTotalModal, setActiveCartModal, resetCart } from "store";
import classNames from "classnames";

const Cart = () => {
    const { isMobile, isTablet, isDesktop } = useMatchMedia();

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const cards = useAppSelector((state) => state.orders.cards);

    return (
        <div className="pt-[100px] sticky top-0 xl:pt-0">
            <div
                className={classNames(
                    "bg-white pt-6 px-6 pb-2 rounded-2xl flex flex-col xl:p-0",
                    cards.length > 0 ? "" : "gap-[200px]",
                )}
            >
                <div className="flex justify-between items-center mb-[13px]">
                    <h2 className="text-[#21201F] text-[26px] font-medium">Корзина</h2>

                    {cards.length > 0 && (
                        <button className="text-[#21201F] text-[15px]" onClick={() => {}}>
                            Очистить
                        </button>
                    )}
                </div>

                {cards.length > 0 ? (
                    ""
                ) : (
                    <div>
                        <img className="mx-auto" src="/images/img-1.png" alt="" />
                        <p className="text-[#21201F] opacity-50 text-center mt-3">
                            Собери заказ сейчас, а мы всё быстро привезём
                        </p>
                    </div>
                )}

                <div className="flex flex-col gap-4">
                    {cards.length > 0 ? (
                        <div className="flex flex-col gap-[9px]">
                            {cards.map((item: any) => (
                                <div
                                    key={item.product.id}
                                    className="grid grid-cols-[68px_1fr_86px] gap-1 items-center"
                                >
                                    <img
                                        className="h-[74px] object-cover w-full"
                                        src={item.product.image}
                                        alt=""
                                    />

                                    <div className="flex flex-col gap-1 text-[#21201F]">
                                        <span className="text-[15px]">{item.product.name}</span>
                                        <div>
                                            <span className="text-[16px] font-medium">
                                                {item.total}
                                            </span>
                                            <span className="text-[12px] font-medium ml-3">
                                                280 г
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center border border-[rgba(0,0,0,0.10)] rounded-[24px] p-1">
                                        <button>
                                            <svg
                                                className="h-[22px] w-[22px] fill-none"
                                                aria-hidden="true"
                                            >
                                                <use xlinkHref="/sprites/sprite.svg#-"></use>
                                            </svg>
                                        </button>

                                        <span className="text-[#21201F] text-[15px]">
                                            {item.count}
                                        </span>

                                        <button>
                                            <svg
                                                className="h-[22px] w-[22px] fill-none"
                                                aria-hidden="true"
                                            >
                                                <use xlinkHref="/sprites/sprite.svg#+"></use>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-[#21201F] text-[14px] font-medium">
                            Доставка работает: с 11:00 до 22:30
                        </p>
                    )}

                    {cards.length > 0 && (
                        <div className="flex flex-col gap-3 items-center">
                            <div className="flex gap-[10px] items-center">
                                <span className="text-[rgba(0,0,0,0.70)] text-[14px] font-medium">
                                    Итого:
                                </span>

                                <span className="text-[#21201F] text-[30px] font-medium">
                                    1595₽
                                </span>
                            </div>

                            <Button
                                text="Продолжить"
                                className="h-[56px] w-full"
                                clickHandler={() => {
                                    document.body.classList.remove("lock");
                                    dispatch(setActiveCartModal(false));
                                    if (isTablet || isDesktop) navigate(ROUTES.ORDER);
                                    else {
                                        if (isMobile) {
                                            dispatch(setActiveDeliveryTotalModal(true));
                                        }
                                    }
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>

            {isMobile && <DeliveryTotalModal />}
        </div>
    );
};

export default Cart;
