import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "hook";
import { setActiveCharacter } from "store";
import { Card } from "components";

const CardsBlock = ({
    item,
    refs,
    pageHeight,
    index,
}: {
    item: any;
    refs: any;
    pageHeight: number;
    index: number;
}) => {
    const dispatch = useAppDispatch();
    const activeCharacter = useAppSelector((state) => state.orders.activeCharacter);

    const observerMargin = Math.floor(pageHeight / 2);

    useEffect(() => {
        const observerConfig = {
            rootMargin: `-${
                pageHeight % 2 === 0 ? observerMargin - 1 : observerMargin
            }px 0px -${observerMargin}px 0px`,
        };

        const handleIntersection = function (entries: any) {
            entries.forEach((entry: any) => {
                if (entry.target.id !== activeCharacter && entry.isIntersecting) {
                    dispatch(setActiveCharacter({ id: entry.target.id, index: index }));
                }
            });
        };
        const observer = new IntersectionObserver(handleIntersection, observerConfig);
        observer.observe(refs[item.description.id].current);
        return () => observer.disconnect();
    }, [item, activeCharacter, dispatch, observerMargin, pageHeight, refs, index]);

    return (
        <div id={item.description.id} ref={refs[item.description.id]}>
            <h2 className="text-[#21201F] text-[30px] font-medium mb-4 lg:text-[24px]">
                {item.description.name}
            </h2>

            <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-x-2 gap-y-4 2xl:grid-cols-[1fr_1fr_1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr_1fr] md:grid-cols-[1fr_1fr_1fr_1fr] sm:grid-cols-[1fr_1fr] sm:gap-y-2">
                {item.childrens.map(
                    (item: any) =>
                        item.description.mobileEnable !== "0" && (
                            <Card key={item.description.id} item={item.description} />
                        ),
                )}
            </div>
        </div>
    );
};

export default CardsBlock;
