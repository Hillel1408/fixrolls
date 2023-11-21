import { Sidebar, Cart, Slider, Card, CardModal } from "components";
import { useMatchMedia } from "hooks";

const Main = () => {
    const { isMobile, isTablet, isDesktop } = useMatchMedia();

    return (
        <>
            <div className="container sm:px-0">
                <div className="grid grid-cols-[232px_1fr_334px] pt-4 rounded-2xl items-start gap-[26px] xl:grid-cols-[232px_1fr] sm:grid-cols-[1fr] sm:pt-0">
                    {(isDesktop || isTablet) && <Sidebar />}

                    <div className="overflow-hidden">
                        <Slider />

                        {isMobile && <Sidebar />}

                        <div className="flex flex-col gap-[50px] sm:px-[10px] sm:mt-6">
                            {new Array(4).fill("").map((item, index) => (
                                <div key={index}>
                                    <h2 className="text-[#21201F] text-[30px] font-medium mb-4 sm:text-[24px]">
                                        Сеты по 599₽
                                    </h2>

                                    <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-x-2 gap-y-4 sm:grid-cols-[1fr_1fr] sm:gap-y-2">
                                        {new Array(7).fill("").map((item, index) => (
                                            <Card key={index} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {isDesktop && <Cart />}
                </div>
            </div>

            <CardModal />
        </>
    );
};

export default Main;
