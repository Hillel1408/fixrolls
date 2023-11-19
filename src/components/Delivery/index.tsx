const Delivery = () => {
    return (
        <div className="pt-[21px] pr-[35px] pb-[30px] pl-[18px] bg-white rounded-[32px] flex flex-col gap-[26px]">
            <ul className="flex gap-[14px]">
                <li className="h-12 px-[22px] rounded-2xl bg-[#F2F2F2] flex items-center gap-2">
                    <span className="text-[#21201F] text-[20px] font-medium">Доставка </span>
                    <span className="text-[#767676] text-[16px]">≈ 60 мин</span>
                </li>

                <li className="h-12 px-[22px] rounded-2xl flex items-center gap-[10px]">
                    <span className="text-[#21201F] text-[20px] font-medium">С собой</span>
                    <span className="px-1 py-[10px] rounded-[11px] bg-[#6f6e6d] text-white">
                        15%
                    </span>
                </li>
            </ul>

            <div>
                <button className="text-[#000] text-[20px] font-medium mb-4 flex gap-2">
                    <svg className="w-[29px] h-[22px]" aria-hidden="true">
                        <use xlinkHref="/sprites/sprite.svg#home"></use>
                    </svg>
                    Москва, Ленинский проспект, 39/1
                    <svg className="w-6 h-6" aria-hidden="true">
                        <use xlinkHref="/sprites/sprite.svg#arrow"></use>
                    </svg>
                </button>

                <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-3 mb-[13px]">
                    <input
                        type="text"
                        className="h-12 px-[17px] rounded-[16px] border border-[#D2D0CC] placeholder:text-[#9E9B98] placeholder:text-[16px] w-full"
                        placeholder="Кв./Офис"
                    />
                    <input
                        type="text"
                        className="h-12 px-[17px] rounded-[16px] border border-[#D2D0CC] placeholder:text-[#9E9B98] placeholder:text-[16px] w-full"
                        placeholder="Домофон"
                    />
                    <input
                        type="text"
                        className="h-12 px-[17px] rounded-[16px] border border-[#D2D0CC] placeholder:text-[#9E9B98] placeholder:text-[16px] w-full"
                        placeholder="Подъезд"
                    />
                    <input
                        type="text"
                        className="h-12 px-[17px] rounded-[16px] border border-[#D2D0CC] placeholder:text-[#9E9B98] placeholder:text-[16px] w-full"
                        placeholder="Этаж"
                    />
                </div>

                <input
                    type="text"
                    className="h-12 px-[17px] rounded-[16px] border border-[#D2D0CC] placeholder:text-[#9E9B98] placeholder:text-[16px] w-full"
                    placeholder="Комментарий курьеру"
                />
            </div>

            <div>
                <h3 className="text-[#000] text-[20px] font-medium mb-2">Время доставки</h3>

                <button className="flex items-center gap-2 text-[16px] text-[#000]">
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
