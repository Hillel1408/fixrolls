import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main, Order } from "pages";
import { ROUTES } from "constants/";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        window.addEventListener("resize", (e) => {
            setTimeout(() => {
                const mvp = document.getElementById("myViewport");

                window.screen.width > 479
                    ? mvp?.setAttribute("content", "width=1365")
                    : mvp?.setAttribute("content", "width=device-width, initial-scale=1");
            }, 300);
        });
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
