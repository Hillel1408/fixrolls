import { createPortal } from "react-dom";
import { LayoutModal, Button } from "components";

const PromotionModal = ({
    active,
    setActive,
    item,
}: {
    active: boolean;
    setActive: (a: boolean) => void;
    item: { title: string; description: string; fullImage: string };
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
                <img
                    className="h-[237px] object-cover w-full"
                    src={`/images/${item.fullImage}`}
                    alt=""
                />

                <div className="pt-7 px-5 h-[535px] overflow-y-auto pb-[100px]">
                    <h2 className="text-[#000] text-[32px] font-medium mb-7">{item.title}</h2>

                    <div className="flex flex-col gap-3 whitespace-pre-wrap">
                        {item.description}
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
