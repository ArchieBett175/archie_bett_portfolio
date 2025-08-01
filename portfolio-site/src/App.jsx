import { Routes, Route } from "react-router";
import Landing from "./pages/Landing";
import TerraceTies from "./pages/TerraceTies";
import CodeCaffineCollapse from "./pages/CodeCaffineCollapse";
import PortfolioSite from "./pages/PortfolioSite";
import CurrentlyWorking from "./pages/CurrentlyWorking";
import Projects from "./pages/projects";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects/terraceties" element={<TerraceTies />} />
        <Route
          path="/projects/codecaffinecollapse"
          element={<CodeCaffineCollapse />}
        />
        <Route path="/projects/portfolio" element={<PortfolioSite />} />
        <Route
          path="/projects/under-construction"
          element={<CurrentlyWorking />}
        />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
