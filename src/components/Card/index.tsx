const Card = () => {
    return (
        <div className="px-2 pt-[6px] pb-[15px] bg-white rounded-[21px] flex flex-col">
            <img className="h-[195px] object-cover w-full" src="/images/img-2.jpg" alt="" />

            <div className="px-4 flex-auto">
                <h3 className="text-[#21201F] text-[18px] font-medium">SET Горячий</h3>
                <p className="text-[#797979] text-[12px] font-medium">5 микс ролов / 40 шт</p>
                <div className="flex gap-2 items-center mt-6">
                    <span className="text-[#21201F] text-[22px] font-medium">599₽</span>
                    <span className="text-[#A5A5A5] text-[15px] line-through">1045₽</span>
                </div>
            </div>

            <button className="h-12 w-full rounded-2xl bg-[#F2F2F2] text-[#21201F] text-[16px] font-medium mt-[10px]">
                Добавить
            </button>
        </div>
    );
};

export default Card;
