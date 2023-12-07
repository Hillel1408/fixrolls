import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main, Order } from "pages";
import { ROUTES } from "constants/";

function App() {
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
