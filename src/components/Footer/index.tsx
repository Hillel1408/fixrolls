import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "hook";
import { setActiveModal } from "store";
import { Link, useLocation, useNavigate } from "react-router-dom";
import data from "data/data.json";
import { cityIn } from "lvovich";
import { ROUTES } from "constants/";

const Footer = () => {
    const dispatch = useAppDispatch();

    const location = useLocation();

    const navigate = useNavigate();

    const orders = useAppSelector((state) => state.orders);
    const item = data.find((item) => item.restaurantID === orders.city.restaurantID);

    const navLinks = [
        [
            { text: "Пользовательское соглашение об условиях доставки", link: "/" },
            { text: "Состав и калорийность", link: "/" },
            { text: "Политика конфиденциальности", link: "/" },
        ],
        [
            { text: "Правила бонусной системы", link: "/" },
            { text: "Франшиза", link: "/" },
            { text: "Контакты", link: "/" },
        ],
    ];

    const socialItems = [
        { icon: "telegram", href: `${item?.social_links.Telegram}` },
        { icon: "vk", href: `${item?.social_links.VKontakte}` },
    ];

    return (
        <footer className="bg-[#F2F2F2]">
            <div
                className={classNames(
                    "container grid grid-cols-[232px_1fr_334px] gap-[26px]",
                    location.pathname === "/order"
                        ? "xl:grid-cols-[1fr]"
                        : "xl:grid-cols-[232px_1fr] lg:grid-cols-[1fr]",
                )}
            >
                <div className="sm:hidden"></div>

                <div className="w-full gap-5 mx-auto px-[10px] pt-[34px] pb-[121px] grid grid-cols-[641px_255px] justify-between 2xl:grid-cols-[1fr_255px] 2xl:gap-10 md:grid-cols-[1fr] sm:pb-[24px] sm:px-0">
                    <div>
                        <div className="flex gap-[26px] items-center mb-10">
                            <img
                                className="cursor-pointer"
                                src="/images/logo-2.png"
                                alt=""
                                onClick={() => {
                                    navigate(ROUTES.HOME);
                                }}
                            />

                            <p className="text-[#21201F] text-[16px] font-medium max-w-[202px]">
                                Доставка роллов и суши в {cityIn(`${item?.region}`)}
                            </p>
                        </div>

                        <div className="flex justify-between mb-11 text-[rgba(33,32,31,0.82)] text-[16px] font-medium gap-5 sm:flex-col sm:mb-0">
                            {navLinks.map((ul, index) => (
                                <ul key={index} className="max-w-[290px] flex flex-col gap-[14px]">
                                    {ul.map((li, index) => (
                                        <li
                                            key={index}
                                            onClick={(e) => {
                                                dispatch(setActiveModal("404"));
                                            }}
                                        >
                                            <Link to={li.link}>{li.text}</Link>
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </div>

                        <div className="sm:hidden">
                            <p className="text-[#21201F] text-[16px] font-medium mb-14">
                                FixRolls - это ресторан доставки роллов и суши с нестандартным
                                подходом к своему делу. Мы предлагаем нереальные скидки и любим
                                дарить подарки.
                            </p>

                            <p className="text-[#21201F] text-[16px] font-medium">
                                © 2023 Все права защищены
                            </p>
                        </div>
                    </div>

                    <div>
                        <button className="text-[#21201F] text-[16px] border-b border-[#21201F] mb-11">
                            Зоны доставки
                        </button>

                        <div className="flex flex-col gap-6 mb-[82px] sm:mb-[54px]">
                            <div className="flex flex-col">
                                <span className="text-[#969696] text-[24px] font-medium">
                                    Заказать
                                </span>
                                <Link
                                    className="text-[#21201F] text-[26px] font-semibold"
                                    to="tel:+7(800)777-98-65"
                                >
                                    +7 (800) 777-98-65
                                </Link>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-[#969696] text-[24px] font-medium">
                                    Для отзывов
                                </span>
                                <Link
                                    className="text-[#21201F] text-[26px] font-semibold"
                                    to="mailto:reviews@rollsfix.ru"
                                >
                                    reviews@rollsfix.ru
                                </Link>
                            </div>
                        </div>

                        <ul className="flex gap-2">
                            {socialItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.href}
                                        className="w-[66px] h-[66px] bg-white flex justify-center items-center rounded-[20px]"
                                    >
                                        <svg className="w-5 h-5" aria-hidden="true">
                                            <use
                                                xlinkHref={`/sprites/sprite.svg#${item.icon}`}
                                            ></use>
                                        </svg>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="hidden sm:block">
                        <p className="text-[#21201F] text-[16px] font-medium mb-14">
                            FixRolls - это ресторан доставки роллов и суши с нестандартным подходом
                            к своему делу. Мы предлагаем нереальные скидки и любим дарить подарки.
                        </p>

                        <p className="text-[#21201F] text-[16px] font-medium">
                            © 2023 Все права защищены
                        </p>
                    </div>
                </div>

                <div className="xl:hidden"></div>
            </div>
        </footer>
    );
};

export default Footer;
