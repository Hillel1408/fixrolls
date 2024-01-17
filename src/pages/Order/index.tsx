import { Delivery, Total, Layout, OrderCart } from "components";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "constants/";

const Order = () => {
    window.scrollTo(0, 0);

    const navigate = useNavigate();

    return (
        <Layout>
            <div className="container grid grid-cols-[232px_1fr_334px] gap-[26px] pt-[100px] pb-[100px] xl:grid-cols-[1fr] lg:pb-[14px]">
                <div className="xl:hidden"></div>

                <div>
                    <div className="mb-8 flex items-center justify-between text-[#21201F] text-[16px] font-medium sm:flex-col sm:items-start sm:gap-4">
                        <h1 className="text-[#21201F] text-[30px] font-medium">Оформление заказа</h1>

                        <button
                            className="py-[13px] px-[21px] rounded-2xl border border-[#000] flex gap-[5px] items-center"
                            onClick={() => {
                                navigate(ROUTES.HOME);
                            }}
                        >
                            <svg className="w-6 h-6 rotate-90" aria-hidden="true">
                                <use xlinkHref="/sprites/sprite.svg#arrow"></use>
                            </svg>
                            Вернуться в меню
                        </button>
                    </div>

                    <div className="grid grid-cols-[1.14fr_1fr] gap-5 items-start 2xl:grid-cols-[1fr] xl:grid-cols-[1.14fr_1fr] lg:grid-cols-[1fr]">
                        <div>
                            <Delivery />

                            <OrderCart />
                        </div>

                        <Total />
                    </div>
                </div>

                <div className="xl:hidden"></div>
            </div>
        </Layout>
    );
};

export default Order;
