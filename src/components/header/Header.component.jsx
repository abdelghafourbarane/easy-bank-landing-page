import React from "react";

import SpecialButton from "../special-button/SpecialButton.component";

import classes from "./Header.styles.module.scss";

class Header extends React.Component {
  render() {
    return (
      <div className={classes.header}>
        <a className={classes.logo}>
          <img src="/assets/logo.svg" />
        </a>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Careeres</a>
          </li>
        </ul>
        <SpecialButton text="Request Invite" />
      </div>
    );
  }
}

export default Header;
