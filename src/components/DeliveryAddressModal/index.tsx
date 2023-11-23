import { createPortal } from "react-dom";
import { LayoutModal, Button } from "components";
import { useAppSelector, useAppDispatch } from "hook";
import { setActiveDeliveryAddressModal } from "store";

const DeliveryAddressModal = () => {
    const activeDeliveryAddressModal = useAppSelector(
        (state) => state.modals.activeDeliveryAddressModal,
    );
    const dispatch = useAppDispatch();

    activeDeliveryAddressModal && document.body.classList.add("lock");

    return createPortal(
        <LayoutModal
            className="px-[22px] pt-[26px] pb-[22px] w-[817px] sm:p-0 sm:w-full"
            closeModal={() => {
                dispatch(setActiveDeliveryAddressModal(false));
            }}
            active={activeDeliveryAddressModal}
        >
            <>
                <div className="flex items-center pr-[110px] justify-between mb-[78px] sm:pr-0 sm:mb-0 sm:absolute sm:top-[78px] sm:left-1/2 sm:-translate-x-1/2">
                    <div className="sm:hidden">
                        <h3 className="text-[36px] font-medium leading-[111%] text-[#000] mb-[5px]">
                            Адрес доставки
                        </h3>
                        <p className="text-[15px] text-[#000]">Чтобы курьер смог вас найти</p>
                    </div>

                    <ul className="flex px-[10px] py-2 bg-[#F6F5F3] rounded-2xl gap-[10px] text-[#21201F] text-[16px] sm:border sm:border-[#000]">
                        <li className="py-[10px] px-[27px] bg-white rounded-[13px]">Доставка</li>
                        <li className="py-[10px] px-[27px] rounded-[13px]">Навынос</li>
                    </ul>
                </div>

                <div className="sm:flex sm:flex-col-reverse">
                    <div className="bg-white grid grid-cols-[1fr_274px] gap-[11px] sm:grid-cols-[1fr] sm:py-6 sm:px-[10px] sm:rounded-t-[16px] sm:-mt-4">
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

                        <Button text="Выбрать адрес" className="h-[56px] w-full" />
                    </div>

                    <div className="mt-[13px] sm:mt-0">
                        <img
                            className="w-full h-[350px] object-cover sm:h-[550px]"
                            src="/images/map.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </>
        </LayoutModal>,
        document.getElementById("portal") as HTMLElement,
    );
};

export default DeliveryAddressModal;
