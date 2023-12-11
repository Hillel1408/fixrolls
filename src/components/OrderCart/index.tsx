import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "hook";
import { resetCart, addCard, deleteCard, addDelivery } from "store";
import { ROUTES } from "constants/";
import { useNavigate } from "react-router-dom";
import { useMatchMedia } from "hooks";

const OrderCart = () => {
    const dispatch = useAppDispatch();
    const orders = useAppSelector((state) => state.orders);

    const navigate = useNavigate();

    const { isMobile } = useMatchMedia();

    useEffect(() => {
        (orders.cards.length === 0 || isMobile) && navigate(ROUTES.HOME);
    }, [orders, navigate, isMobile]);

    return (
        <div className="mt-[23px] bg-white rounded-[30px] py-[32px] pl-[36px] pr-[17px] flex flex-col gap-6 sm:hidden">
            <div className="flex justify-between items-center">
                <h2 className="text-[#000] text-[26px] font-medium">Ваш заказ</h2>

                <button
                    className="flex items-center gap-[6px]"
                    onClick={() => {
                        navigate(ROUTES.HOME);
                        dispatch(resetCart(""));
                    }}
                >
                    <svg className="w-[14px] h-4" aria-hidden="true">
                        <use xlinkHref="/sprites/sprite.svg#trash"></use>
                    </svg>
                    Очистить корзину
                </button>
            </div>

            {orders.cards.map((item: any) => (
                <div key={item.product.id} className="grid grid-cols-[1fr_122px_77px] items-center">
                    <div className="flex gap-2 items-center">
                        <div className="min-w-[94px]">
                            <img
                                className="h-[94px] object-cover w-full"
                                src={item.product.image.replace(
                                    "http://89.248.201.151",
                                    "https://fiksroll.ru",
                                )}
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col gap-1 text-[#000] text-[16px] leading-[113%]">
                            <span>{item.product.name}</span>
                            <span>280 г</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            className="bg-[#EEEEEE] rounded-[10px]"
                            onClick={(e) => {
                                dispatch(deleteCard(item.product));
                            }}
                        >
                            <svg className="w-10 h-10" aria-hidden="true">
                                <use xlinkHref="/sprites/sprite.svg#-"></use>
                            </svg>
                        </button>

                        <span className="text-[#21201F] text-[16px]">{item.count}</span>

                        <button
                            className="bg-[#EEEEEE] rounded-[10px]"
                            onClick={(e) => {
                                dispatch(addCard(item.product));
                            }}
                        >
                            <svg className="w-10 h-10" aria-hidden="true">
                                <use xlinkHref="/sprites/sprite.svg#+"></use>
                            </svg>
                        </button>
                    </div>

                    <span className="text-[#000] text-[18px] ml-auto mr-2">{item.total}</span>
                </div>
            ))}

            <input
                type="text"
                className="h-12 px-[17px] rounded-[16px] border border-[#D2D0CC] placeholder:text-[#9E9B98] placeholder:text-[16px] w-full"
                placeholder="Комментарий повару"
                value={orders.delivery.staffComment}
                onChange={(e) => dispatch(addDelivery({ staffComment: e.target.value }))}
            />
        </div>
    );
};

export default OrderCart;
