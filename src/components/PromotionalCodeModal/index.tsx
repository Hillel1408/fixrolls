import { createPortal } from "react-dom";
import { useAppDispatch, useAppSelector } from "hook";
import { addPromoCode, setActiveModal } from "store";
import { LayoutModal, Button } from "components";
import data from "data/data.json";
import { useState } from "react";
import classNames from "classnames";

const PromotionalCodeModal = () => {
    const [flag, setFlag] = useState(false);
    const [value, setValue] = useState("");

    const dispatch = useAppDispatch();
    const orders = useAppSelector((state) => state.orders);
    const activeModal = useAppSelector((state) => state.modals.activeModal);

    activeModal === "promotion-code" && document.body.classList.add("lock");

    return createPortal(
        <LayoutModal
            className="p-[32px] w-[400px] sm:w-full"
            closeModal={() => {
                dispatch(setActiveModal(""));
            }}
            active={activeModal === "promotion-code"}
        >
            <>
                <h3 className="text-[#000] text-[36px] leading-[111%] font-medium mb-[22px] max-w-[325px] sm:text-[22px]">
                    Промокод
                </h3>

                <div className="mb-4">
                    <input
                        type="text"
                        className={classNames(
                            "h-12 px-[17px] mb-2 rounded-[16px] border placeholder:text-[#9E9B98] placeholder:text-[16px] w-full",
                            flag ? "border-[red]" : "border-[#D2D0CC]",
                        )}
                        placeholder="Вставьте промокод"
                        value={value}
                        onChange={(e) => {
                            flag && setFlag(false);
                            setValue(e.target.value);
                        }}
                    />

                    {flag && <p className="text-[red]">Неверный промокод</p>}
                </div>

                <Button
                    text="Применить"
                    className="h-[48px] w-full"
                    disabled={value === ""}
                    clickHandler={() => {
                        let flag = false;

                        data.map(
                            (item) =>
                                item.region === orders.city.region &&
                                item.promo_codes.map((item) => {
                                    if (item.code === value) flag = true;
                                }),
                        );
                        if (flag) {
                            dispatch(addPromoCode(value));
                            document.body.classList.remove("lock");
                            dispatch(setActiveModal(""));
                        } else setFlag(true);
                    }}
                />
            </>
        </LayoutModal>,
        document.getElementById("portal") as HTMLElement,
    );
};

export default PromotionalCodeModal;
