import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.FooterTotal}>
      <ul className={classes.ListFooter}>
        <li className={classes.ListFooter_item}>Privacy Policies</li>
        <li className={classes.ListFooter_item}>Terms of Use</li>
        <li className={classes.ListFooter_item}>Security</li>
      </ul>
    </footer>
  );
};

export default Footer;
