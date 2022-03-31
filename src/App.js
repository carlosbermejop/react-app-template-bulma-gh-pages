import "bulma/css/bulma.min.css";
import { Navbar } from "./navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { NotFoundPage } from "./pages/NotFoundPage";
import packageJSON from "../package.json";

const App = () => {
  return (
    <Router
      basename={
        process.env.NODE_ENV === "production" ? `${packageJSON.name}/` : "/"
      }
    >
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Homepage />} exact />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
