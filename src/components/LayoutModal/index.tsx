import classNames from "classnames";
import { LayoutModalProps } from "components/LayoutModal/LayoutModal.props";

const LayoutModal = ({
  children,
  text,
  closeModal,
  active,
}: LayoutModalProps) => {
  return (
    <div
      className={classNames(
        "fixed top-0 w-full h-full bg-[rgba(0,0,0,0.40)] overflow-auto duration-200 min-w-[375px] z-20",
        active ? "visible opacity-100" : "invisible opacity-0"
      )}
      onClick={() => {
        closeModal();
        document.body.classList.remove("lock");
      }}
    >
      <div className="py-5 flex items-center justify-center min-h-full sm:px-4">
        <div
          className="bg-[#E5EAF0] rounded-[10px] px-10 pt-[50px] pb-[30px] w-[553px] relative md:w-[424px] sm:px-6 sm:pt-[65px]"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-[#8B9BA9] text-3xl leading-none font-bold text-center mb-10 sm:text-[25px] sm:mb-[26px]">
            {text}
          </h3>

          {children}

          <button
            className="absolute top-1 right-1 sm:left-0 sm:right-0 sm:flex sm:justify-center sm:top-4"
            onClick={() => {
              closeModal();
              document.body.classList.remove("lock");
            }}
          >
            <svg className="h-[20px] w-[20px] fill-none" aria-hidden="true">
              <use xlinkHref="/sprites/sprite.svg#delete"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LayoutModal;
