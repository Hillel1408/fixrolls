import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { PromotionModal } from "components";
import { setActiveModal, setItempPomotionModal } from "store";
import { useAppSelector, useAppDispatch } from "hook";
import { useMatchMedia } from "hooks";
import data from "data/data.json";
import classNames from "classnames";
import "keen-slider/keen-slider.min.css";

const Slider = () => {
    const dispatch = useAppDispatch();

    const [loaded, setLoaded] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const orders = useAppSelector((state) => state.orders);

    const { isMobile, isTablet, isDesktop } = useMatchMedia();

    const items = data.find((item) => item.restaurantID === orders.city.restaurantID)?.special_offers;

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: {
            spacing: 11,
            perView: "auto",
        },
        created() {
            setLoaded(true);
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
    });

    return (
        <>
            {items && items.length > 0 && (
                <div>
                    <div className="px-[10px] py-2 bg-white relative rounded-[30px] mb-[50px] lg:rounded-b-none lg:-mx-[10px] md:rounded-t-none lg:mb-0 sm:mx-0">
                        <div ref={sliderRef} className="keen-slider max-w-[1126px] rounded-[30px] sm:rounded-[20px]">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="keen-slider__slide lg:max-h-[207px] min-w-[285px] cursor-pointer lg:min-w-[207px]"
                                    onClick={() => {
                                        dispatch(setItempPomotionModal(item));
                                        dispatch(setActiveModal("promotion"));
                                    }}
                                >
                                    <img className="h-[285px] object-cover w-full rounded-[20px] lg:h-[207px]" src={item.image_link} alt="" />
                                </div>
                            ))}
                        </div>
                        <div className="px-[7px] py-[19px] bg-white rounded-[5px] flex flex-col gap-5 absolute right-[7px] top-1/2 -translate-y-1/2">
                            {loaded &&
                                new Array(instanceRef.current?.slides?.length).fill("").map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            instanceRef.current?.moveToIdx(index);
                                        }}
                                        className={classNames(
                                            "w-[5px] h-[5px] rounded-full",
                                            currentSlide === index ? "bg-[#21201F]" : "bg-[#C3C3C5]",
                                        )}
                                    ></button>
                                ))}
                        </div>
                    </div>

                    <PromotionModal />
                </div>
            )}
        </>
    );
};

export default Slider;
