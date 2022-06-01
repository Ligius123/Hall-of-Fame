import React from "react";
import { Fragment } from "react";
import Button from "../UI/Button";
import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { fetchPosts } from "../../api";

const NavBar = (props) => {
  //const { posts } = useSelector((state) => state.posts);

  //fct care returneaza toate item urile dintr o colectie de mongoDB
  const handleClick = async ()=>{
    try{
      console.log("aici");
      const response =  await fetchPosts();
      console.log(response);
    }catch(err){
        console.log(err);
    }
  }

  handleClick();

  return (
    <Fragment>
      <nav className={classes.wrapper}>
        <div className={classes.title}>Hall of Fame</div>
        <div className={classes.rowSecond}>
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
              <Button type="button" onClick={handleClick}>Shop</Button>
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
              <Button>Sign In</Button>
            </NavLink>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
