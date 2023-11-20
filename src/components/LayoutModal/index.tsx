import classNames from "classnames";
import { LayoutModalProps } from "components/LayoutModal/LayoutModal.props";

const LayoutModal = ({ children, closeModal, active, className }: LayoutModalProps) => {
    return (
        <div
            className={classNames(
                "fixed top-0 w-full h-full bg-[rgba(0,0,0,0.40)] overflow-auto duration-200 min-w-[375px] z-20",
                active ? "visible opacity-100" : "invisible opacity-0",
            )}
            onClick={() => {
                closeModal();
                document.body.classList.remove("lock");
            }}
        >
            <div className="py-5 flex items-center justify-center min-h-full sm:px-4">
                <div
                    className={classNames("bg-white rounded-[32px] relative", className)}
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}

                    <button
                        className="absolute top-[29px] right-[38px]"
                        onClick={() => {
                            closeModal();
                            document.body.classList.remove("lock");
                        }}
                    >
                        <svg className="h-9 w-9 fill-none" aria-hidden="true">
                            <use xlinkHref="/sprites/sprite.svg#delete"></use>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LayoutModal;
