const Cart = () => {
    return (
        <div className="bg-white pt-6 px-6 pb-2 rounded-2xl flex flex-col gap-[232px] sticky top-0">
            <h2 className="text-[#21201F] text-[26px] font-medium mb-[13px]">Корзина</h2>

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
    );
};

export default Cart;
