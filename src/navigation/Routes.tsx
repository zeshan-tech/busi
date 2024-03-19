import { Routes as RRoutes, Route } from "react-router-dom";
import { Appbar } from "../Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Blogs from "../pages/Blogs";
import Services from "../pages/Services";
import Contact from "../pages/Contact";

const Routes = () => {
  return (
    <RRoutes>
      <Route element={[<Appbar />]}>
        <Route path='*' Component={Home} />
        <Route path='/home' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/blogs' Component={Blogs} />
        <Route path='/contact' Component={Contact} />
        <Route path='/services' Component={Services} />
      </Route>
    </RRoutes>
  );
};

export default Routes;
