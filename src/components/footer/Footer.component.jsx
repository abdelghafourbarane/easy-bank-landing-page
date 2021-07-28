import SpecialButton from "../special-button/SpecialButton.component";

import classes from "./Footer.styles.module.scss";

import { ReactComponent as Logo } from "../../assets/logo.svg";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.brands_container}>
        <Logo className={classes.logo} />
        <div className={classes.social_list}>
          <img src="/assets/icon-facebook.svg" />
          <img src="/assets/icon-youtube.svg" />
          <img src="/assets/icon-twitter.svg" />
          <img src="/assets/icon-pinterest.svg" />
          <img src="/assets/icon-instagram.svg" />
        </div>
      </div>
      <div className={classes.pages_list}>
        <a>About Us</a>
        <a>Careers</a>
        <a>Contact</a>
        <a>Support</a>
        <a>Blog</a>
        <a>Privacy Policy</a>
      </div>
      <div className={classes.copyright_container}>
        <div className={classes.special_button}>
          <SpecialButton text="Request Invite" />
        </div>

        <span>© Easybank. All Rights Reserved</span>
      </div>
    </div>
  );
}

export default Footer;
