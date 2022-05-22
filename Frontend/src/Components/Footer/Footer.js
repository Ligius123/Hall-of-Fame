import classes from "./Footer.module.css";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <div className={classes.wrapper}>
        <div></div>
        <li className={classes.elements}>
          <NavLink to="Terms" className={classes.element}>Terms of Use</NavLink>
          <NavLink to="Privacy" className={classes.element}>Privacy Policies</NavLink>
          <NavLink to="About" className={classes.element}>About</NavLink>
        </li >
        <div></div>
      </div>
    </Fragment>
  );
};

export default Footer;
