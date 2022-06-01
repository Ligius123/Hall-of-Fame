import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import classes from "./AuthForm.module.css";
import { signin, signup } from "../../actions/auth";

const initialState = { email: "", password: "" };
const AuthForm = () => {
  const [form, setForm] = useState(initialState);
  const history = useHistory();
  const dispatch = useDispatch();

  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isLogin) {
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }
  };

  const handleChange = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value });

  return (
    <section className={classes.wrapper}>
      <div className={classes.auth}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={handleSubmit}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required onChange={handleChange} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              onChange={handleChange}
            />
          </div>
          <div className={classes.actions}>
            <button>{isLogin ? "Login" : "Create Account"}</button>
            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AuthForm;
