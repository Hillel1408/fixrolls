import { Link } from "react-router-dom";
import { Delivery, Button } from "components";

const Order = () => {
    return (
        <div className="container grid grid-cols-[232px_1fr_334px] gap-[26px] pt-[42px] pb-[100px]">
            <div></div>

            <div>
                <div className="mb-8 flex items-center justify-between text-[#21201F] text-[16px] font-medium">
                    <h1 className="text-[#21201F] text-[30px] font-medium">Оформление заказа</h1>

                    <button className="py-[13px] px-[21px] rounded-2xl border border-[#000] flex gap-[5px] items-center">
                        <svg className="w-6 h-6 rotate-90" aria-hidden="true">
                            <use xlinkHref="/sprites/sprite.svg#arrow"></use>
                        </svg>
                        Вернуться в меню
                    </button>
                </div>

                <div className="grid grid-cols-[1.14fr_1fr] gap-5 items-start">
                    <div>
                        <Delivery />

                        <div className="mt-[23px] bg-white rounded-[30px] py-[32px] pl-[36px] pr-[17px] flex flex-col gap-6">
                            <div className="flex justify-between items-center">
                                <h2 className="text-[#000] text-[26px] font-medium">Ваш заказ</h2>
                                <button className="flex items-center gap-[6px]">
                                    <svg className="w-[14px] h-4" aria-hidden="true">
                                        <use xlinkHref="/sprites/sprite.svg#trash"></use>
                                    </svg>
                                    Очистить корзину
                                </button>
                            </div>

                            {new Array(4).fill("").map((item, index) => (
                                <div className="grid grid-cols-[1fr_122px_77px] items-center">
                                    <div className="flex gap-2 items-center">
                                        <div className="w-[94px]">
                                            <img
                                                className="h-[94px] object-cover w-full"
                                                src="/images/img-2.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1 text-[#000] text-[16px] leading-[113%]">
                                            <span>Пицца 4 сыра</span>
                                            <span>280 г</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <button className="bg-[#EEEEEE] rounded-[10px]">
                                            <svg className="w-10 h-10" aria-hidden="true">
                                                <use xlinkHref="/sprites/sprite.svg#-"></use>
                                            </svg>
                                        </button>

                                        <span className="text-[#21201F] text-[16px]">1</span>

                                        <button className="bg-[#EEEEEE] rounded-[10px]">
                                            <svg className="w-10 h-10" aria-hidden="true">
                                                <use xlinkHref="/sprites/sprite.svg#+"></use>
                                            </svg>
                                        </button>
                                    </div>

                                    <span className="text-[#000] text-[18px] ml-auto mr-2">
                                        199₽
                                    </span>
                                </div>
                            ))}

                            <input
                                type="text"
                                className="h-12 px-[17px] rounded-[16px] border border-[#D2D0CC] placeholder:text-[#9E9B98] placeholder:text-[16px] w-full"
                                placeholder="Комментарий повару"
                            />
                        </div>
                    </div>

                    <div className="bg-white py-[35px] px-[30px] rounded-[32px] flex flex-col gap-6 sticky top-0">
                        <div>
                            <h2 className="text-[#000] text-[26px] font-medium mb-5">Итого</h2>

                            <div className="flex flex-col gap-2 text-[#000] text-[20px]">
                                <div className="flex justify-between">
                                    <span>Стоимость товаров</span>
                                    <span>2559 ₽</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Доставка</span>
                                    <span>200 ₽</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[#21201F] text-[20px] font-medium flex gap-[10px]">
                                <input type="checkbox" />
                                Промокод
                            </label>
                            <label className="text-[#21201F] text-[20px] font-medium flex gap-[10px]">
                                <input type="checkbox" />
                                Списать бонусы
                            </label>
                        </div>

                        <div className="flex justify-between items-center">
                            <Button text="Оплатить" className="h-[48px]" />

                            <span className="text-[#000] text-[26px] font-medium">2759 ₽</span>
                        </div>
                    </div>
                </div>
            </div>

            <div></div>
        </div>
    );
};

export default Order;
