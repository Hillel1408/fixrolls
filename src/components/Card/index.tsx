import { useAppDispatch } from "hook";
import { setActiveCardModal } from "store";

const Card = ({ item }: { item: any }) => {
    const { name, image, floatprice } = item;

    const dispatch = useAppDispatch();

    return (
        <div className="px-2 pt-[6px] pb-[15px] bg-white rounded-[21px] flex flex-col sm:p-[6px]">
            <img className="h-[195px] object-cover w-full sm:h-[144px]" src={image} alt="" />

            <div className="px-4 flex-auto sm:px-[6px]">
                <h3 className="text-[#21201F] text-[18px] font-medium sm:text-[14px]">{name}</h3>
                <p className="text-[#797979] text-[12px] font-medium">5 микс ролов / 40 шт</p>
                <div className="flex gap-2 items-center mt-6 sm:mt-4 sm:gap-1">
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

            <button
                className="h-12 w-full rounded-2xl bg-[#F2F2F2] text-[#21201F] text-[16px] font-medium mt-[10px] sm:h-10 sm:text-[14px] flex items-center justify-center gap-[6px]"
                onClick={() => {
                    dispatch(setActiveCardModal(true));
                }}
            >
                <svg className="h-[22px] w-[22px] fill-none" aria-hidden="true">
                    <use xlinkHref="/sprites/sprite.svg#+"></use>
                </svg>
                Добавить
            </button>
        </div>
    );
};

export default Card;
