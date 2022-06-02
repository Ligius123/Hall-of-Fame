import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  // wrapper: {
  //   margin: "8rem auto",
  //   backgroundImage: url("LockerRoom.jpg"),
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: cover,
  //   backgroundPosition: center,
  //   width: "60%",
  //   textAlign: center,
  //   display: flex,
  //   justifyContent: center,
  //   borderRadius: "16px",
  //   boxShadow: "0 0 15px 5px rgba(0, 0, 0, 0.75)",
  //   maxWidth: "60rem",
  //   /* width: 90%; */
  //   margin: "2rem auto",
  //   animation: "wrapper-appear 1s ease-out forwards",
  // },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#38015c",
    boxShadow: "0 1px 4px rgba(0, 0, 0, 0.2)",
    opacity: "0.9",
    // position: "relative",
    // padding: theme.spacing(2),
    padding: "1rem",
    borderRadius: "6px",
    margin: "7rem auto",
    width: "110%",
    maxWidth: "25rem",
    // display: "inline-block",
    // marginLeft: "auto",
    // marginRight: "auto",
    // textAlign: "left",
    // textAlign:"center",
    // align:"center",
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
}));
