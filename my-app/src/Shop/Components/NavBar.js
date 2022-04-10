import React from "react";
import classes from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <nav className={classes.NavBarTotal}>
      <div className={classes.Title}>Hall of Fame</div>
      <div>
        <div className={classes.NavBarButtons}>
          <button type="button" className={classes.Button}>
            Home
          </button>
          <div>
            <button type="button" className={classes.Button}>
              Shop
            </button>
            <button type="button" className={classes.Button}>
              Presentation
            </button>
            <button type="button" className={classes.Button}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
