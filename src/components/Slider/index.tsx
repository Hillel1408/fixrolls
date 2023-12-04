import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { PromotionModal } from "components";
import { useAppSelector } from "hook";
import data from "data/data.json";

const Slider = () => {
    const [active, setActive] = useState(false);
    const [activeItem, setActiveItem] = useState({ title: "", description: "", fullImage: "" });

    const [loaded, setLoaded] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const orders = useAppSelector((state) => state.orders);

    const items = data.find(
        (item) => item.restaurantID === orders.city.restaurantID,
    )?.special_offers;

    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        mode: "free",

        slides: {
            spacing: 8,
            perView: "auto",
        },

        breakpoints: {},

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
                    <div className="px-[10px] py-2 bg-white rounded-[30px] mb-[50px] sm:rounded-b-[15px] sm:rounded-t-none sm:pt-5 -mt-3 sm:mb-0">
                        <div ref={sliderRef} className="keen-slider max-w-[1126px] rounded-[30px]">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="keen-slider__slide !min-w-[285px] max-w-[285px] sm:!min-w-[207px] cursor-pointer"
                                    onClick={() => {
                                        setActive(true);
                                        setActiveItem(item);
                                    }}
                                >
                                    <img
                                        className="h-[285px] object-cover w-full rounded-[20px] sm:h-[207px]"
                                        src={`/images/${item.image}`}
                                        alt=""
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {active && (
                        <PromotionModal active={active} setActive={setActive} item={activeItem} />
                    )}
                </div>
            )}
        </>
    );
};

export default Slider;
