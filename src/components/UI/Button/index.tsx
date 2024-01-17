import classNames from "classnames";

const Button = ({ text, className, clickHandler, disabled }: { text: string; className?: string; clickHandler?: () => void; disabled?: boolean }) => {
    return (
        <button
            className={classNames(
                "text-[#21201F] text-[16px] font-medium flex bg-[#FFCD36] rounded-2xl items-center justify-center gap-[10px] w-[256px] disabled:opacity-40",
                className,
            )}
            onClick={clickHandler}
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default Button;
