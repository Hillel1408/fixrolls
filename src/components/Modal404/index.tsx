import { createPortal } from "react-dom";
import { LayoutModal, Button } from "components";

const Modal404 = ({ active, setActive }: { active: boolean; setActive: (a: boolean) => void }) => {
    active && document.body.classList.add("lock");

    return createPortal(
        <LayoutModal
            className="w-[818px] sm:w-full h-[772px]"
            closeModal={() => {
                setActive(false);
            }}
            active={active}
        >
            <div className="relative h-full">
                <div className="flex items-center justify-center h-full flex-col gap-2">
                    <h2 className="text-[#21201F] text-[60px] font-medium">404</h2>
                    <p className="text-[#21201F] text-[14px]">раздел находится в разработке</p>
                </div>

                <div className="hidden px-5 py-3 bg-[#F9F7F7] rounded-t-2xl absolute bottom-0 left-0 right-0 sm:block">
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

export default Modal404;
