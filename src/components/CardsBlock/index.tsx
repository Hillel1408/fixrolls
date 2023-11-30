import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "hook";
import { setActiveCharacter } from "store";
import { Card } from "components";

const CardsBlock = ({ item, refs, pageHeight }: { item: any; refs: any; pageHeight: number }) => {
    const dispatch = useAppDispatch();
    const activeCharacter = useAppSelector((state) => state.modals.activeCharacter);

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
                    console.log(entry.target.id);
                    dispatch(setActiveCharacter(entry.target.id));
                }
            });
        };
        const observer = new IntersectionObserver(handleIntersection, observerConfig);
        observer.observe(refs[item.description.id].current);
        return () => observer.disconnect();
    }, [item, activeCharacter, dispatch, observerMargin, pageHeight, refs]);

    return (
        <div id={item.description.id} ref={refs[item.description.id]} className="pt-[50px]">
            <h2 className="text-[#21201F] text-[30px] font-medium mb-4 sm:text-[24px]">
                {item.description.name}
            </h2>

            <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-x-2 gap-y-4 2xl:grid-cols-[1fr_1fr_1fr_1fr] sm:grid-cols-[1fr_1fr] sm:gap-y-2">
                {item.childrens.map((item: any) => (
                    <Card key={item.description.id} item={item.description} />
                ))}
            </div>
        </div>
    );
};

export default CardsBlock;
