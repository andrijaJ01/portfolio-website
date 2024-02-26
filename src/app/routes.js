import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { Socialicons } from "../components/socialicons";

const PageRoutes = withRouter(({ location }) => (

      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
  
));

function AppRoutes() {
  return (
    <div className="s_c">
      <PageRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
