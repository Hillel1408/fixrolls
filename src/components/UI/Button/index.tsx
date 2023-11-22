import classNames from "classnames";

const Button = ({
    text,
    className,
    clickHandler,
}: {
    text: string;
    className?: string;
    clickHandler?: () => void;
}) => {
    return (
        <button
            className={classNames(
                "text-[#21201F] text-[16px] font-medium flex bg-[#FFCD36] rounded-2xl items-center justify-center gap-[10px] w-[256px]",
                className,
            )}
            onClick={clickHandler}
        >
            {text}
        </button>
    );
};

export default Button;
