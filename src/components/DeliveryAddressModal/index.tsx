import { createPortal } from "react-dom";
import { LayoutModal, Button } from "components";

const DeliveryAddressModal = () => {
    const activeLoginModal = true;

    activeLoginModal && document.body.classList.add("lock");

    return createPortal(
        <LayoutModal
            className="px-[22px] pt-[26px] pb-[22px] w-[817px]"
            closeModal={() => {}}
            active={activeLoginModal}
        >
            <>
                <div className="flex items-center pr-[110px] justify-between mb-[78px]">
                    <div>
                        <h3 className="text-[36px] font-medium leading-[111%] text-[#000] mb-[5px]">
                            Адрес доставки
                        </h3>
                        <p className="text-[15px] text-[#000]">Чтобы курьер смог вас найти</p>
                    </div>

                    <ul className="flex px-[10px] py-2 bg-[#F6F5F3] rounded-2xl gap-[10px] text-[#21201F] text-[16px]">
                        <li className="py-[10px] px-[27px] bg-white rounded-[13px]">Доставка</li>
                        <li className="py-[10px] px-[27px] rounded-[13px]">Навынос</li>
                    </ul>
                </div>

                <div className="grid grid-cols-[1fr_274px] gap-[11px]">
                    <div className="relative flex items-center">
                        <svg className="w-4 h-4 absolute left-[18px]" aria-hidden="true">
                            <use xlinkHref="/sprites/sprite.svg#location"></use>
                        </svg>

                        <input
                            type="text"
                            className="h-14 bg-[#F9F7F7] rounded-[13px] w-full px-12 text-[#000] text-[16px]"
                        />

                        <button className="absolute right-[18px]">
                            <svg className="w-[14px] h-[14px]" aria-hidden="true">
                                <use xlinkHref="/sprites/sprite.svg#close"></use>
                            </svg>
                        </button>
                    </div>

                    <Button text="Выбрать адрес" className="h-[56px]" />
                </div>

                <div className="mt-[13px]">
                    <img className="w-full h-[350px] object-cover" src="/images/map.jpg" alt="" />
                </div>
            </>
        </LayoutModal>,
        document.getElementById("portal") as HTMLElement,
    );
};

export default DeliveryAddressModal;
