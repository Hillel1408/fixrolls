import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { Button } from "components";
import { useMatchMedia } from "hooks";
import { ROUTES } from "constants/";
import { useAppDispatch, useAppSelector } from "hook";
import { resetCart, addCard, deleteCard, setActiveModal } from "store";
import data from "data/data.json";

const Cart = () => {
    const { isMobile, isTablet, isDesktop } = useMatchMedia();

    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const orders = useAppSelector((state) => state.orders);

    const minSumOrder = 500 - orders.totalCart;

    return (
        <div className="sticky pt-[100px] top-0 xl:pt-0">
            <div
                className={classNames(
                    "bg-white pt-6 px-5 rounded-2xl flex flex-col xl:p-0 h-[calc(100vh-130px)] relative xl:h-auto xl:min-h-[500px]",
                    orders.cards.length > 0
                        ? "pb-[150px] xl:pb-[180px] sm:pb-[150px]"
                        : "justify-between pb-6 sm:pb-0",
                )}
            >
                <div className="flex justify-between items-center mb-[13px]">
                    <h2 className="text-[#21201F] text-[26px] font-medium">Корзина</h2>

                    {orders.cards.length > 0 && (
                        <button
                            className="text-[#21201F] text-[15px] xl:mr-20"
                            onClick={() => {
                                dispatch(resetCart());
                            }}
                        >
                            Очистить
                        </button>
                    )}
                </div>

                {!(orders.cards.length > 0) && (
                    <div>
                        <img className="mx-auto" src="/images/img-1.png" alt="" />
                        <p className="text-[#21201F] opacity-50 text-center mt-3">
                            Собери заказ сейчас, а мы всё быстро привезём
                        </p>
                    </div>
                )}

                {orders.cards.length > 0 && (
                    <div className="scroll-bar flex flex-col gap-[9px] overflow-auto pr-3">
                        {orders.cards.map((item: any) => (
                            <div
                                key={item.product.id}
                                className="grid grid-cols-[68px_1fr_86px] gap-1 items-center"
                            >
                                <img
                                    className="h-[74px] object-cover w-full"
                                    src={item.product.image.replace(
                                        "http://89.248.201.151",
                                        "https://fiksroll.ru",
                                    )}
                                    alt=""
                                />

                                <div className="flex flex-col gap-1 text-[#21201F]">
                                    <span className="text-[15px]">{item.product.name}</span>
                                    <div>
                                        <span className="text-[16px] font-medium">
                                            {item.total}₽
                                        </span>
                                        <span className="text-[12px] font-medium ml-3">280 г</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center border border-[rgba(0,0,0,0.10)] rounded-[24px] p-1">
                                    <button
                                        onClick={(e) => {
                                            dispatch(deleteCard(item.product));
                                        }}
                                    >
                                        <svg
                                            className="h-[22px] w-[22px] fill-none"
                                            aria-hidden="true"
                                        >
                                            <use xlinkHref="/sprites/sprite.svg#-"></use>
                                        </svg>
                                    </button>

                                    <span className="text-[#21201F] text-[15px]">{item.count}</span>

                                    <button
                                        onClick={(e) => {
                                            dispatch(addCard(item.product));
                                        }}
                                    >
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
                )}

                {orders.cards.length > 0 ? (
                    <div className="flex flex-col gap-2 items-center absolute bottom-6 left-6 right-6">
                        <div className="flex gap-[10px] items-center">
                            <span className="text-[rgba(0,0,0,0.70)] text-[14px] font-medium">
                                Итого:
                            </span>

                            <span className="text-[#21201F] text-[30px] font-medium">
                                {orders.totalCart}₽
                            </span>
                        </div>

                        {minSumOrder > 0 ? (
                            <p className="py-[10px] px-[14px] rounded-2xl border border-[#6C6C6C] w-full text-center">
                                {minSumOrder}₽ до бесплатной доставки
                            </p>
                        ) : (
                            <p className="text-[#000] text-[12px] font-medium">
                                Бесплатная доставка
                            </p>
                        )}

                        <Button
                            text="Продолжить"
                            className="h-[56px] w-full"
                            clickHandler={() => {
                                document.body.classList.remove("lock");
                                if (isTablet || isDesktop) navigate(ROUTES.ORDER);
                                else if (isMobile) dispatch(setActiveModal("delivery-total"));
                            }}
                        />
                    </div>
                ) : (
                    <p className="text-[#21201F] text-[14px] font-medium">
                        Доставка работает:{" "}
                        {data.find((item) => item.region === orders.city.region)?.working_hours}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Cart;
