import classes from "./ImageSlider.module.css";
const Wrapper = (props) => {
    return <div className={classes.wrapper}>{props.children}</div>
}

export default Wrapper;