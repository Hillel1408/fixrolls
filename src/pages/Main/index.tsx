import classNames from "classnames";
import { Link } from "react-router-dom";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

const Main = () => {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const navItems = [
    "Комбо",
    "Сеты по 599₽",
    "Сеты по 799₽",
    "Сеты по 999₽",
    "Сеты по 1099₽",
    "Роллы по 99₽",
    "Роллы по 149₽",
    "Роллы по 199₽",
    "Роллы по 299₽",
    "Пицца по 329₽",
    "Соусы и специи",
  ];

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
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
    <div className="container">
      <div className="grid grid-cols-[232px_1fr_334px] pt-4 rounded-2xl items-start gap-[26px]">
        <div className="bg-white pt-6 px-2 pb-2 rounded-2xl sticky top-0">
          <h2 className="text-[#21201F] text-[22px] font-medium px-[16px] mb-[13px]">
            Меню
          </h2>

          <ul className="text-[16px] text-[#21201F]">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to="#"
                  className="px-[18px] py-[14px] block duration-200 hover:bg-[#F2F2F2] rounded-2xl"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden">
          <div className="mb-[37px] px-[10px] py-2 bg-white rounded-[30px]">
            <div
              ref={sliderRef}
              className="keen-slider max-w-[1126px] rounded-[30px]"
            >
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

          <div className="flex flex-col gap-[50px]">
            {new Array(4).fill("").map((item, index) => (
              <div key={index}>
                <h2 className="text-[#21201F] text-[30px] font-medium mb-4">
                  Сеты по 599₽
                </h2>
                <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-x-2 gap-y-4">
                  {new Array(7).fill("").map((item, index) => (
                    <div
                      key={index}
                      className="px-2 pt-[6px] pb-[15px] bg-white rounded-[21px] flex flex-col"
                    >
                      <img
                        className="h-[195px] object-cover w-full"
                        src="/images/img-2.jpg"
                        alt=""
                      />

                      <div className="px-4 flex-auto">
                        <h3 className="text-[#21201F] text-[18px] font-medium">
                          SET Горячий
                        </h3>
                        <p className="text-[#797979] text-[12px] font-medium">
                          5 микс ролов / 40 шт
                        </p>
                        <div className="flex gap-2 items-center mt-6">
                          <span className="text-[#21201F] text-[22px] font-medium">
                            599₽
                          </span>
                          <span className="text-[#A5A5A5] text-[15px] line-through">
                            1045₽
                          </span>
                        </div>
                      </div>

                      <button className="h-12 w-full rounded-2xl bg-[#F2F2F2] text-[#21201F] text-[16px] font-medium mt-[10px]">
                        Добавить
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white pt-6 px-6 pb-2 rounded-2xl flex flex-col gap-[232px] sticky top-0">
          <h2 className="text-[#21201F] text-[26px] font-medium mb-[13px]">
            Корзина
          </h2>

          <div>
            <img className="mx-auto" src="/images/img-1.png" alt="" />
            <p className="text-[#21201F] opacity-50 text-center mt-3">
              Собери заказ сейчас, а мы всё быстро привезём
            </p>
          </div>

          <p className="text-[#21201F] text-[14px] font-medium">
            Доставка работает: с 11:00 до 22:30
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
