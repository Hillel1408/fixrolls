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
        <div className="bg-white pt-6 px-2 pb-2 rounded-2xl sticky top-0">
            <h2 className="text-[#21201F] text-[22px] font-medium px-[16px] mb-[13px]">Меню</h2>

            <ul className="text-[16px] text-[#21201F]">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <Link
                            to="#"
                            className="px-[18px] py-[14px] block duration-200 hover:bg-[#F2F2F2] rounded-2xl"
                        >
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
