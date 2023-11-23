import { createPortal } from "react-dom";
import { LayoutModal, Button } from "components";
import { useAppSelector, useAppDispatch } from "hook";
import { setActiveCardModal } from "store";

const CardModal = () => {
    const activeCardModal = useAppSelector((state) => state.modals.activeCardModal);
    const dispatch = useAppDispatch();

    activeCardModal && document.body.classList.add("lock");

    return createPortal(
        <LayoutModal
            className="p-[15px] w-[1000px] sm:p-0"
            closeModal={() => {
                dispatch(setActiveCardModal(false));
            }}
            active={activeCardModal}
        >
            <div className="grid grid-cols-[1fr_1fr] gap-[25px] sm:grid-cols-[1fr] sm:gap-0">
                <div className="bg-[#f2f2f2] rounded-[44px] sm:rounded-none">
                    <img
                        className="h-full object-cover w-full sm:h-[317px]"
                        src="/images/img-3.png"
                        alt=""
                    />
                </div>

                <div className="p-5">
                    <div className="py-[18px] flex flex-col gap-5 sm:py-0 sm:gap-4">
                        <div>
                            <h2 className="text-[36px] font-medium leading-[111%] sm:text-[32px]">
                                SET Радужный
                            </h2>
                            <p className="text-[12px] font-medium text-[#6C6C6C]">670 г / 56 шт</p>
                        </div>

                        <div>
                            <p className="text-[#21201F] text-[16px] font-medium mb-1 sm:text-[14px]">
                                Состав 7 микс роллов:
                            </p>
                            <ol className="list-decimal pl-5 text-[#21201F] text-[15px] sm:text-[14px]">
                                {new Array(7).fill("").map((item, index) => (
                                    <li>Ролл «Бонитомания» 8 шт.</li>
                                ))}
                            </ol>
                        </div>

                        <div>
                            <p className="text-[#6C6C6C] text-[12px] font-medium mb-[6px]">
                                Пищевая ценность на 670 г
                            </p>
                            <div className="grid grid-cols-[1fr_1fr_1fr_1fr]">
                                {new Array(4).fill("").map((item, index) => (
                                    <div className="text-[#21201F] flex flex-col gap-1 text-[12px] font-medium">
                                        <span>Белки</span>
                                        <span>53 г</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 py-[13px] border-t border-[#f2f2f2] flex justify-between text-[#21201F] items-center">
                        <p className="text-[15px]">SET Радужный</p>
                        <span className="text-[22px] font-medium">1099₽</span>
                    </div>

                    <div className="grid grid-cols-[121px_1fr] gap-[5px]">
                        <div className="flex items-center gap-[17px] px-[13px] h-[47px] border border-[#E6E6E6] rounded-[24px]">
                            <button>
                                <svg className="h-[22px] w-[22px] fill-none" aria-hidden="true">
                                    <use xlinkHref="/sprites/sprite.svg#-"></use>
                                </svg>
                            </button>

                            <span className="text-[#21201F] text-[18px] font-medium">1</span>

                            <button>
                                <svg className="h-[22px] w-[22px] fill-none" aria-hidden="true">
                                    <use xlinkHref="/sprites/sprite.svg#+"></use>
                                </svg>
                            </button>
                        </div>
                        <Button text="Добавить" className="h-[47px] w-full" />
                    </div>
                </div>
            </div>
        </LayoutModal>,
        document.getElementById("portal") as HTMLElement,
    );
};

export default CardModal;
