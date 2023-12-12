import { createPortal } from "react-dom";
import { LayoutModal, Button } from "components";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "hook";
import { setActiveModal } from "store";
import { ROUTES } from "constants/";
import data from "data/data.json";

const MobileMenuModal = () => {
    const orders = useAppSelector((state) => state.orders);
    const item = data.find((item) => item.restaurantID === orders.city.restaurantID);
    const activeModal = useAppSelector((state) => state.modals.activeModal);

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    activeModal === "mobile-menu" && document.body.classList.add("lock");

    const navItems = [
        { text: "Зона доставки", href: "/" },
        { text: "Акции", href: "/" },
        { text: "Доставка и оплата", href: "/" },
        { text: "Работа в FixRolls", href: "/" },
        { text: "О нас", href: "/" },
    ];

    const socialItems = [
        { icon: "telegram-2", href: `${item?.social_links.Telegram}` },
        { icon: "vk-2", href: `${item?.social_links.VKontakte}` },
    ];

    return createPortal(
        <LayoutModal
            className="sm:w-full "
            closeModal={() => {
                dispatch(setActiveModal(""));
            }}
            active={activeModal === "mobile-menu"}
        >
            <>
                <div className="p-[18px] bg-[#F9F7F7]">
                    <img
                        className="w-[123px] cursor-pointer"
                        src="/images/logo-2.png"
                        alt=""
                        onClick={() => {
                            navigate(ROUTES.HOME);
                        }}
                    />
                </div>

                <div className="p-[18px] flex flex-col gap-[56px]">
                    <div>
                        <div className="text-[#21201F] text-[22px] font-medium">
                            Ваш город:{" "}
                            <span className="py-1 px-[10px] bg-[#F9F7F7] rounded-[8px] inline-flex items-center gap-1">
                                {item?.region}
                                <svg className="w-5 h-5 -rotate-90" aria-hidden="true">
                                    <use xlinkHref="/sprites/sprite.svg#arrow"></use>
                                </svg>
                            </span>
                        </div>

                        <p className="text-[#21201F] text-[14px]">
                            Доставка работает {item?.working_hours}
                        </p>

                        <Button text="Войти" className="w-full h-[48px] mt-4" />
                    </div>

                    <ul className="text-[#21201F] text-[22px] font-medium flex flex-col gap-2">
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                onClick={(e) => {
                                    item.text !== "Зона доставки"
                                        ? dispatch(setActiveModal("404"))
                                        : dispatch(setActiveModal("delivery"));
                                }}
                            >
                                <Link to={item.href}>{item.text}</Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center justify-between">
                        <p className="text-[#21201F] text-[16px] font-medium">
                            Мы в соцсетях!
                            <br />
                            Подписывайтесь
                        </p>

                        <ul className="flex gap-[6px]">
                            {socialItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.href}
                                        className="w-[47px] h-[47px] bg-[#21201F] flex justify-center items-center rounded-[14px]"
                                    >
                                        <svg className="w-5 h-5 fill-white" aria-hidden="true">
                                            <use
                                                xlinkHref={`/sprites/sprite.svg#${item.icon}`}
                                            ></use>
                                        </svg>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button className="text-[#21201F] text-[15px] py-3 px-5 border border-[#000] rounded-[18px] text-left">
                        Хотите стать партнером и открыть FixRolls в своем городе?
                    </button>

                    <div className="flex gap-[6px] items-center justify-center">
                        <svg className="w-[31px] h-[31px]" aria-hidden="true">
                            <use xlinkHref="/sprites/sprite.svg#phone"></use>
                        </svg>

                        <div className="flex flex-col">
                            <a
                                href="tel:+7(800)777-98-65"
                                className="text-[#21201F] text-[24px] font-medium"
                            >
                                +7 (800) 777-98-65
                            </a>
                            <span className="text-[#21201F] text-[14px]">Звонок бесплатный</span>
                        </div>
                    </div>
                </div>

                <div className="p-[18px] bg-[#F9F7F7]">
                    <Button text="Написать в чат" className="w-full h-[56px]" />
                </div>
            </>
        </LayoutModal>,
        document.getElementById("portal") as HTMLElement,
    );
};

export default MobileMenuModal;
