import classNames from "classnames";

const Button = ({ text, className }: { text: string; className?: string }) => {
    return (
        <button
            className={classNames(
                "text-[#21201F] text-[16px] font-medium flex bg-[#FFCD36] rounded-2xl items-center justify-center gap-[10px] w-[256px]",
                className,
            )}
        >
            {text}
        </button>
    );
};

export default Button;
