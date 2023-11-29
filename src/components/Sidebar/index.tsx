import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "hook";
import { useEffect } from "react";
import classNames from "classnames";

const Sidebar = ({ cards, refs }: { cards: any; refs: any }) => {
    const activeCharacter = useAppSelector((state) => state.modals.activeCharacter);

    return (
        <div className="pt-[100px] sticky top-0 sm:pt-0">
            <div className="bg-white pt-6 px-2 pb-2 rounded-2xl sm:px-0 sm:pb-16px sm:pt-2 sm:rounded-b-[15px] sm:rounded-t-none">
                <h2 className="text-[#21201F] text-[22px] font-medium px-[16px] mb-[13px] sm:hidden">
                    Меню
                </h2>

                <ul className="text-[16px] text-[#21201F] sm:flex sm:overflow-auto sm:whitespace-nowrap sm:text-[14px]">
                    {cards.map((item: any) => (
                        <li key={item.description.id}>
                            <span
                                className={classNames(
                                    "px-[18px] py-[14px] block duration-200 hover:bg-[#F2F2F2] rounded-2xl cursor-pointer sm:py-[9px] sm:px-4",
                                    activeCharacter === item.description.id && "bg-[#F2F2F2]",
                                )}
                                onClick={() => {
                                    refs[item.description.id].current.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                    });
                                }}
                            >
                                {item.description.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
