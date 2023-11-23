import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main, Order } from "pages";
import { Layout } from "components";
import { ROUTES } from "constants/";
import { useEffect } from "react";
import { useMatchMedia } from "hooks";

function App() {
    const { isMobile, isTablet, isDesktop } = useMatchMedia();

    useEffect(() => {
        const a = document.querySelector("meta[name=viewport]");

        isTablet &&
            a?.setAttribute(
                "content",
                isTablet ? "width=1365, initial-scale=1" : "width=device-width, initial-scale=1",
            );
    }, []);

    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path={`${ROUTES.HOME}`} element={<Main />} />
                    <Route path={`${ROUTES.ORDER}`} element={<Order />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
