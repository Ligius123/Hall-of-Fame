import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import articlesImage from "./Articles.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div></div>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={articlesImage} alt="A table full of signed articles!" />
      </div>
    </Fragment>
  );
};

export default Header;

//A table full of signed articles!
