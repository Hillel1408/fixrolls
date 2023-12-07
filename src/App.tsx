import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main, Order } from "pages";
import { ROUTES } from "constants/";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        const a = () => {
            const mvp = document.getElementById("myViewport");

            window.screen.width > 479
                ? mvp?.setAttribute("content", "width=1365")
                : mvp?.setAttribute("content", "width=device-width, initial-scale=1");
        };

        window.addEventListener("resize", (e) => {
            setTimeout(() => {
                a();
            }, 300);
        });
        a();
    }, []);

    return (
        <Router>
            <Routes>
                <Route path={`${ROUTES.HOME}`} element={<Main />} />
                <Route path={`${ROUTES.ORDER}`} element={<Order />} />
            </Routes>
        </Router>
    );
}

export default App;
