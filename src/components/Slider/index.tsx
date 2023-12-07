import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import { PromotionModal } from "components";
import { setActiveModal, setItempPomotionModal } from "store";
import { useAppSelector, useAppDispatch } from "hook";
import data from "data/data.json";
import classNames from "classnames";
import "keen-slider/keen-slider.min.css";

const Slider = () => {
    const dispatch = useAppDispatch();

    const [loaded, setLoaded] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const orders = useAppSelector((state) => state.orders);

    const items = data.find(
        (item) => item.restaurantID === orders.city.restaurantID,
    )?.special_offers;

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        slides: {
            spacing: 11,
            perView: 3.4,
        },
        breakpoints: {
            "(max-width: 480px)": {
                slides: {
                    spacing: 11,
                    perView: 1.6,
                },
            },
        },
        created() {
            setLoaded(true);
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
    });

    useEffect(() => {
        console.log();
    }, []);

    return (
        <>
            {items && items.length > 0 && (
                <div>
                    <div className="px-[10px] py-2 bg-white relative rounded-[30px] mb-[50px] sm:rounded-b-none sm:rounded-t-none sm:mb-0">
                        <div ref={sliderRef} className="keen-slider max-w-[1126px] rounded-[30px]">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="keen-slider__slide sm:!max-h-[207px] cursor-pointer"
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
                        <div className="px-[7px] py-[19px] bg-white rounded-[5px] flex flex-col gap-5 absolute right-[7px] top-1/2 -translate-y-1/2">
                            {loaded &&
                                new Array(
                                    instanceRef.current?.slides?.length &&
                                        instanceRef.current?.slides?.length - 2,
                                )
                                    .fill("")
                                    .map((item, index) => (
                                        <button
                                            onClick={() => {
                                                instanceRef.current?.moveToIdx(index);
                                            }}
                                            className={classNames(
                                                "w-[5px] h-[5px] rounded-full",
                                                currentSlide === index
                                                    ? "bg-[#21201F]"
                                                    : "bg-[#C3C3C5]",
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
