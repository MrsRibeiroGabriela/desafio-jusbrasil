//components
import Header from "./components/Header/Header";
import AnimRoutes from "./components/AnimRoutes/AnimRoutes";
import Footer from "./components/Footer/Footer";

//import router
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header data-testid="header" />
        <AnimRoutes data-testid="anim-routes" />
        <Footer data-testid="footer" />
      </Router>
    </>
  );
}

export default App;
