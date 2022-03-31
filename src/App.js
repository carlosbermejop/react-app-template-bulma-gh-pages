import "bulma/css/bulma.min.css";
import { Navbar } from "./Navbar/Navbar";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { NotFoundPage } from "./pages/NotFoundPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} exact />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
