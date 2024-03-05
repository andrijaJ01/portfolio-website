import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { Skills } from "../pages/skills";
import { Socialicons } from "../components/socialicons";


const WebsiteRoutes = withRouter(({ location }) => (
  
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
    
));

function AppRoutes() {
  return (
    <div className="s_c">
      <WebsiteRoutes />
      
    </div>
  );
}

export default AppRoutes;