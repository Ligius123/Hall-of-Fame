import imageHall from "./ImageHall.jpg";
import classes from "./Home.module.css";
const Home = () => {
  return <img src={imageHall} alt="" className={classes.picture}/>;
};

export default Home;
