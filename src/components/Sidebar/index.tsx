import { Link } from "react-router-dom";

const Sidebar = () => {
    const navItems = [
        "Комбо",
        "Сеты по 599₽",
        "Сеты по 799₽",
        "Сеты по 999₽",
        "Сеты по 1099₽",
        "Роллы по 99₽",
        "Роллы по 149₽",
        "Роллы по 199₽",
        "Роллы по 299₽",
        "Пицца по 329₽",
        "Соусы и специи",
    ];

    return (
        <div className="pt-[100px] sticky top-0">
            <div className="bg-white pt-6 px-2 pb-2 rounded-2xl sm:px-0 sm:pb-16px sm:pt-2 sm:rounded-b-[15px] sm:rounded-t-none">
                <h2 className="text-[#21201F] text-[22px] font-medium px-[16px] mb-[13px] sm:hidden">
                    Меню
                </h2>

                <ul className="text-[16px] text-[#21201F] sm:flex sm:overflow-auto sm:whitespace-nowrap sm:text-[14px]">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                to="#"
                                className="px-[18px] py-[14px] block duration-200 hover:bg-[#F2F2F2] rounded-2xl sm:py-[9px] sm:px-4"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
