// @ts-nocheck
import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { LayoutModal, Button } from "components";
import { useAppSelector, useAppDispatch } from "hook";
import { setActiveModal, addDelivery } from "store";
import { GeolocationControl, Map, ZoomControl } from "@pbe/react-yandex-maps";

const DeliveryAddressModal = () => {
    const activeModal = useAppSelector((state) => state.modals.activeModal);
    const orders = useAppSelector((state) => state.orders);
    const dispatch = useAppDispatch();

    activeModal === "delivery-address" && document.body.classList.add("lock");

    const mapOptions = {
        modules: ["geocode", "SuggestView"],
        defaultOptions: { suppressMapOpenBlock: true },
    };

    const initialState = {
        title: orders.delivery.adresse?.title || orders.city.title,
        center: orders.delivery.adresse?.center || orders.city.center,
        zoom: 12,
    };

    const geolocationOptions = {
        defaultOptions: { maxWidth: 128 },
        defaultData: { content: "Determine" },
    };

    const [state, setState] = useState({ ...initialState });
    const [mapConstructor, setMapConstructor] = useState(null);
    const mapRef = useRef(null);
    const searchRef = useRef(null);

    const handleSubmit = () => {
        dispatch(
            addDelivery({ adresse: { title: state.title, center: mapRef.current.getCenter() } }),
        );
    };

    const handleReset = () => {
        mapRef.current.setCenter(orders.city.center);
        mapRef.current.setZoom(12);
    };

    const handleBoundsChange = (e) => {
        const newCoords = mapRef.current.getCenter();

        mapConstructor.geocode(newCoords).then((res) => {
            const nearest = res.geoObjects.get(0);
            const foundAddress = nearest.properties.get("text");
            const [centerX, centerY] = nearest.geometry.getCoordinates();
            const [initialCenterX, initialCenterY] = initialState.center;

            if (centerX !== initialCenterX && centerY !== initialCenterY) {
                setState((prevState) => ({ ...prevState, title: foundAddress }));
                searchRef.current.value = foundAddress;
            }
        });
    };

    useEffect(() => {
        if (searchRef.current)
            searchRef.current.value = orders.delivery.adresse?.title || orders.city.title;
    }, [searchRef]);

    useEffect(() => {
        if (mapConstructor) {
            new mapConstructor.SuggestView(searchRef.current).events.add("select", function (e) {
                const selectedName = e.get("item").value;
                mapConstructor.geocode(selectedName).then((result) => {
                    const newCoords = result.geoObjects.get(0).geometry.getCoordinates();
                    setState((prevState) => ({ ...prevState, center: newCoords }));
                });
            });
        }
    }, [mapConstructor]);

    return createPortal(
        <LayoutModal
            className="px-[22px] pt-[26px] pb-[22px] w-[817px] sm:p-0 sm:w-full"
            closeModal={() => {
                dispatch(setActiveModal(""));
            }}
            active={activeModal === "delivery-address"}
        >
            <>
                <div className="flex items-center pr-[110px] justify-between mb-[78px] sm:pr-0 sm:mb-0 sm:absolute sm:top-[78px] sm:left-1/2 sm:-translate-x-1/2">
                    <div className="sm:hidden">
                        <h3 className="text-[36px] font-medium leading-[111%] text-[#000] mb-[5px]">
                            Адрес доставки
                        </h3>
                        <p className="text-[15px] text-[#000]">Чтобы курьер смог вас найти</p>
                    </div>

                    <ul className="flex px-[10px] py-2 bg-[#F6F5F3] rounded-2xl gap-[10px] text-[#21201F] text-[16px] sm:border sm:border-[#000]">
                        <li className="py-[10px] px-[27px] bg-white rounded-[13px]">Доставка</li>
                        <li className="py-[10px] px-[27px] rounded-[13px]">Навынос</li>
                    </ul>
                </div>

                <div className="sm:flex sm:flex-col-reverse">
                    <div className="bg-white grid grid-cols-[1fr_274px] gap-[11px] sm:grid-cols-[1fr] sm:py-6 sm:px-[10px] sm:rounded-t-[16px] sm:-mt-4">
                        <div className="relative flex items-center">
                            <svg className="w-4 h-4 absolute left-[18px]" aria-hidden="true">
                                <use xlinkHref="/sprites/sprite.svg#location"></use>
                            </svg>

                            <input
                                ref={searchRef}
                                type="text"
                                className="h-14 bg-[#F9F7F7] rounded-[13px] w-full px-12 text-[#000] text-[16px]"
                            />

                            <button className="absolute right-[18px]" onClick={handleReset}>
                                <svg className="w-[14px] h-[14px]" aria-hidden="true">
                                    <use xlinkHref="/sprites/sprite.svg#close"></use>
                                </svg>
                            </button>
                        </div>

                        <Button
                            text="Выбрать адрес"
                            className="h-[56px] w-full"
                            clickHandler={() => {
                                handleSubmit();
                                dispatch(setActiveModal(""));
                                document.body.classList.remove("lock");
                            }}
                        />
                    </div>

                    <div className="mt-[13px] sm:mt-0">
                        <Map
                            {...mapOptions}
                            state={state}
                            onLoad={setMapConstructor}
                            onBoundsChange={handleBoundsChange}
                            instanceRef={mapRef}
                            className="w-full h-[350px] sm:h-[550px] relative"
                        >
                            <p className="absolute top-1/2 left-1/2 z-10">123</p>

                            <GeolocationControl {...geolocationOptions} />

                            <ZoomControl />
                        </Map>
                    </div>
                </div>
            </>
        </LayoutModal>,
        document.getElementById("portal") as HTMLElement,
    );
};

export default DeliveryAddressModal;
