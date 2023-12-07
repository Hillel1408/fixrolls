import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { PromotionModal } from "components";
import { setActiveModal, setItempPomotionModal } from "store";
import { useAppSelector, useAppDispatch } from "hook";
import data from "data/data.json";

const Slider = () => {
    const dispatch = useAppDispatch();

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
                    <div className="px-[10px] py-2 bg-white rounded-[30px] mb-[50px] sm:rounded-b-none sm:rounded-t-none sm:mb-0">
                        <div ref={sliderRef} className="keen-slider max-w-[1126px] rounded-[30px]">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="keen-slider__slide !min-w-[285px] max-w-[285px] sm:!min-w-[207px] cursor-pointer"
                                    onClick={() => {
                                        dispatch(setItempPomotionModal(item));
                                        dispatch(setActiveModal("promotion"));
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

                    <PromotionModal />
                </div>
            )}
        </>
    );
};

export default Slider;
