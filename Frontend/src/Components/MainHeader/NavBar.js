import React from "react";
import { Fragment } from "react";
import Button from "../UI/Button";
import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  return (
    <Fragment>
      <nav className={classes.wrapper}>
        <div className={classes.title}>Hall of Fame</div>
        <div className={classes.rowSecond}>
          <Button type="button">Home</Button>
          <div className={classes.pages}>
            <Button type="button">Shop</Button>
            <div className={classes.dropdown}>
              <Button className={classes.Button}>Presentation</Button>
              <div className={classes.dropdown_content}>
                <NavLink to="/HagiPage">Gheoarghe Hagi</NavLink>
                <NavLink to="/ComaneciPage">Nadia Comaneci</NavLink>
                <NavLink to="/BranzaPage">Ana Maria Branza</NavLink>
                <NavLink to="/HalepPage">Simona Halep</NavLink>
              </div>
            </div>

            <NavLink to="/AuthPage">
              <Button>Sign In</Button>
            </NavLink>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;