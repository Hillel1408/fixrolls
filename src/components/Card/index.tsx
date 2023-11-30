import { useState } from "react";
import { CardModal } from "components";
import { useAppDispatch, useAppSelector } from "hook";
import { addCard, deleteCard } from "store";

const Card = ({ item }: { item: any }) => {
    const { name, image, floatprice } = item;

    const [active, setActive] = useState(false);

    const dispatch = useAppDispatch();
    const cards = useAppSelector((state) => state.orders.cards);

    const count = cards[cards.findIndex((card: any) => card.product.id === item.id)]?.count || 0;

    return (
        <>
            <div
                className="px-2 pt-[6px] pb-[15px] bg-white rounded-[21px] flex flex-col sm:p-[6px] cursor-pointer"
                onClick={() => {
                    setActive(true);
                }}
            >
                <img
                    className="h-[195px] object-cover w-full sm:h-[144px]"
                    src={image.replace("http://89.248.201.151", "https://fiksroll.ru")}
                    alt=""
                />

                <div className="px-2 sm:px-[6px] mb-[10px] flex flex-col flex-auto">
                    <h3 className="text-[#21201F] text-[18px] font-medium sm:text-[14px]">
                        {name}
                    </h3>

                    <p className="text-[#797979] text-[12px] font-medium mb-6">
                        5 микс ролов / 40 шт
                    </p>

                    <div className="flex gap-2 items-center sm:mt-4 sm:gap-1 mt-auto">
                        <span className="text-[#21201F] text-[22px] font-medium sm:text-[16px]">
                            {floatprice.split(".")[0]}₽
                        </span>

                        {false && (
                            <span className="text-[#A5A5A5] text-[15px] line-through sm:text-[12px]">
                                1045₽
                            </span>
                        )}
                    </div>
                </div>

                {count > 0 ? (
                    <div className="flex justify-between items-center border border-[#F2F2F2] p-1 rounded-2xl">
                        <button
                            className="w-10 h-10 rounded-[13px] bg-[#FFCD36] flex justify-center items-center"
                            onClick={(e) => {
                                e.stopPropagation();
                                dispatch(deleteCard(item));
                            }}
                        >
                            <svg className="h-7 w-7 fill-none" aria-hidden="true">
                                <use xlinkHref="/sprites/sprite.svg#-"></use>
                            </svg>
                        </button>

                        <span className="text-[#21201F] text-[22px] font-medium">{count}</span>

                        <button
                            className="w-10 h-10 rounded-[13px] bg-[#FFCD36] flex justify-center items-center"
                            onClick={(e) => {
                                e.stopPropagation();
                                dispatch(addCard(item));
                            }}
                        >
                            <svg className="h-7 w-7 fill-none" aria-hidden="true">
                                <use xlinkHref="/sprites/sprite.svg#+"></use>
                            </svg>
                        </button>
                    </div>
                ) : (
                    <button
                        className="h-[50px] w-full rounded-2xl bg-[#F2F2F2] text-[#21201F] text-[16px] font-medium sm:h-10 sm:text-[14px] flex items-center justify-center gap-[6px]"
                        onClick={(e) => {
                            e.stopPropagation();
                            dispatch(addCard(item));
                        }}
                    >
                        <svg className="h-7 w-7 fill-none" aria-hidden="true">
                            <use xlinkHref="/sprites/sprite.svg#+"></use>
                        </svg>
                        Добавить
                    </button>
                )}
            </div>

            {active && <CardModal active={active} setActive={setActive} item={item} />}
        </>
    );
};

export default Card;
