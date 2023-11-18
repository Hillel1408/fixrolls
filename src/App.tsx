import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main, Order } from "pages";
import { Layout } from "components";
import { ROUTES } from "constants/";

function App() {
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
