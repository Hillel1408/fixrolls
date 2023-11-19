const Header = () => {
    return (
        <header className="bg-[#F2F2F2]">
            <div className="container">
                <div className="bg-white rounded-b-[16px] grid grid-cols-[232px_1fr_334px] items-center gap-[26px]">
                    <div className="py-4 px-[30px]">
                        <img src="/images/logo.svg" alt="" />
                    </div>

                    <div className="grid grid-cols-[1fr_auto] gap-[54px] items-center">
                        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-[21px]">
                            <button className="flex items-center text-left">
                                <span className="text-[#21201F] text-[15px] font-medium max-w-[90px]">
                                    Нижний Новгород
                                </span>
                                <svg className="w-5 h-5" aria-hidden="true">
                                    <use xlinkHref="/sprites/sprite.svg#arrow"></use>
                                </svg>
                            </button>

                            <input
                                type="text"
                                placeholder="Нижний Новгород, пл. Минина, 1"
                                className="py-[13px] pl-[14px] pr-[6px] text-[#21201F] text-[16px] rounded-[14px] border-[2px] border-[#FC931C] placeholder:text-[16px] placeholder:text-[#21201F]"
                            />

                            <button className="text-[#21201F] text-[16px] border-b border-[#21201F]">
                                Зоны доставки
                            </button>
                        </div>

                        <a
                            href="tel:+7(800)777-98-65"
                            className="text-[#21201F] text-[20px] font-medium"
                        >
                            +7 (800) 777-98-65
                        </a>
                    </div>

                    <button className="text-[#21201F] text-[16px] font-medium flex bg-[#FFCD36] rounded-2xl h-[48px] mx-4 items-center justify-center gap-[10px]">
                        <svg className="w-5 h-5" aria-hidden="true">
                            <use xlinkHref="/sprites/sprite.svg#person"></use>
                        </svg>
                        Войти
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
