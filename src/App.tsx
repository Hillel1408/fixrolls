import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "pages";
import { Layout } from "components";
import { ROUTES } from "constants/";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={`${ROUTES.HOME}`} element={<Main />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
