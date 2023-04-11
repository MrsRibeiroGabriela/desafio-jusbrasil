//pages
import Home from "../../pages/Home/Home";
import ListRecordsByCourt from "../../pages/ListRecordsByCourt/ListRecordsByCourt";
import RecordByCNJ from "../../pages/RecordByCNJ/RecordByCNJ";

//router
import { Routes, Route, useLocation } from "react-router-dom";

//motion
import { AnimatePresence } from "framer-motion";

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <div data-testid="anim-routes">
      <AnimatePresence initial={true} mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/record" element={<RecordByCNJ />} />
          <Route path="/records" element={<ListRecordsByCourt />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default AnimRoutes;
