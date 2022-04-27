import React from "react";
import { Fragment } from "react";
import Button from "../UI/Button";
import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  return (
    <Fragment>
      <div className={classes.wrapper}>
        <div className={classes.title}>Hall of Fame</div>
        <div className={classes.rowSecond}>
          <Button type="button">Home</Button>
          <div className={classes.pages}>
            <Button type="button">Shop</Button>
            <div className={classes.dropdown}>
              <Button className={classes.Button}>Presentation</Button>
              <div className={classes.dropdown_content}>
                <NavLink to="/PHagi">Gheoarghe Hagi</NavLink>
                <NavLink to="/PComaneci">Nadia Comaneci</NavLink>
                <NavLink to="/PBranza">Ana Maria Branza</NavLink>
                <NavLink to="/PHalep">Simona Halep</NavLink>
              </div>
            </div>
            <Button type="button">Sign In</Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NavBar;
