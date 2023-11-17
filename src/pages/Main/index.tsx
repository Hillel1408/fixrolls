import classNames from "classnames";
import { Link } from "react-router-dom";

const Main = () => {
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

  return (
    <div className="container">
      <div className="grid grid-cols-[232px_1fr_334px] pt-4 rounded-2xl items-start">
        <div className="bg-white pt-6 px-2 pb-2 rounded-2xl">
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

        <div></div>

        <div className="bg-white pt-6 px-6 pb-2 rounded-2xl flex flex-col gap-[232px]">
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
