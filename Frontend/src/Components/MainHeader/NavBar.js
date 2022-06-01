import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import Button from "../UI/Button";
import classes from "./NavBar.module.css";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import * as actionType from "../../Constants/actionTypes";

const NavBar = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    window.localStorage.clear();
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    if (location.pathname === "/AuthPage") {
      dispatch({ type: actionType.LOGOUT });
      setUser(null);
    }
    //if(location.)

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <Fragment>
      <nav className={classes.wrapper}>
        <div className={classes.title}>Hall of Fame</div>
        <div className={classes.rowSecond}>
          {user?.result ? (
            <>
              <NavLink to="/HomePage">
                <Button>
                  <img
                    src={process.env.PUBLIC_URL + "/Home-icon.svg.png"}
                    width="25"
                    height="25"
                    alt=""
                  />
                </Button>
              </NavLink>
              <div className={classes.pages}>
                <NavLink to="/ShopPage">
                  <Button type="button">Shop</Button>
                </NavLink>
                <div className={classes.dropdown}>
                  <Button className={classes.Button}>Presentation</Button>
                  <div className={classes.dropdown_content}>
                    <NavLink to="/HagiPage">Gheorghe Hagi</NavLink>
                    <NavLink to="/ComaneciPage">Nadia Comaneci</NavLink>
                    <NavLink to="/BranzaPage">Ana Maria Branza</NavLink>
                    <NavLink to="/HalepPage">Simona Halep</NavLink>
                  </div>
                </div>
                <NavLink to="/AuthPage">
                  <Button>Logout</Button>
                </NavLink>
              </div>
            </>
          ) : (
            <NavLink to="/AuthPage">
              <Button>Sign In</Button>
            </NavLink>
          )}
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
