import classNames from "classnames";

const LayoutModal = ({
    children,
    closeModal,
    active,
    className,
}: {
    children: JSX.Element;
    closeModal: () => void;
    active?: boolean;
    className?: string;
}) => {
    return (
        <div
            className={classNames(
                "fixed top-0 w-full h-full bg-[rgba(0,0,0,0.40)] overflow-auto duration-500 z-20",
                active ? "visible opacity-100" : "invisible opacity-0",
            )}
            onClick={() => {
                closeModal();
                document.body.classList.remove("lock");
            }}
        >
            <div
                className={classNames(
                    "py-5 px-5 flex items-center justify-center min-h-full duration-700 sm:px-0 sm:pb-0 sm:items-end",
                    active
                        ? "translate-x-0"
                        : "translate-x-full sm:translate-x-0 sm:translate-y-full",
                )}
            >
                <div
                    className={classNames(
                        "bg-white rounded-[44px] relative sm:rounded-b-none overflow-hidden",
                        className,
                    )}
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
