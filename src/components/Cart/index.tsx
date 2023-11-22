import { DeliveryTotalModal, Button } from "components";
import { useMatchMedia } from "hooks";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "constants/";
import { useAppDispatch } from "hook";
import { setActiveDeliveryTotalModal, setActiveCartModal } from "store";

const Cart = () => {
    const { isMobile, isTablet, isDesktop } = useMatchMedia();

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    return (
        <>
            <div className="bg-white pt-6 px-6 pb-2 rounded-2xl flex flex-col gap-[232px] sticky top-0 xl:p-0">
                <h2 className="text-[#21201F] text-[26px] font-medium mb-[13px]">Корзина</h2>

                <div>
                    <img className="mx-auto" src="/images/img-1.png" alt="" />
                    <p className="text-[#21201F] opacity-50 text-center mt-3">
                        Собери заказ сейчас, а мы всё быстро привезём
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <p className="text-[#21201F] text-[14px] font-medium">
                        Доставка работает: с 11:00 до 22:30
                    </p>

                    <Button
                        text="Продолжить"
                        className="h-[56px] w-full"
                        clickHandler={() => {
                            document.body.classList.remove("lock");
                            if (isTablet || isDesktop) navigate(ROUTES.ORDER);
                            else {
                                if (isMobile) {
                                    dispatch(setActiveCartModal(false));
                                    dispatch(setActiveDeliveryTotalModal(true));
                                }
                            }
                        }}
                    />
                </div>
            </div>

            {isMobile && <DeliveryTotalModal />}
        </>
    );
};

export default Cart;
