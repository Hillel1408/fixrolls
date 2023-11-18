import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#F2F2F2]">
      <div className="container grid grid-cols-[232px_1fr_334px] gap-[26px]">
        <div></div>

        <div className="w-full gap-5 mx-auto px-[10px] pt-[34px] pb-[121px] grid grid-cols-[641px_255px] justify-between ">
          <div>
            <div className="flex gap-[26px] items-center mb-10">
              <img src="/images/logo-2.png" alt="" />

              <p className="text-[#21201F] text-[16px] font-medium max-w-[202px]">
                Доставка роллов и суши в Нижнем Новгороде
              </p>
            </div>

            <div className="flex justify-between mb-11 text-[rgba(33,32,31,0.82)] text-[16px] font-medium">
              <ul className="max-w-[290px] flex flex-col gap-[14px]">
                <li>
                  <Link to="/">
                    Пользовательское соглашение об условиях доставки
                  </Link>
                </li>
                <li>
                  <Link to="/">Состав и калорийность</Link>
                </li>
                <li>
                  <Link to="/">Политика конфиденциальности</Link>
                </li>
              </ul>

              <ul className="max-w-[290px] flex flex-col gap-[14px]">
                <li>
                  <Link to="/">Правила бонусной системы</Link>
                </li>
                <li>
                  <Link to="/">Франшиза</Link>
                </li>
                <li>
                  <Link to="/">Контакты</Link>
                </li>
              </ul>
            </div>

            <p className="text-[#21201F] text-[16px] font-medium mb-14">
              FixRolls - это ресторан доставки роллов и суши с нестандартным
              подходом к своему делу. Мы предлагаем нереальные скидки и любим
              дарить подарки.
            </p>

            <p className="text-[#21201F] text-[16px] font-medium">
              © 2023 Все права защищены
            </p>
          </div>

          <div>
            <button className="text-[#21201F] text-[16px] border-b border-[#21201F] mb-11">
              Зоны доставки
            </button>

            <div className="flex flex-col gap-6 mb-[82px]">
              <div className="flex flex-col">
                <span className="text-[#969696] text-[24px] font-medium">
                  Заказать
                </span>
                <Link
                  className="text-[#21201F] text-[26px] font-semibold"
                  to="tel:+7(800)777-98-65"
                >
                  +7 (800) 777-98-65
                </Link>
              </div>

              <div className="flex flex-col">
                <span className="text-[#969696] text-[24px] font-medium">
                  Для отзывов
                </span>
                <Link
                  className="text-[#21201F] text-[26px] font-semibold"
                  to="mailto:reviews@rollsfix.ru"
                >
                  reviews@rollsfix.ru
                </Link>
              </div>
            </div>

            <ul className="flex gap-2">
              <li>
                <Link
                  to="#"
                  className="w-[66px] h-[66px] bg-white flex justify-center items-center rounded-[20px]"
                >
                  <svg className="w-5 h-5" aria-hidden="true">
                    <use xlinkHref="/sprites/sprite.svg#telegram"></use>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="w-[66px] h-[66px] bg-white flex justify-center items-center rounded-[20px]"
                >
                  <svg className="w-5 h-5" aria-hidden="true">
                    <use xlinkHref="/sprites/sprite.svg#vk"></use>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
