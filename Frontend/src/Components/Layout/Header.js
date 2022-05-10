import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import articlesImage from "./Articles.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Articles</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={articlesImage} alt="A table full of signed articles!" />
      </div>
    </Fragment>
  );
};

export default Header;
