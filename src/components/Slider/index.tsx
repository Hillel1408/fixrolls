import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "hook";
import { setActiveModal } from "store";
import { PromotionModal } from "components";

const Slider = () => {
    const dispatch = useAppDispatch();
    const activeModal = useAppSelector((state) => state.modals.activeModal);

    const [loaded, setLoaded] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = ["slide-1.jpg", "slide-2.jpg", "slide-3.jpg", "slide-4.jpg"];

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
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
            <div className="px-[10px] py-2 bg-white rounded-[30px] sm:rounded-none sm:mb-0">
                <div ref={sliderRef} className="keen-slider max-w-[1126px] rounded-[30px]">
                    {images.map((item, index) => (
                        <div
                            key={index}
                            className="keen-slider__slide !min-w-[285px] sm:!min-w-[207px] cursor-pointer"
                            onClick={() => {
                                dispatch(setActiveModal("promotion"));
                            }}
                        >
                            <img
                                className="h-[285px] object-cover w-full rounded-[20px] sm:h-[207px]"
                                src={`/images/${item}`}
                                alt=""
                            />
                        </div>
                    ))}
                </div>
            </div>

            {activeModal === "promotion" && <PromotionModal />}
        </>
    );
};

export default Slider;
