import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

const Slider = () => {
    const [loaded, setLoaded] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        mode: "free",

        slides: {
            spacing: 8,
            perView: 3.7,
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
        <div className="mb-[37px] px-[10px] py-2 bg-white rounded-[30px]">
            <div ref={sliderRef} className="keen-slider max-w-[1126px] rounded-[30px]">
                {new Array(8).fill("").map((item, index) => (
                    <div className="keen-slider__slide">
                        <img
                            className="h-[285px] object-cover w-full rounded-[20px]"
                            src="/images/slide-1.jpg"
                            alt=""
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
