import { Button } from "components";

const Total = () => {
    return (
        <div className="bg-white py-[35px] px-[30px] rounded-[32px] flex flex-col gap-6 sticky top-0 sm:px-3 sm:pt-0 sm:pb-6">
            <div>
                <h2 className="text-[#000] text-[26px] font-medium mb-5">Итого</h2>

                <div className="flex flex-col gap-2 text-[#000] text-[20px]">
                    <div className="flex justify-between">
                        <span>Стоимость товаров</span>
                        <span>2559 ₽</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Доставка</span>
                        <span>200 ₽</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-[#21201F] text-[20px] font-medium flex gap-[10px]">
                    <input type="checkbox" />
                    Промокод
                </label>
                <label className="text-[#21201F] text-[20px] font-medium flex gap-[10px]">
                    <input type="checkbox" />
                    Списать бонусы
                </label>
            </div>

            <div className="flex justify-between items-center">
                <Button text="Оплатить" className="h-[48px]" />

                <span className="text-[#000] text-[26px] font-medium">2759 ₽</span>
            </div>
        </div>
    );
};

export default Total;
