import { useEffect, useState } from "react";
import { useAppSelector } from "hook";
import classNames from "classnames";
import { useMatchMedia } from "hooks";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Sidebar = ({ cards, refs }: { cards: any; refs: any }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const { isMobile } = useMatchMedia();

    const activeCharacter = useAppSelector((state) => state.orders.activeCharacter);

    const [sliderRef, instanceRef] = useKeenSlider<HTMLElement>({
        disabled: true,
        breakpoints: {
            "(max-width: 480px)": {
                disabled: false,
                slides: {
                    perView: "auto",
                },
            },
        },
    });

    useEffect(() => {
        currentSlide !== activeCharacter.index &&
            instanceRef.current?.moveToIdx(activeCharacter.index);
        setCurrentSlide((prev) => activeCharacter.index);
    }, [activeCharacter, currentSlide, instanceRef]);

    return (
        <div className="pt-[100px] sticky top-0 sm:pt-0 sm:shadow-[0px_3px_70px_-20px_rgba(34,60,80,0.2)] sm:top-[57px]">
            <div className="bg-white pt-6 px-2 pb-2 rounded-2xl sm:pb-16px sm:pt-2 sm:rounded-b-[15px] sm:rounded-t-none sm:px-[10px]">
                <h2 className="text-[#21201F] text-[22px] font-medium px-[16px] mb-[13px] sm:hidden">
                    Меню
                </h2>

                <ul
                    ref={sliderRef}
                    className="keen-slider text-[16px] text-[#21201F] sm:flex sm:overflow-auto sm:whitespace-nowrap sm:text-[14px]"
                >
                    {cards.map((item: any, index: number) => (
                        <li
                            className="keen-slider__slide !min-w-[fit-content]"
                            key={item.description.id}
                        >
                            <span
                                className={classNames(
                                    "px-[18px] py-[14px] block duration-200 rounded-2xl cursor-pointer sm:py-[9px] sm:px-4",
                                    !isMobile && "hover:bg-[#F2F2F2]",
                                    activeCharacter.id === item.description.id && "bg-[#F2F2F2]",
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
