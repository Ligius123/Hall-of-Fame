import { Fragment } from "react";
import NavBar from "./NavBar";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <Fragment>
      <NavBar />
      <main>{props.children}</main>;
      <Footer />   
    </Fragment>
  );
};

export default Layout;
