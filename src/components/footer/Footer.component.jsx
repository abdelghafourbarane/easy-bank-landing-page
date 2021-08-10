import SpecialButton from "../special-button/SpecialButton.component";

import classes from "./Footer.styles.module.scss";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as FacebookLogo } from "../../assets/icon-facebook.svg";
import { ReactComponent as InstagramLogo } from "../../assets/icon-instagram.svg";
import { ReactComponent as YoutubeLogo } from "../../assets/icon-youtube.svg";
import { ReactComponent as PinterestLogo } from "../../assets/icon-pinterest.svg";
import { ReactComponent as TwitterLogo } from "../../assets/icon-twitter.svg";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.brands_container}>
        <Logo className={classes.logo} />
        <div className={classes.social_list}>
          <FacebookLogo fill="current" className={classes.social_icon} />
          <YoutubeLogo className={classes.social_icon} />
          <TwitterLogo className={classes.social_icon} />
          <PinterestLogo className={classes.social_icon} />
          <InstagramLogo className={classes.social_icon} />
        </div>
      </div>
      <div className={classes.pages_list}>
        <a>Careers</a>
        <a>About Us</a>
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
