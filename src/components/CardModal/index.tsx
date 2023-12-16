import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { LayoutModal, Button } from "components";
import { useAppSelector, useAppDispatch } from "hook";
import { useMatchMedia } from "hooks";
import { addCard, deleteCard, setActiveModal } from "store";
import { ROUTES } from "constants/";

const CardModal = () => {
    const dispatch = useAppDispatch();
    const modals = useAppSelector((state) => state.modals);
    const cards = useAppSelector((state) => state.orders.cards);

    const card =
        cards[cards.findIndex((card: any) => card.product.id === modals.itemCardModal.id)] || 0;

    modals.activeModal === "card" && document.body.classList.add("lock");

    const navigate = useNavigate();

    const { isMobile } = useMatchMedia();

    return createPortal(
        <LayoutModal
            className="p-[15px] w-[1000px] sm:p-0"
            closeModal={() => {
                dispatch(setActiveModal(""));
            }}
            active={modals.activeModal === "card"}
        >
            <div className="grid grid-cols-[1fr_1fr] gap-[25px] md:grid-cols-[1fr] sm:gap-0">
                <div className="bg-white h-[473px] rounded-[44px] sm:rounded-none sm:h-[350px]">
                    <img
                        className="h-full object-cover w-full rounded-[44px]"
                        src={modals.itemCardModal.image.replace(
                            "http://89.248.201.151",
                            "https://fiksroll.ru",
                        )}
                        alt=""
                    />
                </div>

                <div className="p-5">
                    <div className="py-[18px] flex flex-col gap-5 sm:py-0 sm:gap-4">
                        <div>
                            <h2 className="text-[36px] font-medium leading-[111%] sm:text-[32px]">
                                {modals.itemCardModal.name}
                            </h2>
                            <p className="text-[12px] font-medium text-[#6C6C6C]">
                                {modals.itemCardModal.storageConditions}
                            </p>
                        </div>

                        {modals.itemCardModal.description && (
                            <div>
                                <p className="text-[#21201F] text-[16px] font-medium mb-1 sm:text-[14px]">
                                    Состав:
                                </p>
                                <ol className="text-[#21201F] text-[15px] sm:text-[14px]">
                                    {modals.itemCardModal.description
                                        .split(";")
                                        .map((item: string, index: number) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                </ol>
                            </div>
                        )}

                        {modals.itemCardModal.mobileDescription && (
                            <div>
                                <p className="text-[#21201F] text-[16px] font-medium mb-1 sm:text-[14px]">
                                    Описание состава:
                                </p>
                                <ol className="text-[#21201F] text-[15px] sm:text-[14px]">
                                    {modals.itemCardModal.mobileDescription
                                        .split(";")
                                        .map((item: string, index: number) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                </ol>
                            </div>
                        )}

                        <div>
                            <p className="text-[#6C6C6C] text-[12px] font-medium mb-[6px]">
                                Пищевая ценность на {modals.itemCardModal.weight} г.
                            </p>
                            <div className="grid grid-cols-[1fr_1fr_1fr_1fr]">
                                {Number(modals.itemCardModal.protein) !== 0 && (
                                    <div className="text-[#21201F] flex flex-col gap-1 text-[12px] font-medium">
                                        <span>Белки</span>
                                        <span>{modals.itemCardModal.protein.split(".")[0]} г.</span>
                                    </div>
                                )}

                                {Number(modals.itemCardModal.fat) !== 0 && (
                                    <div className="text-[#21201F] flex flex-col gap-1 text-[12px] font-medium">
                                        <span>Жиры</span>
                                        <span>{modals.itemCardModal.fat.split(".")[0]} г.</span>
                                    </div>
                                )}

                                {Number(modals.itemCardModal.carbohydrates) !== 0 && (
                                    <div className="text-[#21201F] flex flex-col gap-1 text-[12px] font-medium">
                                        <span>Углеводы</span>
                                        <span>
                                            {modals.itemCardModal.carbohydrates.split(".")[0]} г.
                                        </span>
                                    </div>
                                )}

                                {Number(modals.itemCardModal.calories) !== 0 && (
                                    <div className="text-[#21201F] flex flex-col gap-1 text-[12px] font-medium">
                                        <span>Энерг. ценн</span>
                                        <span>
                                            {modals.itemCardModal.calories.split(".")[0]} ккал.
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 py-[13px] border-t border-[#f2f2f2] flex justify-between text-[#21201F] items-center gap-4">
                        <p className="text-[15px]">{modals.itemCardModal.name}</p>
                        <span className="text-[22px] font-medium">
                            {card.count > 0
                                ? card.total
                                : modals.itemCardModal.floatprice.split(".")[0]}
                            ₽
                        </span>
                    </div>

                    <div
                        className={classNames(
                            "gap-[5px]",
                            card.count > 0 ? "grid grid-cols-[121px_1fr]" : "grid grid-cols-[1fr]",
                        )}
                    >
                        {card.count > 0 && (
                            <div className="flex items-center gap-[17px] px-[13px] h-[47px] border border-[#E6E6E6] rounded-[24px]">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        dispatch(deleteCard(modals.itemCardModal));
                                    }}
                                >
                                    <svg className="h-[22px] w-[22px] fill-none" aria-hidden="true">
                                        <use xlinkHref="/sprites/sprite.svg#-"></use>
                                    </svg>
                                </button>

                                <span className="text-[#21201F] text-[18px] font-medium">
                                    {card.count}
                                </span>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        dispatch(addCard(modals.itemCardModal));
                                    }}
                                >
                                    <svg className="h-[22px] w-[22px] fill-none" aria-hidden="true">
                                        <use xlinkHref="/sprites/sprite.svg#+"></use>
                                    </svg>
                                </button>
                            </div>
                        )}

                        <Button
                            clickHandler={() => {
                                if (card.count > 0) {
                                    document.body.classList.remove("lock");
                                    dispatch(setActiveModal(""));
                                    if (isMobile) {
                                        dispatch(setActiveModal("cart"));
                                    } else navigate(ROUTES.ORDER);
                                } else dispatch(addCard(modals.itemCardModal));
                            }}
                            text={card.count > 0 ? "Оформить заказ" : "Добавить"}
                            className="h-[47px] w-full"
                        />
                    </div>
                </div>
            </div>
        </LayoutModal>,
        document.getElementById("portal") as HTMLElement,
    );
};

export default CardModal;
