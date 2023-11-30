import { createPortal } from "react-dom";
import { LayoutModal, Button } from "components";

const PromotionModal = ({
    active,
    setActive,
}: {
    active: boolean;
    setActive: (a: boolean) => void;
}) => {
    active && document.body.classList.add("lock");

    return createPortal(
        <LayoutModal
            className="w-[362px] sm:w-full h-[772px]"
            closeModal={() => {
                setActive(false);
            }}
            active={active}
        >
            <div className="relative">
                <img className="h-[237px] object-cover w-full" src="/images/img-4.jpg" alt="" />

                <div className="pt-7 px-5 h-[535px] overflow-y-auto pb-[100px]">
                    <h2 className="text-[#000] text-[32px] font-medium mb-7">
                        ВНИМАНИЕ! Акция Комбо-Бомба взорвёт ваш вкус!
                    </h2>

                    <div className="flex flex-col gap-3">
                        <p>
                            Только сейчас! Невероятное предложение от нашей доставки суши -
                            "Комбо-Бомба"!
                        </p>
                        <p>
                            "Комбо-Бомба" - это особенное сочетание лучших роллов, сякэ, нигири и
                            гунканов, созданных нашими мастерами суши. Погрузитесь в волшебство
                            вкуса и удовольствия!
                        </p>
                        <p>
                            Мы доставим эту кулинарную изысканность прямо к вашей двери по
                            невероятно выгодной цене!
                        </p>
                        <p>
                            Закажите "Комбо-Бомбу" сейчас и получите: Эксклюзивное сочетание самых
                            свежих ингредиентов; Бесплатную и быструю доставку прямо к вам домой;
                            Неописуемое удовольствие от каждого укуса!
                        </p>
                        <p>
                            Не упустите возможность попробовать это уникальное сочетание вкусов!
                            Акция ограничена по времени, сделайте заказ "Комбо-Бомбы" прямо сейчас и
                            наслаждайтесь вкусом восточных изысков!
                        </p>
                    </div>
                </div>

                <div className="px-5 py-3 bg-[#F9F7F7] rounded-t-2xl absolute bottom-0 left-0 right-0">
                    <Button
                        text="Понятно"
                        className="h-[56px] w-full"
                        clickHandler={() => {
                            setActive(false);
                        }}
                    />
                </div>
            </div>
        </LayoutModal>,
        document.getElementById("portal") as HTMLElement,
    );
};

export default PromotionModal;
